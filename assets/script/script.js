console.log("Code-quiz");
var homepageContainer = document.getElementById("homepage");
var startQuiz = document.getElementById("start-btn");
var questionsContainer = document.getElementById("question-content");
var form = document.getElementById("containers");
var h1 = document.getElementById("question-text");
var resultsContainer = document.getElementById("answer-content");
var initialsForm = document.getElementById("form-content");
var timerElement = document.getElementById("timer-component");
var element = document.createElement("ul");


var questionIndex = 0;
var question = 0;
var choices = [];
var score = 0;
var timer = 0;
var seconds = 0;


// Start quiz
startQuiz.addEventListener("click", function () {
    homepageContainer.style.display = "none";

    // renderQuestionsContainer();
    questionsContainer.append(quiz[0].question);
    resultsContainer.append(quiz[0].choices);
});



startQuiz.addEventListener("click", function() {
    homepageContainer.style.display = "none";
});
 
// function getTheQuestion(){
//    const currentOne   = question[currentQuestionI];

//    const theTitle = document.getElementById("theID")
// theTitle.textContent = currentOne.title;
// choice
// }

// function getQuestion() {
//   if(this.value !== quix[])
// }

// quiz();
function renderQuiz(){
         questionsContainer.innerHTML = "";
         var question = document.createElement("h1");
         question.textContent = quiz[questionIndex].question;
         questionsContainer.append(question)
        
         renderChoices();
}


function renderNextQuestion() {
        var question = document.createElement("h1");
        question.textContent = quiz[questionIndex].question;
        if (this.value !== question.answer) {
            feedbackEl.textContent = "Wrong";
            //Penalize time for wrong answer
            secondsLeft -= 15;
        
            if (secondsLeft < 0) {
              secondsLeft = 0;
            }
    }
}

// quiz.innerHTML = "";
// ulCreate.innerHTML = "";



    
 // Answer
 function renderAnswer(){
     answersContainer.innerHTML = "";
     answersButton.setAttributes("data-value", quiz[i]);
 
     
     // answersButton.setAttribute
     for (var i = 0; i < [quiz].choices.length; i++) {
 
 
         answerButton.setAttribute("style", "background: purple", "color: white");
         answerButton.setAttribute("data-value", quiz[questionIndex].choice);  
         answerButton.textContent = quiz[questionIndex].choice[i];
         
         choices[0].append("button");
     }
 }
     
     
 // // Submit initals form
 function renderInitialsForm(){
     var initialsInput = localStorage.getItem("form-content"); 
 };
// // Submit initals form
// function enterInitials(){
    
// }

















// Assign variables
// var time =


// Establish quiz timer

// var startQuizTime = startTime("5:00").getTime();
// var interval = setInterval(function() {
// var present = new Time().getTime();
// var timeDistance = countDown - startQuizTime;

// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// document.getElementsById("start-timed-quiz").innerHTML = minutes + seconds;

// if (distance < 0) {
//     clearInterval(interval);
//     document.getElementById("start-timed-quiz").innerHTML = "GAME OVER!";
// }
// }, 1000);


