import { questions,disableAllAnswers, bringTimerCenter, activateTimer, disableTimer, activateAnswer } from "./functions.js";

const backPageIcon = document.querySelector(".back-page");
const nextPageBtn = document.querySelector(".next-btn");
const questionNumber = document.querySelector(".question-number");
const questionName = document.querySelector(".question-name");
const answersList = document.querySelector(".answers-list");

bringTimerCenter()

function showQuestion(questionId = 1) {
  const foundedQuestion = questions.find((q) => q.question_id == questionId);

  let isLastQuestion = false
  if (!foundedQuestion) {
    isLastQuestion = true
      window.location.href = "../pages/results-page.html";
  }

  const timerId = activateTimer(questionId);

  backPageIcon.setAttribute("data-question-id", questionId - 1);

  questionNumber.textContent = `${questionId}/${questions.length}`;
  questionName.textContent = foundedQuestion?.name;

  answersList.innerHTML = "";

  foundedQuestion.answers.forEach((ans) => {
    answersList.insertAdjacentHTML(
      "beforeend",
      `<li class="answer" onclick="activateAnswer(this, ${ans.id})" data-correct-answer=${ans.correct} id=${ans.id}>
        <p class="first-option">${ans.option}</p>
        <div class="checkbox"></div>
        </li>`
    );
  });

  nextPageBtn.setAttribute(
    "data-next",
    questions.length > questionId ? questionId + 1 : "next-page"
  );

  nextPageBtn.setAttribute("data-timer-id", timerId);
  backPageIcon.setAttribute("data-timer-id", timerId);
}

if (questions.length) {
  showQuestion(1);
}

const scoreBall = () => {
  const selectedAnswer = document.querySelector(".selected-answer")
  const scoreCal = scoreCalculatorFn()
  const clickedAns = selectedAnswer?.getAttribute("data-correct-answer")
  if (clickedAns) {
    scoreCal.addScore()
  }
}

const backToQuestion = function (questionId = 0) {
  if (questionId == 0) {
    window.location.href = "../index.html";
  } else {
    showQuestion(questionId);
  }
};

backPageIcon.addEventListener("click", (event) => {
  const questionId = backPageIcon.getAttribute("data-question-id");
  const timerId = backPageIcon.getAttribute("data-timer-id");
  disableTimer(timerId);
  backToQuestion(questionId);
});


 
nextPageBtn.addEventListener("click", () => {
  const nextQuestion = nextPageBtn.getAttribute("data-next");
  const timerId = nextPageBtn.getAttribute("data-timer-id");

  scoreBall()
  
  disableTimer(timerId);

  if (nextQuestion == "next-page") {
    const scoreCal = scoreCalculatorFn()
    const userScore = scoreCal.getscore()
    const url = location.href
    const userID = url.split("userId=")[1]
    let users_scores = localStorage.getItem("users");
    alert(users_scores)
  } else {
    showQuestion(Number(nextQuestion));
  }
});

window.activateAnswer = activateAnswer


let score = 0
const scoreCalculatorFn = () => {
  const addScore = () => {
    score += 1
  }

  const getscore = () =>{
    return score
  }

  return {addScore, getscore}
}

export {showQuestion, scoreBall }