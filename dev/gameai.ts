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
        //Knight & Gamestate are updated
        knights[i].setPosition(legalMoves[j]);
        gameState.knightPositions[i] = legalMoves[j];

        // RANDOM MOVE - END   ------------------

        let t1 = performance.now();             //AI eind beslissing Timer
        console.log("AI took: " + (t1 - t0) + " milliseconds to move.");

        /*
        function minimax(position, depth, maximizingPlayer) //Current position, depth (how many moves ahead thinking), 
            //Geen speelbare posities meer of game over;
            if depth == 0 or game over
                return static evaluation of position        //Return made choice;

            //White/AI turn to move
            if maximizingPlayer (==true)
                maxEval = -infinity                         //Slechts haalbare score
                for each child of position                  //Loop door alle mogelijke opties die wit heeft
                    eval = minimax(child, depth - 1, false) //Zelfde functie her oproepen, waarin je doet alsof de gekozen child de current position is, maak het false, want dan geef je aan dat het beurt is aan de zwarte.
                    maxEval = max(maxEval, eval)            //Onderzoek wat groter is, de hoogst haalbare punten of je gekozen optie
                return maxEval                              //Geef terug wat het hoogst haalbare punt is.
            
            //Zwart's optie om te spelen
            else
                minEval = +infinity                         //Begint met de slechts haalbare scoor. (Hoe meer punten zwart heeft, hoe meer verlies die leid. )
                for each child of position
                    eval = minimax(child, depth -1, true)
                    minEval = min(minEval, eval)           //Onderzoek waarbij zwart het minste verlies maakt
                return minEval                             //Minste verlies optie van zwart/de mens
        */

    }


}