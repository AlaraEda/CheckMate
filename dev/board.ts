/// <reference path="tile.ts" />

class Board {
    private readonly BOARD_SIZE = 8;    // size of the board (smaller is easier for the AI)
    private tileSize: number;           // size of a board tile, word direct aangepast in de constructor.
    //private tileSize = 100;

    private static instance:Board;

    private constructor() {
        // change tile size to fit screen
        let smallestSide = Math.min(window.innerWidth, window.innerHeight);     //Geeft het kleinste nummer van x of y-as weer.
        this.tileSize = Math.floor(smallestSide / this.BOARD_SIZE);             //Rond cijfer af & telt rest niet mee.
    }

    //Board creation
    public static getInstance(): Board {
        if (Board.instance == null) {
            Board.instance = new Board();

            //Create board
            for (let i = 0; i < Board.getInstance().getSize(); i++) {                   //Loop word 8x gedaan, vanwege board_size.              
                for (let j = 0; j < Board.getInstance().getSize(); j++) {               //Loop word 8x gedaan, vanwege board_size.
                    let t:Tile = new Tile((i + j)%2==0 ?  "#ffffff" : "#000000");       //Tile is zwart en wit. Tile Creatie.  
                    t.initPosition([i, j]);
                    t.update();
                }
            }
        }
        return Board.instance;
    }

    // check if position is legal (=on the board)
    public legalPosition(pos: [number, number]): boolean {
        return (pos[0] >= 0) && (pos[1] >= 0) && (pos[0] < this.BOARD_SIZE) && (pos[1] < this.BOARD_SIZE);
    }

    //Aantal vakjes
    public getSize():number {
        return this.BOARD_SIZE;
    }

    //Grootte van het vakje
    public getTileSize():number {
        return this.tileSize;
    }

    // convert board to screen pos
    public boardToScreenPos(boardPos:[number, number]) : [number, number] {
        return [boardPos[0] * this.tileSize,boardPos[1] * this.tileSize];
    }

    // convert screen to board pos
    public screenToBoardPos(screenPos:[number, number]) : [number, number] {
        return [Math.floor(screenPos[0] / this.tileSize), Math.floor(screenPos[1] / this.tileSize)];
    }
    
    //Check of positie die je aangeklikt hebt hetzelfde is als een legale move die je mag maken. 
    public static samePosition(a:[number, number], b:[number, number]): boolean {
        return (a[0] == b[0]) && (a[1] == b[1]);
    }
}