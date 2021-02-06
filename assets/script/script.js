console.log("Code-quiz");
var homepageContainer = document.getElementById("homepage");
var startQuiz = document.getElementById("start-btn");
var questionsContainer = document.getElementById("questions-forms");
var form = document.getElementById("containers");
var h1 = document.getElementById("question-text");
var resultsContainer = document.getElementById("choices");


// Start quiz
startQuiz.addEventListener("click", function () {
    homepageContainer.style.display = "none";
    // renderQuestionsContainer();
    questionsContainer.append(quiz[0].question);
    answersContainer.append(quiz[0].choices);
});



startQuiz.addEventListener("click", function() {
    homepageContainer.style.display = "none";
});
 

// quiz();
function renderQuiz(){
         questionsContainer.innerHTML = "";
         var question = document.createElement("h1");
         question.textContent = quiz[questionIndex].question;
         questionsContainer.append(question)
        
         renderChoices();
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


