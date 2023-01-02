var start = document.querySelector("#start")
var question = [
    {
        q:"This is my question",
        answers:["one","two","three"],
        a:"one"
    }
    ]
var answer = document.querySelector(".answer")
var submit = document.querySelector(".submit")
console.log(start)
start.addEventListener("click", function(){
    console.log(start)
    start.style.display = "none";
 displayquestion()
}) 

function displayanswers(){
    var answers = ['answer f','answer 2','answer 3','answer 4']
    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        var answerbutton = document.createElement('button')
        answerbutton.textContent = element
        answer.appendChild(answerbutton);
    } 
    }
    

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







