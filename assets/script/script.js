console.log("Code-quiz");
// start area
var homepageContainer = document.getElementById("homepage");
// start button
var startQuiz = document.getElementById("start-btn");
// question area for answers(choices)
var questionsContainer = document.getElementById("question-content");

var resultsContainer = document.getElementById("answer-content");
var initialsForm = document.getElementById("form-content");
var timerElement = document.getElementById("timer-component");

var resultFeedback = document.getElementById("feedback")
var quizBody = document.getElementById('theQuiz')
var questionIndex = 0;

var submitTheScore = document.getElementById("theButton");
var yourInitials = document.getElementById("your_initials");
var yourScore = document.getElementById("theScore");


var timer;

var seconds = 0;
var theTime = quiz.length * 15;

// Start quiz
function startTheQuiz(){
    // var theEnd = document.getElementById("final-page");
    var startTeQuiz = document.getElementById("homepage");
    startTeQuiz.setAttribute("style", "display: none");
    // theEnd.setAttribute("style", "display: none");
    quizBody.removeAttribute("style");

    timer = setInterval(TikTok, 1000);
    timerElement.textContent = theTime;
    getTheQuestions();
    
}

// Rendering questions
function getTheQuestions(){
    
  var  TheCurrentQuestion = quiz[questionIndex]
    var theTitle = document.getElementById("titleMe")
    theTitle.textContent=TheCurrentQuestion.question
     questionsContainer.innerHTML = ""
    TheCurrentQuestion.choices.forEach(function(choice, i){
        var theChoice = document.createElement("button");
        theChoice.setAttribute("class", "choice")
        theChoice.setAttribute("value", choice);

        theChoice.textContent= i + 1 + ". " + choice;
        theChoice.onclick = onceClicked;
         questionsContainer.append(theChoice);
    })


}

// Clicked answers
function onceClicked(){
    if(this.value !== quiz[questionIndex].answer){
        theTime -= 15;
        if(theTime < 0){
            theTime = 0
        }
        timerElement.textContent = theTime;

        resultFeedback.textContent = "Wrong"
    }else {
        resultFeedback.textContent = "Correct"
    }
    questionIndex++;

    if(questionIndex === quiz.length){
        finishedQuiz();
    }else{
        getTheQuestions();
    }
}

// End of quiz
function finishedQuiz(){
    clearInterval(timer);
    var theEnd = document.getElementById("final-page");
    theEnd.removeAttribute("style");
    quizBody.setAttribute("style", "display: none");

    yourScore.textContent = theTime

  

}

// Save score and users initials
function saveTheScore(){
    var initials = yourInitials.value.trim();

    if(initials !== ""){
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var theScore = {
        score: theTime,
        initials: initials
    };

    highscores.push(theScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.gref = "score.js"
    }

    highscores.forEach(function (score) {
        // create li tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
    
        // display on page
        var olEl = document.getElementById("highscores");
        olEl.append(liTag);
    })

}

// Timer function
function TikTok(){
    theTime--;
    timerElement.textContent = theTime;
    if(theTime <= 0){
        finishedQuiz();
    }
}

startQuiz.onclick = startTheQuiz;

submitTheScore.onclick = saveTheScore;














