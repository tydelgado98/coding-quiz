
var start = document.getElementById('start')
start.addEventListener("click", startquiz);
document.getElementById('start').addEventListener('click',handleClick);
var questionEl = document.getElementById('questions')
var words = document.getElementById('words')
var next = document.getElementById('next')



questionEl.classList.add('hide')
next.classList.add('hide')


var time = 60;
var clockId;

function handleClick() {
   
 clockId = setInterval(runClock,1000);
 handleQuestion(); 
};

    function runClock() {

        time--;
    
        if (time < 1) {
            clearInterval(clockId);
            time = 0;
            
        };
    
    
        document.getElementById('clock').innerHTML = time;
    
    };




function startquiz() {
    start.classList.add('hide')
    words.classList.add('hide')
     console.log("game started")
     questionEl.classList.remove('hide')
     next.classList.remove('hide')
     thisquestion = 0
     
 };

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


function handleQuestion() {

}
