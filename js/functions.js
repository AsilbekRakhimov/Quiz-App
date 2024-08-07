import { showQuestion, scoreBall } from "./questions.js";
console.log(showQuestion);
const questions = [
  {
    question_id: 1,
    name: "O'zbekistonning poytaxti qaysi?",
    answers: [
      {
        id: 1,
        option: "Toshkent",
        correct: true,
      },
      {
        id: 2,
        option: "London",
        correct: false,
      },
      {
        id: 3,
        option: "Moskva",
        correct: false,
      },
      {
        id: 4,
        option: "Vashington",
        correct: false,
      },
    ],
  },
  {
    question_id: 2,
    name: "Dunyoda nechta okean bor?",
    answers: [
      {
        id: 5,
        option: "5",
        correct: false,
      },
      {
        id: 6,
        option: "7",
        correct: false,
      },
      {
        id: 7,
        option: "4",
        correct: true,
      },
      {
        id: 8,
        option: "3",
        correct: false,
      },
    ],
  },
  {
    question_id: 3,
    name: "Eng ko'p aholiga ega davlat qaysi?",
    answers: [
      {
        id: 9,
        option: "Rossiya",
        correct: false,
      },
      {
        id: 10,
        option: "Xitoy",
        correct: false,
      },
      {
        id: 11,
        option: "Amerika",
        correct: false,
      },
      {
        id: 12,
        option: "Hindiston",
        correct: true,
      },
    ],
  },
  {
    question_id: 4,
    name: "Dunyo aholisi qancha?",
    answers: [
      {
        id: 13,
        option: "8 mlrd",
        correct: false,
      },
      {
        id: 14,
        option: "7 mlrd",
        correct: true,
      },
      {
        id: 15,
        option: "5 mlrd",
        correct: false,
      },
      {
        id: 16,
        option: "9 mlrd",
        correct: false,
      },
    ],
  },
  {
    question_id: 5,
    name: "Dunyodagi eng katta davlat qaysi?",
    answers: [
      {
        id: 17,
        option: "Rossiya",
        correct: true,
      },
      {
        id: 18,
        option: "Xitoy",
        correct: false,
      },
      {
        id: 19,
        option: "Amerika",
        correct: false,
      },
      {
        id: 20,
        option: "Hindiston",
        correct: false,
      },
    ],
  },
  {
    question_id: 6,
    name: "Jahon tili qaysi til?",
    answers: [
      {
        id: 21,
        option: "Rus tili",
        correct: false,
      },
      {
        id: 22,
        option: "Yapon tili",
        correct: false,
      },
      {
        id: 23,
        option: "Ingliz tili",
        correct: true,
      },
      {
        id: 24,
        option: "Tojik tili",
        correct: false,
      },
    ],
  },
  {
    question_id: 7,
    name: "Amerika milliy valyutasi qaysi?",
    answers: [
      {
        id: 25,
        option: "Rubl",
        correct: false,
      },
      {
        id: 26,
        option: "Yuan",
        correct: false,
      },
      {
        id: 27,
        option: "Dollar",
        correct: true,
      },
      {
        id: 28,
        option: "Rubiy",
        correct: false,
      },
    ],
  },
  {
    question_id: 8,
    name: "Odam miyasi sig'imi qancha?",
    answers: [
      {
        id: 29,
        option: "4 trbyt",
        correct: true,
      },
      {
        id: 30,
        option: "3 trbyt",
        correct: false,
      },
      {
        id: 31,
        option: "2 trbyt",
        correct: false,
      },
      {
        id: 32,
        option: "5 trbyt",
        correct: false,
      },
    ],
  },
  {
    question_id: 9,
    name: "Quyosh qaysi davlatdan chiqadi?",
    answers: [
      {
        id: 33,
        option: "Amerika",
        correct: false,
      },
      {
        id: 34,
        option: "Rossiya",
        correct: false,
      },
      {
        id: 35,
        option: "Yaponiya",
        correct: true,
      },
      {
        id: 36,
        option: "Xitoy",
        correct: false,
      },
    ],
  },
  {
    question_id: 10,
    name: "Rossiyaning poytaxti qaysi?",
    answers: [
      {
        id: 37,
        option: "Pekin",
        correct: false,
      },
      {
        id: 38,
        option: "Latviya",
        correct: false,
      },
      {
        id: 39,
        option: "Madrid",
        correct: false,
      },
      {
        id: 40,
        option: "Moskva",
        correct: true,
      },
    ],
  },
];

function disableAllAnswers() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((el) => {
    el.classList.remove("selected-answer");

    el.childNodes[3].classList.remove("selected-checkbox");

    el.childNodes[3].innerHTML = "";
  });
}

function bringTimerCenter(params) {
  const questionTimerEl = document.querySelector(".question-titles");
  const questionTimerTimeEl = document.querySelector(".time");
  questionTimerTimeEl.style.left = `${
    questionTimerEl.clientWidth / 2 - questionTimerTimeEl.clientWidth / 2 - 10
  }px`;

  window.addEventListener("resize", () => {
    questionTimerTimeEl.style.left = `${
      questionTimerEl.clientWidth / 2 - questionTimerTimeEl.clientWidth / 2 - 10
    }px`;
  });
}


function activateTimer(questionId, defaultTime = 8) {
  const questionTimerTime = document.querySelector(".question-timer-time");

  let questionTime = defaultTime;
  questionTimerTime.textContent = questionTime;

  let timerId = null;

  timerId = setInterval(() => {
    questionTime--;
    questionTimerTime.textContent = questionTime;

    if (questionTime == 0) {
      clearInterval(timerId);
      scoreBall()
      showQuestion(Number(questionId) + 1);
    }
  }, 1000);

  return timerId;
}

function disableTimer(timerId) {
  clearInterval(timerId);
}

function activateAnswer(el, elId) {
  disableAllAnswers();


  el.classList.add("selected-answer");

  el.childNodes[3].classList.add("selected-checkbox");

  el.childNodes[3].insertAdjacentHTML(
    "beforeend",
    '<img src="../public/images/selected.svg"></img>'
  );
}

export { questions, disableAllAnswers, bringTimerCenter, activateTimer, disableTimer, activateAnswer };
