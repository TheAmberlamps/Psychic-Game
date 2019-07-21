# Psychic-Game

A "simple" javascript game, written by yours truly.

The game chooses a letter of the alphabet, and the player has 9 attempts to guess what that number is. It might sound unlikely that you would be able to guess the correct letter, but your odds are actually slightly better than 1:3.

This project was in some ways harder than I was imagining, but in others far simpler. Funnily enough one of the most difficult things for me to code was appending guesses. Letter generation was handled by creating an array with every letter in it, and then using math.random to randomly choose a letter within the array. Wins/losses were handled using an if/else statement that checked if the key that the user pressed was the same as the computer's choice.