var start = document.querySelector("#start")
var timer = document.querySelector("#timer")

start.addEventListener("click", startquiz)




function startquiz() {

    function timecount() {
        var timeleft = 60;
        var timeInterval = setInterval(function() {
    if (timeleft > 0) {
        timer.textContent = "Timer: " + timeleft
        timeleft--;
    } else { timer.textContent = " ";
        clearInterval(timeInterval);
    }
        }, 1000);
    }

    timecount();

    console.log("hello")

}










function nextq() {

}

function selanswer() {

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





