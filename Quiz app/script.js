const questions = [
    {
        question: "Which is the correct JavaScript syntax to print output?",
        Answer: [
            { Text: "print(name)", correct: false },
            { Text: "console.log(`Welcome ${name}`)", correct: true },
            { Text: "printf(name)", correct: false },
            { Text: "Cout<<name;", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        Answer: [
            { Text: "int", correct: false },
            { Text: "string", correct: false },
            { Text: "var", correct: true },
            { Text: "define", correct: false }
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        Answer: [
            { Text: "#", correct: false },
            { Text: "//", correct: true },
            { Text: "/* */", correct: false },
            { Text: "<!-- -->", correct: false }
        ]
    },
    {
        question: "What will be the output of: console.log(typeof 10)?",
        Answer: [
            { Text: "string", correct: false },
            { Text: "int", correct: false },
            { Text: "number", correct: true },
            { Text: "float", correct: false }
        ]
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        Answer: [
            { Text: "shift()", correct: false },
            { Text: "unshift()", correct: false },
            { Text: "push()", correct: true },
            { Text: "pop()", correct: false }
        ]
    },
    {
        question: "Which loop is best when number of iterations is known?",
        Answer: [
            { Text: "while loop", correct: false },
            { Text: "do-while", correct: false },
            { Text: "for loop", correct: true },
            { Text: "foreach", correct: false }
        ]
    },
    {
        question: "Which JavaScript function is used to select an element by ID?",
        Answer: [
            { Text: "querySelectorAll()", correct: false },
            { Text: "selectById()", correct: false },
            { Text: "getElementById()", correct: true },
            { Text: "getElementsByClass()", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        Answer: [
            { Text: "==", correct: false },
            { Text: "!=", correct: false },
            { Text: "===", correct: true },
            { Text: "=", correct: false }
        ]
    },
    {
        question: "What does NaN stand for in JavaScript?",
        Answer: [
            { Text: "Negative Number", correct: false },
            { Text: "Not a Number", correct: true },
            { Text: "No any Number", correct: false },
            { Text: "New and Null", correct: false }
        ]
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        Answer: [
            { Text: "method", correct: false },
            { Text: "def", correct: false },
            { Text: "func", correct: false },
            { Text: "function", correct: true }
        ]
    },
    {
        question: "Which data type is NOT primitive in JavaScript?",
        Answer: [
            { Text: "String", correct: false },
            { Text: "Object", correct: true },
            { Text: "Number", correct: false },
            { Text: "Boolean", correct: false }
        ]
    },
    {
        question: "Which method converts JSON to JavaScript object?",
        Answer: [
            { Text: "JSON.stringify()", correct: false },
            { Text: "JSON.parse()", correct: true },
            { Text: "JSON.convert()", correct: false },
            { Text: "JSON.object()", correct: false }
        ]
    },
    {
        question: "Which keyword stops a loop in JavaScript?",
        Answer: [
            { Text: "stop", correct: false },
            { Text: "exit", correct: false },
            { Text: "break", correct: true },
            { Text: "return", correct: false }
        ]
    },
    {
        question: "Which method removes the last element from an array?",
        Answer: [
            { Text: "shift()", correct: false },
            { Text: "unshift()", correct: false },
            { Text: "pop()", correct: true },
            { Text: "push()", correct: false }
        ]
    },
    {
        question: "Which event occurs when a button is clicked?",
        Answer: [
            { Text: "onchange", correct: false },
            { Text: "onmouseover", correct: false },
            { Text: "onclick", correct: true },
            { Text: "onload", correct: false }
        ]
    }
];





const questionElement=document.querySelector('#question')
const answerBtn=document.querySelector('#answer-btn')
const nextBtn=document.querySelector('#next-btn')


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextBtn.innerHTML='Next'
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+ '.' + currentQuestion.question;

    currentQuestion.Answer.forEach(answer => {
        const buttons=document.createElement("button")
        buttons.innerHTML=answer.Text;
        buttons.classList.add("btn");
        answerBtn.appendChild(buttons)
        if(answer.correct){
           buttons.dataset.correct=answer.correct; 
        }
        buttons.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display='none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}


function selectAnswer(e){
    console.log('ali')
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(buttons=>{
        if(buttons.dataset.correct==='true')
        {
            buttons.classList.add("correct")
        }
        buttons.disabled=true;
    })
    nextBtn.style.display='block'
}

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your Scored ${score} out of ${questions.length}.`;
    nextBtn.innerHTML="Restart";
    nextBtn.style.display='block';
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    }
    else{
        startQuiz();
    }
})


startQuiz();