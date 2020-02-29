class GameState {
    public kingPos: [number, number];               //Position of the king in the game in board coordinates
    public knightPositions: [number, number][];     //Position of the knights in the game in board coordinates

    constructor(kingPos: [number, number], knightPositions: [number, number][]) {
        this.kingPos = kingPos;
        this.knightPositions = knightPositions;
    }

    // return the value of the state and if the state is terminal (game over)
    // higher value is better gamestate for the king (100 is win, -100 is lose)
    public getScore() : [number, boolean] {
        //Game over als King & Paard op dezelfde positie staan. 
        for (let z of this.knightPositions) {
            if (Board.samePosition(z, this.kingPos)) {
                return [-100, true];
            }
        }

        //Win
        if (this.kingPos[1] == 0) {
            return[100, true];
        } 

        // not over yet, return an evaluation of the gamestate
        // higher number is better for king, lower better for the knights

        // Hint: use the position of the king stored in this.kingPos
        return [0, false]
    }

    // create a copy of the gamestate (needed by AI to look into the future)
    //Dit word nog niet uitgevoerd???
    public copy() : GameState {
        const knightPosCopy  = Object.assign([], this.knightPositions);
        return new GameState(this.kingPos, knightPosCopy)
    }
}