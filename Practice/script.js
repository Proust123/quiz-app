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

const question = document.getElementById('question')
const allAnswers = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let idx = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselected()

    currentPageQues = quizData[idx]

    question.innerText = currentPageQues.question
    a_text.innerText = currentPageQues.a
    b_text.innerText = currentPageQues.b
    c_text.innerText = currentPageQues.c
    d_text.innerText = currentPageQues.d

}

function deselected(){
    allAnswers.forEach((ans) => ans.checked = false)
}

function selected(){
    let answer

    allAnswers.forEach((ans) => {
        if(ans.checked){
            answer = ans.id
        }
    })

    return answer

}

submit.addEventListener('click', function() {
    let answer = selected()


    if(answer){
        if(answer === quizData[idx].correct){
            score++
        }
        idx++
        if(idx < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>You answerd ${score}/${quizData.length} question correctly</h2>
                  <button onclick="location.reload()">Reload</button>
                `
        }
    }

})