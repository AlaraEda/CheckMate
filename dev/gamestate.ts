class GameState {
    public kingPos: [number, number];               // position of the king in the game in board coordinates
    public knightPositions: [number, number][];     // position of the knights in the game in board coordinates

    constructor(kingPos: [number, number], knightPositions: [number, number][]) {
        this.kingPos = kingPos;
        this.knightPositions = knightPositions;
    }

    // return the value of the state and if the state is terminal (game over)
    // higher value is better gamestate for the king (100 is win, -100 is lose)
    public getScore() : [number, boolean] {
        //Game over, als knight op de positie van een King kan gaan staan. 
        for (let z of this.knightPositions) {
            if (Board.samePosition(z, this.kingPos)) {
                return [-100, true];
            }
        }

        //Win voor de koning
        if (this.kingPos[1] == 0) {
            return[100, true];
        } 

        let distance = 50;
        this.knightPositions.forEach((knightPos) => {
            const dx= Math.abs(this.kingPos[0] - knightPos[0]);
            const dy = Math.abs(this.kingPos[1] - knightPos[1]);
            const delta = dx + dy;

            if (delta < distance && delta > 1) distance = delta;
        });
        const score = -50 / distance;

        // not over yet, return an evaluation of the gamestate
        // higher number is better for king, lower better for the knights

        // Hint: use the position of the king stored in this.kingPos
        //score0 == 0 & score1 == false
        //Als paard in de buurt komt, word de return, 100 & true, anders is dit wat de minimax default terug stuurd. 
        //return [-this.kingPos, false]                                                       //False Checkt of het gameover is. 
        //console.log(this.kingPos);
        return [score , false]
    }

    // create a copy of the gamestate (needed by AI to look into the future)
    public copy() : GameState {
        const knightPosCopy  = Object.assign([], this.knightPositions);

        return new GameState(this.kingPos, knightPosCopy)
    }
}