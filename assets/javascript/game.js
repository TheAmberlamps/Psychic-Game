        // Here's the array that the computer uses to determine what the answer id, and the randomizer function.

        var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var compGuess = alpha[Math.floor(Math.random() * alpha.length)];

        // These variables hold the game values.

        var wins = 0;

        var losses = 0;

        var guesses = 9;

        // These variables hold the locations I want to use to display information as the game is played.

        var winsText = document.getElementById("winNum")

        var lossText = document.getElementById("lossNum")

        var guessNum = document.getElementById("guesses")

        var guessText = document.getElementById("guessPrint")

        // ...and this is a sound to congratulate you on winning.

        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/sounds/clap.mp3");

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

            // So initially I put compGuess here, and I couldn't understand what was going wrong. Of course I eventually realised that it was being reused every time a key was being pressed, constantly changing the computer's guess.


            // This is the guts of the game. Everything else up until now has just been defining rules and default values.

            if (playerGuess === compGuess){
                
                wins++;
                
                guesses = 9;
                
                winsText.textContent = wins;

                guessNum.textContent = guesses;

                guessText.textContent = "";

                alert("Winner!");

                audioElement.play();
                
                // console.log("Now the win value should increase by 1 and the guesses left and printed guesses should reset.");
                
                // console.log(wins);
    
                compGuess = alpha[Math.floor(Math.random() * alpha.length)];

                // console.log(compGuess);
            }

            else if (guesses === 1) {

                losses++;

                guesses = 9;

                lossText.textContent = losses;

                guessNum.textContent = guesses;

                guessText.textContent = "";

                alert("Looooooooser");

                // console.log("Now the loss counter should increase by 1, and the guesses should return to 9.")

                compGuess = alpha[Math.floor(Math.random() * alpha.length)];

                // console.log(compGuess);

            }

            else {
                
                var TextTest = document.createTextNode(event.key);
                
                guessText.appendChild(TextTest);
                
                guesses--;
                
                guessNum.textContent = guesses;
                
                // console.log("Incorrect");
                
                // console.log("Now the guesses left should decrease by 1, and the guess should be printed.");

                // console.log(guesses);

            }
        }