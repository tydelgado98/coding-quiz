var start = document.getElementById('start')
start.addEventListener("click", startquiz);
document.getElementById('start').addEventListener('click', handleClick);
var questionEl = document.getElementById('questions')
var words = document.getElementById('words')
var next = document.getElementById('next')
var answerEl = document.getElementById('answers')
var feedback = document.getElementById('feedback')
questionEl.classList.add('hide')
let thisquestion = 0

var time = 60;
var clockId;

function handleClick() {
    clockId = setInterval(runClock, 1000);
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

function questionShown(index) { 
    questionEl.textContent = ''
    answerEl.textContent = ''
    questionEl.textContent = questions[index].question
    
    questions[index].answers.forEach(answer => {
        // if (answer.correct) {
            var button = document.createElement('button')
            button.addEventListener('click', checkAnswer)
            button.textContent = answer.text
            button.dataset.correct = answer.correct
        // }
        answerEl.appendChild(button)
    });
}
function checkAnswer(event) {
    console.log(event.target.dataset.correct)
    var isCorrect = event.target.dataset.correct
    if (isCorrect === 'true') {
        feedback.textContent = 'correct!'
        setTimeout(() => {
            feedback.textContent = ''
        }, 1500);
    }
    else {
    feedback.textContent = 'incorrect!'
    time = time-10
    setTimeout(() => {
        feedback.textContent = ''
    }, 1500);
}
nextQuestion()
}

function startquiz() {
    start.classList.add('hide')
    words.classList.add('hide')
    console.log("game started")
    questionEl.classList.remove('hide')
   
    thisquestion = 0
    questionShown(thisquestion);
};

var questions = [
    {
        question: "what is HTML?????",
        answers: [
            { text: "one", correct: true },
            { text: "fourr", correct: false },
            { text: "huh", correct: false },
            { text: "derp", correct: false }
        ]
        
    },
    {
        question: "what is css?????",
        answers: [
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "hello", correct: false },
            { text: "derpity", correct: false }
        ]
        
    }
];

function handleQuestion() {

}

function nextQuestion() {
console.log('next question')
thisquestion++
questionShown(thisquestion)
}