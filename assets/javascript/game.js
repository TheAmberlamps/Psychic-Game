var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var compGuess = alpha[Math.floor(Math.random() * alpha.length)];

        // These vars hold the game values

        var wins = 0;

        var losses = 0;

        var guesses = 9;

        // Ok, time to write some vars to push values to the various locations they should be appearing.

        var winsText = document.getElementById("winNum")

        var lossText = document.getElementById("lossNum")

        var guessNum = document.getElementById("guesses")

        var guessText = document.getElementById("guessPrint")

    //    not only did this not work as intended, it seems to have broken my if statement.

    //    while(guesses === 0) {

    //         losses++;

    //         lossText.textContent = losses;

    //         console.log("loooooooser");

    //         guesses = 9;

    //         console.log(guesses);


    //     } 

        // And now for the on-click action.

        document.onkeyup = function(event){

            var playerGuess = event.key;

            // So initially compGuess was down here, and I couldn't understand what was going wrong. Of course I eventually realised that it was being reused every time a key was being pressed, contantly changing the computer's guess.

            // var compGuess = alpha[Math.floor(Math.random() * alpha.length)];

            // I think this was malfunctioning earlier because the statement wasn't strict enough, but it may have been because compGuess was getting executed on every keystroke.
            

            if (playerGuess === compGuess){
                
                wins++;
                
                guesses = 9;
                
                winsText.textContent = wins;

                guessNum.textContent = guesses;

                guessText.textContent = "";
                
                console.log("Now the win value should increase by 1 and the guesses left and printed guesses should reset.");
                
                console.log(wins);
                
                compGuess = alpha[Math.floor(Math.random() * alpha.length)];

                console.log(compGuess);
            }

            else if (guesses === 1) {

                losses++;

                guesses = 9;

                lossText.textContent = losses;

                guessNum.textContent = guesses;

                guessText.textContent = "";

                console.log("looooooooser");

                console.log("Now the loss counter should increase by 1, and the guesses should return to 9.")

                compGuess = alpha[Math.floor(Math.random() * alpha.length)];

                console.log(compGuess);

            }

            else {

                console.log("Incorrect");

                // guessText.textContent = event.key;

                var TextTest = document.createTextNode(event.key);

                guessText.appendChild(TextTest);

                guesses--;

                guessNum.textContent = guesses;

                console.log("Now the guesses left should decrease by 1, and the guess should be printed.");

                console.log(guesses);

            }
        }