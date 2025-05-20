const quiz = document.getElementById('quiz')
const mainQuestion = document.getElementById('question')
const allAnswers = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btn = document.getElementById('submit')

const quizData = [
    {
      question:"Which language run in a web browser?",
      a:"Java",
      b:"C",
      c:"Python",
      d:"JavaScript",
      correct:"d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
];

let idx = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselected()

    let currentPage = quizData[idx]

    mainQuestion.innerHTML = currentPage.question
    a_text.innerHTML = currentPage.a
    b_text.innerHTML = currentPage.b
    c_text.innerHTML = currentPage.c
    d_text.innerHTML = currentPage.d

}

function deselected(){
    allAnswers.forEach((ans) => ans.checked = false)
}

function getAnswers(){
    let answer

    allAnswers.forEach((ans) => {
        if(ans.checked){
            answer = ans.id
        }
    })

    return answer

}

    btn.addEventListener('click', function(){
        let answer = getAnswers()
    
        if(answer){
            if(answer === quizData[idx].correct){
                score++
            }
    
            idx++
    
            if(idx <= quizData.length - 1){
                loadQuiz()
            }else{
                quiz.innerHTML = `<h2>You Answered ${score} answers out of ${quizData.length} correctly</h2> 
                <button onclick = "location.reload()">Reload</button>
                `
            }
    
        }
    })

