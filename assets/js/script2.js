var start = document.querySelector("#start")
var nextButton = document.querySelector("#next")
var timer = document.querySelector("#timer")
var wins = 0
var questioncont = document.querySelector("#question-cont")
start.addEventListener("click", startquiz);
var questionEl = document.querySelector("#questions")
var answerEl = document.querySelector(".answer")
var switchquestion
var thisquestion
var words = document.querySelector("#words")


var score = 0;

function startquiz() {
console.log("game started")
start.classList.add('hide')
words.classList.add('hide')
switchquestion = questions.sort(() => Math.random() - .5)
thisquestion = 0
questioncont.classList.remove('hide')
nextButton.classList.remove('hide')

timecount();
function timecount() {
    var timeleft = 60;
    var timeInterval = setInterval(function() {
if (timeleft > 0) {
    timer.textContent = "Timer: " + timeleft
    timeleft--;
} else { timer.textContent = "Times Up! ";
    clearInterval(timeInterval);
    questioncont.classList.add('hide')
    nextButton.classList.add('hide')
    start.classList.remove('hide')
}
    }, 1000);
} 

nextq();
}

function nextq() {
    
    questionShown(switchquestion[thisquestion])
    resetst()
}

function questionShown(question) {
    questionEl.textContent = question.question
    question.answers.forEach(answer => {
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            answerEl.appendChild(button)
            }); 
            }
    
    var questions = [
        {
            question: "what is HTML?????",
            answers: [
                {text: "one", correct: true},
                {text: "fourr", correct: false},
                {text: "huh", correct: false},
                {text: "derp", correct: false}
            ]  
        }
        ];
       
      function resetst() {
        nextButton.classList.add('hide')
        while (answerEl.firstChild) {
            answerEl.removeChild
            (answerEl.firstChild)
        }
      }  

function selanswer(e) {

}

function incorrect() {
    console.log('be better')
    timer -=15;
}


function correct() {
    console.log("nice job")
} 




// function displayanswers(){
//     var answers = ['answer f','answer 2','answer 3','answer 4']
//     for (let i = 0; i < answers.length; i++) {
//         const element = answers[i];
//         var answerbutton = document.createElement('button')
//         answerbutton.textContent = element
//         answer.appendChild(answerbutton);
//     } 
//     }
    

// var QIndex = 0;

// var question = [
// {
//     q:"This is my question",
//     answers:["one","two","three"],
//     a:"one"
// }
// ]

// start = (i) => {
// qDiv.textContent = questions[i].a
// // loop over the questions[i].answers
// // append these to the answers div
// }

// start(QIndex)

// var start = document.querySelector("#start")
// var question = [
//     {
        
//     }
//     ]
// var answer = document.querySelector(".answer")
// var submit = document.querySelector(".submit")
// console.log(start)
// start.addEventListener("click", function(){
//     console.log(start)
//     start.style.display = "none";
//  displayquestion()
// }) 





// question.answers.forEach(answer => {
//     let button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//         button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selanswer)
//     answerEl.appendChild(button)