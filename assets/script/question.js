var questionsContainer = document.getElementById("question-content");
var resultsContainer = document.getElementById("answer-content");
var choices = [];

// Question population
var quiz = [
        {
            question: "Commonly used data-types DO NOT include:",
            choices: [
                    "strings", 
                    "booleans", 
                    "alerts ", 
                    "numbers"],
            answer: "alerts"
        },
        {
            question: "The condition in an if/else statement is enclosed with_____.",
            choices: [
                    "quotes", 
                    "curly brackets", 
                    "parantheses", 
                    "square brackets"],
            answer: "curly brackets"
        },
        {
            question: "Arrays in Javascript can be used to store_____.",
            choices: [
                        "numbers and strings", 
                        "other arrays", 
                        "booleans", 
                        "all of the above"],
            answer: "all of the above"
        },
        {
            question: "String values must be enclosed within_____when being assigned to variables.",
            choices: [
                        "commas", 
                        "curly brackets", 
                        "quotes", 
                        "parantheses"],
            answer: "quotes"
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: [
                        "Javascript", 
                        "terminal/bash", 
                        "for loops", 
                        "console.log"],
            answer: "console.log"
        }
    ];

