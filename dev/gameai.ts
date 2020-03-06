/// <reference path="knight.ts" />



class GameAI {
    
    public static bestMove(king: King, knights: Knight[], gameState: GameState){
        console.log(king);
        console.log(knights);
        console.log(gameState);

        let gameStateCopy = gameState.copy()

        //Look at all the possible (legal moves) for knight:
        //let legalMovesKing: [number, number][] = king.getMoves(gameStateCopy.kingPos);
        let legalMovesKnights: [number, number][]= knights[0].getMoves(gameStateCopy.knightPositions[0]);
        let bestScore = -Infinity;
        //let legalMoves: [number, number][] = knights[0].getMoves();
                
        for (let move of legalMovesKnights){
            console.log ("Dit is de move van het paard: " + move);
            
            //Als de spot available is...
            let score = this.miniMax();

            if (score > bestScore) {
                bestScore = score;
            }

            //Is the spot avaialble? 
        }
    }

    public static miniMax(): number{
        console.log();
        return 1
    }
   
}







        //gameStateCopy = gamestate.copy()
        // //Choose knight to move
        // let i:number =  Math.floor(Math.random() * Math.floor(knights.length));         //Aantal Knights to move = max 0,2,1
        
        // //Aantal legale moves die de ene knight mag maken. 
        // let legalMoves: [number, number][] = knights[i].getMoves();
        // let j:number =  Math.floor(Math.random() * Math.floor(legalMoves.length));      

        // knights[i].setPosition(legalMoves[j]);                                           //Knight nummerI doet move nummerJ, verplaatsing
        // gameState.knightPositions[i] = legalMoves[j];                                    //Knight's position in de gamestate is changed to the decided legal move. //Updaten 
        
        //this.miniMax(knights, king, 2, true);                                                //MiniMax oproepen, king



    // private miniMax(knights:Knight[], King, depth: number, maximizingPlayer: boolean) { //king
    //     // console.log("Word dit gelezen?");
    //     let legalMoves: [number, number][] = knights[0].getMoves();                 //

    //     if (depth == 0) {                                                           //Add GameOver?
    //         console.log("Dept is zero now");
    //         //console.log(knights, depth, maximizingPlayer);
    //         return knights;
    //     }
    
    //     if (maximizingPlayer){                                                      //AIPlayer
    //         let maxEval = -Infinity;

    //         //let legalMoves: [number, number][] = knights[0].getMoves();
    //         let move: [number, number];
            
    //         for(move of legalMoves){                                 //Kijk per knight welke posities hij allemaal kan.    
    //             console.log("Dit is move van het paard: " + move);
               
    //             //this.miniMax(move, depth-1, false);
                
    //             //Wat is de score? Vergelijk die met maxEval.
    //             //maxEval = Math.max(maxEval, l);
    //         }
    //         return maxEval;

    //     } else {                                                                    //HumanPlayer
    //         let minEval = Infinity;
            
    //         for (let i=0; i<legalMoves.length; i++){                                                //Ga door alle legal moves van King heen.
    //             // eval = this.miniMax(position, depth -1, true);
    //             // minEval = Math.min(minEval, eval);
    //         }
    //         return minEval;
    //     }
    // }
    //     /*
    //     function minimax(position, depth, maximizingPlayer) //Current position, depth (how many moves ahead thinking), 
    //         //Geen speelbare posities meer of game over;
    //         if depth == 0 or game over
    //             return static evaluation of position        //Return made choice;

    //         //White/AI turn to move
    //         if maximizingPlayer (==true)
    //             let maxEval = -Infinity                     //Slechts haalbare score
    //             for each child of position                  //Loop door alle mogelijke opties die wit heeft
    //                 eval = minimax(child, depth - 1, false) //Zelfde functie her oproepen, waarin je doet alsof de gekozen child de current position is, maak het false, want dan geef je aan dat het beurt is aan de zwarte.
    //                 maxEval = max(maxEval, eval)            //Onderzoek wat groter is, de hoogst haalbare punten of je gekozen optie
    //             return maxEval                              //Geef terug wat het hoogst haalbare punt is.
            
    //         //Zwart's optie om te spelen
    //         else
    //             let minEval = +Infinity                         //Begint met de slechts haalbare scoor. (Hoe meer punten zwart heeft, hoe meer verlies die leid. )
    //             for (let i = 0; i< 3; i++)                      //for each child of position
    //                 let eval = minimax(child, depth -1, true)
    //                 minEval = min(minEval, eval)           //Onderzoek waarbij zwart het minste verlies maakt
    //             return minEval                             //Minste verlies optie van zwart/de mens
    //     */

    // }


