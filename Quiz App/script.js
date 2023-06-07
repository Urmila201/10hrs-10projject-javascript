const quizData = [
     {
      question : 'How Old are florin is?',
      a:'20',
      b:'22',
      c:'26',
      d:'27',
      correct:'c'
     },{
        question:'HTML stands for?',
        a:'cascading style sheet',
        b:'Data Structure',
        c:'Hypertext Markup Language',
        d:'Hypwertext Markup language Protocall',
        correct:'c'
    },{
        question:'javascript is a ______.',
        a:'markup language',
        b:'framework',
        c:'library',
        d:'frontend language',
        correct:'d'
    },{
        question:'founder of javscript ?',
        a:'Brenden Eich',
        b:'Barak Obama',
        c:'developers',
        d:'Raghunath shashri',
        correct:'a'
    },{
       question:'Who owns JavaScript language?' ,
       a:'congnizant',
       b:'Oracle Corporation',
       c:'ProsperaSoft',
       d:'AppZen',
       correct:'b'
    }
]

alert("Do You want To Start The Quiz?")
alert("Good Luck! Here We Good To Go")

const quiz = document.getElementById("quiz")

const answerEls = document.querySelectorAll(".answer")

const questionEl = document.getElementById("question")

 const a_text = document.getElementById('a_text')
 const b_text = document.getElementById('b_text')
 const c_text = document.getElementById('c_text')
 const d_text = document.getElementById('d_text')
 const submitBtn = document.getElementById('submit');

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

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;

        }
})
return answer;
}

function deSelectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    
})
}

submitBtn.addEventListener("click",() =>{
    //checked to see the answer//
    const answer = getSelected();

    console.log(answer);

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You Answered Correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload </button>`
        }
        alert("Do You Want to Submit the Answer ! Please Recheck It")
       }
  })
 