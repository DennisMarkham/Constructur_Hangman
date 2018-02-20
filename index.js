// Randomly selects a word and uses the Word constructor to store it
	//so need an array of words?

	require("word.js");

	var inquirer = require('inquirer');

	var words[] = ["Insulin", "Zietgiest", "television", "computer", "screwdriver"]

	var wordChoice = (Math.floor(Math.random() * words.length); 
// Prompts the user for each guess and keeps track of the user's remaining guesses
	//inquirer prompt that takes a letter, checks it against chosen word
	//guess counter

	inquirer.prompt ([
	{
		type: "input",
      message: "Guess a letter",
      name: "username"
  }
		]).then(function(inquirerResponse) {
    
    });