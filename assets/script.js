const quizData = [
    {
        question: "What are true or false statements referred as in JavaScript?",
        a: "boolean",
        b: "string",
        c: "number",
        d: "octopus",
        correct: "a",
    },
    {
        question: "What are the 3 ways to set a variable in JavaScript?",
        a: "var, new, let",
        b: "let, make, const",
        c: "var, let, const",
        d: "abra cadabra",
        correct: "c",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "js",
        c: "javascript",
        d: "scriptjava",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "body section",
        b: "head section",
        c: "both a and b",
        d: "the toes section",
        correct: "a",
    },
    {
        question: "The external JavaScript file must contain the script tag.",
        a: "true",
        b: "false",
        c: "maybe",
        d: "idk",
        correct: "a",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function=myfunction()",
        b: "function:myFunction()",
        c: "function myFunction()",
        d: "const myFunction=()=>{}",
        correct: "a",
    },
    {
        question: "How do you call a function named myFunction?",
        a: "call function myFunction()",
        b: "myFunction()",
        c: "call myFunction",
        d: "1-800 myFunction",
        correct: "b",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i == 5 then",
        b: "if i = 5",
        c: "if (i==5)",
        d: "theres no if in javascript",
        correct: "c",
    },
    {
        question: "How can you add a comment in a JavaScript?",
        a: "//this is a comment",
        b: "!--this is a comment--",
        c: "'this is a comment",
        d: "scream at your monitor",
        correct: "a",
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        a: "Math.rnd(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)",
        d: "enroll your pc at the next available math course",
        correct: "c",
    },

];

const timerEl= document.getElementById('timer')
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const beginBtn = document.getElementById('begin')
const welcomeMsg = document.getElementById('welcome')
const highScore = document.getElementById('highscore')

let startSeconds= 20
let currentQuiz =0
let score=0

function setTimer(){
    var timerInterval=setInterval(function() {
        startSeconds--;
        timerEl.textContent= (`${startSeconds} SECONDS LEFT` )
    }, 1000);
    if(startSeconds === 0) {
        clearInterval(timerInterval)
        alert('Sorry your time is up .You loose!')
    }
}



beginBtn.addEventListener('click', function () {
    welcomeMsg.style.display='none';
    quiz.style.display='block';
    submitBtn.style.display='block';

    loadQuiz()
    setTimer()
})


function loadQuiz(){

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswer() {
    answerEls.forEach (answerEl => answerEl.checked = false)

}

function getSelected(){
    let answer
    answerEls.forEach (answerEls =>{
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}



submitBtn.addEventListener('click',function() {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = (`
            <h2>You answered ${score}/${quizData.length} questions correct<h2>
            
            <button onclick="location.reload()">reload</button>
            `)
        }
    }
})
