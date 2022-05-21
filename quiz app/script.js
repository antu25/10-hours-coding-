// json object 

const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c',
    },

{
    question: 'which is state name of Kaiserslautern?',
    a: 'Rheinland Pflaz',
    b: 'Bayern',
    c: 'Berlin',
    d: 'Hessen',
    correct: 'c'
},

{

question: 'what is most favorite language ?',
a: 'java',
b: 'C',
c: 'C++',
d: 'C#',
correct: 'a'
},


{

    question: 'what is most favorite language ?',
    a: 'java',
    b: 'C',
    c: 'C++',
    d: 'C#',
    correct: 'a'
    }
    

];




const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById( "quiz");


const questionEl = document.getElementById( "question");

const a_text = document.getElementById( "a_text");

const b_text = document.getElementById("b_text");

const c_text = document.getElementById("c_text");

const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById( "submitBtn");

let currentQuiz = 0;
let score = 0;

//loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];    

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;

    b_text.innerText = currentQuizData.b;
    
    c_text.innerText = currentQuizData.c;
    
    d_text.innerText = currentQuizData.d;
    
    
}

function getSelected(){

    let answer = undefined;


    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer= answerEl.id;
        }

    });

return answer;

}


function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked = false;

    });

}


/*submitBtn.addEventListener("click", ()=>{
   
    const answer = getSelected();
    

    if (answer){

        if(answer === quizData[currentQuiz].correct){
            score++;

        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h3> You answered correctly at ${score} / ${quizData.length} questions. </h3>`;
        }

    }


 
});

*/


const question_text = document.getElementById("question_text");

const answer_texta = document.getElementById("answer_a");
const answer_textb = document.getElementById("answer_b");
const answer_textc = document.getElementById("answer_c");
const answer_textd = document.getElementById("answer_d");


function insert() {
    myJson = {
      Question_texts: question_text,
      Answer_A: answer_texta,
      Answer_B: answer_textb,
      Answer_C: answer_textc,
      Answer_D: answer_textd,
   
    };
   



    console.log(myJson.Question_texts.value);

    console.log(myJson.Answer_A.value);
    console.log(myJson.Answer_B.value);
    console.log(myJson.Answer_C.value);
    console.log(myJson.Answer_D.value);
  }


  function nextPage(){
    window.location = "index.html";
} 

function setquestion(){
    deselectAnswers();

    const currentQuizData = myJson[currentQuiz];    

    questionEl.innerText = currentQuizData.Question_texts;

    a_text.innerText = currentQuizData.Answer_A;

    b_text.innerText = currentQuizData.Answer_B;
    
    c_text.innerText = currentQuizData.Answer_C;
    
    d_text.innerText = currentQuizData.Answer_D;
    
} 


  insert_Btn.addEventListener("click",()=>{

    insert();


    //nextPage();
  
});

