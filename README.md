# CMTPRG01-9: AI in Games

**Installeren:**
Ctrl + Shift + B --> tsc:watch - tsconfig.json
Lifeserver
Pdf met de opdracht staat in de repo. 
   
**Problemen:**
1. Bij gamestate.ts, returnd die aan het einde return[score,false], orginieel kan dit [0,false] returnen zonder
de code van Dion:

        let distance = 50;
        this.knightPositions.forEach((knightPos) => {
            const dx= Math.abs(this.kingPos[0] - knightPos[0]);
            const dy = Math.abs(this.kingPos[1] - knightPos[1]);
            const delta = dx + dy;

            if (delta < distance && delta > 1) distance = delta;
        });
        const score = -50 / distance;   
nodig te hebben. Ook vertelde mijn docent dat bij return alleen [-kingPos, false] genoeg zou moeten zijn om
de Minimax beter te laten werken. 

1. Bij gameai.ts loop ik twee keer door de knights. Dat is overbodig. De docent stelde voor dat ik de bovenste loop
weg doe en de onderste hou. Ik weet alleen niet hoe ik het spel dan werkend kan krijgen. 

1. Ook mist dit spel alfa-beta pruning. En merk ik dat de zwiebers/knights altijd net te laat zijn met vooruit denken.
Ze komen wel naar mij toe, maar het moment om mij te slaan is dan al gepasseerd. 

**Gebruikte Minimax tutorial:**
https://www.youtube.com/watch?v=trKjYdBASyQ

**Al mijn hulpmiddelen:**
https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/
https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-2-evaluation-function/
https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/
https://stackabuse.com/minimax-and-alpha-beta-pruning-in-python/
https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning
https://www.youtube.com/watch?v=l-hh51ncgDI

**Uitleg over verschillende loop methodes voor Array's:**
https://www.youtube.com/watch?v=R8rmfD9Y5-c&feature=youtu.be
