/// <reference path="gamestate.ts" />

// TODO: Better chess board graphics
// TODO: Add game over / win / restart game

class Game {
    
    private king:King;                      // the king (=player)
    private knights: Knight[] = [];         // list of knights in the game (=computer/AI)
    private gameState:GameState;            // Current gameState (=position of king and knights)

    private readonly KNIGHTS: number = 1;   // number of knights 3

    private gameOver:boolean = false;       // Doet nog niks. 
    private playerTurn:boolean = true;      // Player has first turn 
 
    constructor() {
        //Create board
        Board.getInstance();

        //Create king for the player and put on middle of bottom row
        this.king = new King();
        this.king.initPosition([Math.floor(Board.getInstance().getSize() / 2), Board.getInstance().getSize() - 1])
  
        //Creeer de aantal paarden en geef ze een vaste start-positie.
        let knightPos: [number, number][] = []
        for(let c = 0; c<this.KNIGHTS; c++){                //this.KNIGHTS is 3 === 3 paarden.
            let z:Knight = new Knight();
            let pos: [number, number] = [ Math.floor((c / this.KNIGHTS) * Board.getInstance().getSize()),0]
            z.initPosition(pos);
            knightPos.push(pos);
            this.knights.push(z);
        }

        /* 
        king and knights are also stored in the gameState for use by the AI 
        !!! when positions are updated, both the gameState and the gameObject should be updated !!!
        */
        
        // King & Paarden woorden op bord neergezet. Het spel kan beginnen. 
        this.gameState = new GameState(this.king.boardPosition, knightPos);

        //Koning verplaatsen
        window.addEventListener("click", (e:MouseEvent) => this.onWindowClick(e))
        window.addEventListener("touchend", (e) => this.onTouchStart(e as TouchEvent))

        // start gameloop
        this.gameLoop()
    }

    //De precieze x & y-as coordinaten als je klikt met je vinger of stylus op een ipad of telefoon.
    private onTouchStart(e : TouchEvent) {
        let touchobj = e.changedTouches[0]
        this.playerMove(touchobj.clientX, touchobj.clientY)
     }

    //De precieze x & y-as coordinaten van je muisklik. 
    private onWindowClick(e:MouseEvent):void {
        this.playerMove(e.x, e.y);                              
    }

    //Verplaats de koning naar de tile nadat je geklikt hebt. 
    private playerMove(x:number, y:number):void {
        //Which tile was clicked? boardpos --> (2) [0,0]
        let boardPos: [number, number] = Board.getInstance().screenToBoardPos([x, y]);

        //Check if knights are still moving
        let moving = false;
        for (let go of this.knights){
            if (go.moving) {
                moving = true;
            }
        }

        // Als het de koningsbeurt is én de paarden NIET bewegen én het geen gameover is;
        if ((this.playerTurn) && (!moving) && (!this.gameOver)) {
            let legalMoves: [number, number][] = this.king.getMoves();                      //Array of moves I'm allowed to make. 

            //Check if requested move is a legal move
            for(let m of legalMoves) {
                if (Board.samePosition(m, boardPos)) {
                    console.log("Legal move");
                    this.king.setPosition(boardPos);
                    this.gameState.kingPos = boardPos;
                    this.playerTurn = false;

                    //Check of je gewonnen hebt;
                    //Komt tevoorschijn als je op één paard hebt gestaan & als je aan de overkant bent.
                    if (this.gameState.getScore()[1]) {
                        console.log("Ik heb gewonnen!")
                        this.gameOver = true;                   //Doet nog niks, zorgt er alleen voor dat je niet door kan spelen. 
                    }
                }
            }
        } else {
            console.log("Not player turn, yet");               //Als je hebt gewonnen. 
        }
    }
    
    private gameLoop(){
        // init

        // move king
        this.king.update()

        // move all knights/AI
        for (let go of this.knights){
            go.update()
        }

        // If not playerTurn, AI makes a move
        if (!this.playerTurn) {
            
            new GameAI(this.king, this.knights, this.gameState);
            //GameAI.moveKnight(this.king, this.knights, this.gameState);     //Knight move. 
            this.playerTurn = true;                                         //Player can now play. 

            //Als Paard wint
            if (this.gameState.getScore()[1]) {
                console.log("Paard heeft gewonnen")
                requestAnimationFrame(() => this.gameLoop());
                this.gameOver = true;                                       //End Game. 
                //requestAnimationFrame(() => this.gameLoop());             //Herstart game(?)
            }
        }

        // Restart gameloop, update alles weer
        requestAnimationFrame(() => this.gameLoop());
    }
} 

console.log("Start AI Chess");
window.addEventListener("load", () => new Game())
