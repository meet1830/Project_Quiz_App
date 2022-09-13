const quizData = [
  {
    question: "What is the most popular programming language of 2022?",
    a: "Java",
    b: "JavaScript",
    c: "C++",
    d: "Ruby",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup language",
    b: "Cascading Style Sheets",
    c: "EcmaScript",
    d: "JavaScript Object Notation",
    correct: "a",
  },
  {
    question: "Who is the Prime Minister of India?",
    a: "Rahul Gandhi",
    b: "Mahatma Gandhi",
    c: "Amit Shah",
    d: "Narendra Modi",
    correct: "d",
  },
  {
    question: "Which of these is not a code editor?",
    a: "Visual Studio Code",
    b: "Facebook",
    c: "Atom",
    d: "Sublime Text",
    correct: "b",
  },
  {
    question: "Which of these is not an operating system?",
    a: "Linux",
    b: "Microsoft Windows",
    c: "Android",
    d: "Mac",
    correct: "c",
  },
];

currQuestion = 0;

const wholeQuiz = document.getElementById("quiz-container");
const questionEle = document.getElementById("question");
const aOption = document.getElementById("a_text");
const bOption = document.getElementById("b_text");
const cOption = document.getElementById("c_text");
const dOption = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEles = document.querySelectorAll(".answer");

function loadQuiz() {
  const quiz = quizData[currQuestion];

  questionEle.innerText = quiz["question"];
  aOption.innerText = quiz["a"];
  bOption.innerText = quiz["b"];
  cOption.innerText = quiz["c"];
  dOption.innerText = quiz["d"];
}

// load the first question
loadQuiz();

function getSelected() {
  let selectedAns = undefined;

  answerEles.forEach((answerEle) => {
    if (answerEle.checked) {
      selectedAns = answerEle.id;
    }
  });

  return selectedAns;
}

function deselectAns() {
  answerEles.forEach((answerEle) => {
    answerEle.checked = false;
  });
}

let score = 0;
submitBtn.addEventListener("click", () => {
  // proceed to next question only if selected an answer to this question
  const userAns = getSelected();

  if (userAns) {
    if (userAns === quizData[currQuestion].correct) {
      score++;
    }

    deselectAns();

    currQuestion++;

    // load next question
    if (currQuestion < quizData.length) {
      loadQuiz();
    } else {
        wholeQuiz.innerHTML = `
        <h2>Your score: ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload Quiz</button>`;
    }
  } else {
    console.log("select ans");
  }
});
