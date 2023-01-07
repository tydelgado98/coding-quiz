
document.getElementById('start').addEventListener('click',handleClick);

var time = 5;
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
    console.log("game started")
    start.classList.add('hide')
    words.classList.add('hide')
    switchquestion = questions.sort(() => Math.random() - .5)
    thisquestion = 0
    questioncont.classList.remove('hide')
    nextButton.classList.remove('hide')
    



}

function handleQuestion() {
    
}