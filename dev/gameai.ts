/// <reference path="knight.ts" />

class GameAI {
    // let the AI choose a move, and update both the
    // knight and the gamestate
    
    public static moveKnight(king:King, knights: Knight[], gameState:GameState) {
        let t0 = performance.now();

        const searchdepth = 3;
        let minEval = Infinity;
        let bestMove: [number,number] = [0,0];          //Een array met 2 nummers.
        let indexKnight = 0;
        
        for(let i=0; i<knights.length; i++){
            for(let knight; knight<knights.length; knight++){
                
            }
        }

        //Voor iedere knight voer je de volgende functie uit
        knights.forEach((knight, i) => {
            const KnightlegalMoves = knight.getMoves(gameState.knightPositions[i]);
            console.log("Wat zit er in knightslegalmoves:",KnightlegalMoves);
            console.log("Wat zit er in knight?", knight);
            console.log("Wat zit er in i:", i);
            KnightlegalMoves.forEach((move)=>{
                const gamestateCopy = gameState.copy();
                gamestateCopy.knightPositions[i] = move;

                const currentEval = this.miniMax(gamestateCopy, king, knights, searchdepth -1, true);
                

                if (currentEval < minEval){
                    minEval = currentEval;
                    bestMove = move;
                    indexKnight = i;
                }
            })
        });
        
        knights[indexKnight].setPosition(bestMove);
        gameState.knightPositions[indexKnight] = bestMove;

        let t1 = performance.now();
        console.log("AI move took " + (t1 - t0) + " milliseconds to calculate.");
    }

    public static miniMax(gameState: GameState, king:King, knights: Knight[], depth: number, maximizingPlayer: boolean){
        const score = gameState.getScore();
        if (depth === 0 || score[1]){                   //Als het 1 is dan loose.
            return score[0];
        }

        //Kingzet
        if (maximizingPlayer){
            let maxEval = -Infinity;

            const KingLegalMoves = king.getMoves(gameState.kingPos)                     //Want je hebt nog niks veranderd, je wilt de huidige situatie zien. 
            
            for (let move of KingLegalMoves){
                const gamestateCopy = gameState.copy();
                gamestateCopy.kingPos = move;

                const currentEval = this.miniMax(gamestateCopy, king, knights, depth -1, false);
                maxEval = Math.max(maxEval, currentEval);
            }

            return maxEval;
        }

        else {
            let minEval = Infinity;

            //Voor iedere knight voer je de volgende functie uit
            knights.forEach((knight, i) => {
                const KnightlegalMoves = knight.getMoves(gameState.knightPositions[i]);

                KnightlegalMoves.forEach((move)=>{
                    const gamestateCopy = gameState.copy();
                    gamestateCopy.knightPositions[i] = move;

                    const currentEval = this.miniMax(gamestateCopy, king, knights, depth -1, true);
                    minEval = Math.min(minEval, currentEval);
                })
            });
            //console.log("Dit is de minEval: ", minEval);
            return minEval;
        }
    }
}