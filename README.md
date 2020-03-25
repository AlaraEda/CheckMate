# CMTPRG01-9: AI in Games

**Installeren:**

Ctrl + Shift + B --> tsc:watch - tsconfig.json

Lifeserver

Pdf met de opdracht staat in de repo. 


**Problemen:**
- Bij gamestate.ts, returnd die aan het einde return[score,false], orginieel kan dit [0,false] returnen zonder
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

- Bij gameai.ts loop ik twee keer door de knights. Dat is overbodig. De docent stelde voor dat ik de bovenste loop
weg doe en de onderste hou. Ik weet alleen niet hoe ik het spel dan werkend kan krijgen. 

- Ook mist dit spel alfa-beta pruning. En merk ik dat de zwiebers/knights altijd net te laat zijn met vooruit denken.
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


# Leerdoelen

*Ik begrijp het verschil tussen traditionele AI & Machine Learning Technieken;*
- Kunstmatige intelligentie of AI is functionele intelligentie buiten het menselijk brein om. We onderscheiden sterke en beperkte AI. De sterke of brede variant richt zich op de ontwikkeling van software die zelfstandig kan redeneren en problemen op kan lossen.
- Machine learning houdt zich bezig met de ontwikkeling van software die de eigen performance verbetert. Machine learning leunt sterk op statistische wetenschap.
	
	Van <https://www.globalorange.nl/artificial-intelligence-machine-learning-en-deep-learning> 
	
	

*Ik begrijp het verschil tussen gewone search (breadth first) en adversarial search (minimax);*
- Breath First Search gaat om het vinden van de kortste route op een ongewogen grafiek. Het onderzoekt nodes en uithoeken van een grafiek. (Net als een navigatie?)
- MiniMax gaat ervan uit dat de tegenstander optimaal zijn best doende speelt. Word gebruikt bij het maken van keuzes, game theorie en bij spellen die worden gespeeld door twee personen. De Maximizer staat voor het zoeken van de grootste winst. En de Minimizer staat voor het zoeken naar het laagste verlies. 
- De computer rekent vooruit welke toekomstige moves ik zou kunnen maken en besluit daarop wat voor beweging hij zelf wilt gaan maken. 
- Bron: [Breadth First Search Algorithm | Graph Theory](https://www.youtube.com/watch?v=oDqjPvD54Ss)


*Ik begrijp de tijd-complexiteit van een zoekalgoritme;*
- Problemen met dit soort algoritmes zijn echter geheugen en tijd. Die zijn namelijk voor de meeste computer op voordat ze alle mogelijke spelsituaties bekeken hebben. De truc om hiermee om te gaan is om niet tot in het oneindige door te gaan, maar slechts een paar zetten vooruit te kijken. (Alfa beta pruning)

**Afbeelding**

![Image of Yaktocat](https://github.com/AlaraEdda/CheckMate/blob/master/docs/images/AIFoto.jpeg)
![Image of Yaktocat](https://github.com/AlaraEdda/CheckMate/blob/master/docs/images/AIUitleg.jpeg)
