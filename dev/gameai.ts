/// <reference path="knight.ts" />

class GameAI {
    // let the AI choose a move, and update both the
    // knight and the gamestate
    
    public static moveKnight(king:King, knights: Knight[], gameState:GameState) {
        let t0 = performance.now();                     //AI beslissing Timer

         // TODO: remove random move, amnd replace with AI move

        // RANDOM MOVE - START ------------------

        /*Only to avoid error: 'king' is declared but its value is never read. 
        Zit niks in?
        Word meegegeven in parameter en moet daarom gebruikt worden. 
        Het staat hier prolly voor de AI om gebruikt te worden. */
        console.log(king);

        //Choose knight to move
        let i:number =  Math.floor(Math.random() * Math.floor(knights.length));         //Aantal Knights to move = max 0,2,1
        let legalMoves: [number, number][] = knights[i].getMoves();
        console.log("Dit is Ai... " + legalMoves);

        let j:number =  Math.floor(Math.random() * Math.floor(legalMoves.length));      //Aantal legale moves die de ene knight mag maken. 

        //Knight nummerI doet move nummerJ
        knights[i].setPosition(legalMoves[j]);
        gameState.knightPositions[i] = legalMoves[j];

        // RANDOM MOVE - END   ------------------

        let t1 = performance.now();             //AI eind beslissing Timer
        console.log("AI took: " + (t1 - t0) + " milliseconds to move.");

    }


}