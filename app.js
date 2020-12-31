const quizData = [
    {
        question: 'Which one is the first search engine in internet',
        a: 'Google',
        b: 'Archie', 
        c: 'Altavista',
        d: 'WAIS',
        correct: 'b'
    },
    {
        question: 'When was JavaScript launched',
        a: '1976',
        b: '1982', 
        c: '1995',
        d: '1985',
        correct: 'c'
    },
    {
        question: 'Which is the famous language of 2020',
        a: 'Python', 
        b: 'JavaScript',
        c: 'JAVA',
        d: 'C++',
        correct: 'b'
    },
    {
        question: 'which is the parent company of Snapchat',
        a: 'facebook',
        b: 'google', 
        c: 'amazon',
        d: 'none of the above',
        correct: 'a'
    },
    {
        question: 'Number of bits used by the IPv6 address',
        a: '32 bit',
        b: '64 bit', 
        c: '128 bit',
        d: '256 bit',
        correct: 'c'
    },
    {
        question: 'Which of the following programming language is used to create programs like applets?',
        a: 'COBOL',
        b: 'JAVA', 
        c: 'C',
        d: 'BASIC',
        correct: 'b'
    },
    {
        question: 'Which one programming language is exclusively used for artificial intelligence',
        a: 'Prolog',
        b: 'JAVA', 
        c: 'Python',
        d: 'none of the above',
        correct: 'a'
    },
    {
        question: 'Which of the following is not an operating system',
        a: 'DOS',
        b: 'MAC', 
        c: 'C',
        d: 'Linux',
        correct: 'c'
    },
    {
        question: 'Which of the following is not a database management software',
        a: 'MySQL',
        b: 'Oracle', 
        c: 'Sybase',
        d: 'COBOL',
        correct: 'd'
    },
    {
        question: 'Number of layers in the OSI Model',
        a: '9',
        b: '11', 
        c: '7',
        d: '5',
        correct: 'c'
    },
]
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submitBtn');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach(function(answerEl){
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers(){
    answerEls.forEach(function(answerEl){
        answerEl.checked = false;
    });
}

submitButton.addEventListener('click', function(){    
    const answer = getSelected();
    
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;    
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            //TODO: show result
            quiz.innerHTML = `
            <h2>You scored ${score}/${quizData.length} points</h2>
             <button onclick='location.reload()'>Reload</button>
             `;
        }
    }
});