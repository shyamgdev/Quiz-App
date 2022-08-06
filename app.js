const wrapper = document.querySelector('.wrapper');
const _topScore = document.querySelector(".top-score span");
const question = document.querySelector('#question');
const options = document.querySelector('.quiz-options');
const _askedCount = document.querySelector('#asked-count');
const _totalQuestion = document.querySelector('#total-question');
const checkAnsBtn = document.querySelector('#check-answer');
const playAgainBtn = document.querySelector('#play-again');
const result = document.querySelector('#result');
const reload = document.querySelector('#reload');

let correctAnswer = '', correctScore = askedCount = 0, totalQuestion = 10, topScore = 0;

function addEventListeners () {
  checkAnsBtn.addEventListener('click', checkAnswer);
  playAgainBtn.addEventListener('click', restartQuiz);
  reload.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
  addEventListeners();
  _askedCount.textContent = askedCount;
  _totalQuestion.textContent = totalQuestion;
})

async function loadQuestion() {
  const response = await fetch("https://opentdb.com/api.php?amount=1")
  const data = await response.json();
  result.innerHTML = '';
  showQuestion(data.results[0]);
  wrapper.style.opacity = '1';
}


function showQuestion(data) {
  checkAnsBtn.disabled = false;
  correctAnswer = data.correct_answer;
  // console.log(correctAnswer)
  let incorrectAnswer = data.incorrect_answers;
  let optionsList = incorrectAnswer;

  optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  question.innerHTML = `Q.${askedCount + 1} &nbsp;&nbsp; ${data.question} <br> <span class="category">${data.category}</span>`;
  options.innerHTML = `${optionsList.map((option, index) => `
    <li> ${index + 1}. <span> ${option} </span> </li>
  `).join('')}
  `;

  selectOption();
}

function selectOption () {
  options.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
      if(options.querySelector(".selected")) {
        const activeOption = options.querySelector('.selected');
        activeOption.classList.remove('selected');
      }
      option.classList.add('selected');
    })
  })
}

function checkAnswer () {
  checkAnsBtn.disabled = true;
  wrapper.style.opacity = "0.5";
  if(options.querySelector('.selected')) {
    let selectedAnswer = options.querySelector('.selected span').textContent;
    if(selectedAnswer.trim() == htmlDecode(correctAnswer)) {
      correctScore++;
      result.innerHTML = `<p> <i class="fas fa-check"></i>Correct Answer! </p>`
    }
    else {
      result.innerHTML = `<p> <i class="fas fa-times"></i>Incorrect Answer! </p> <p> <small><b>Correct Answer: </b> ${correctAnswer}</small></p>`
    }
    checkCount();
    wrapper.style.opacity = "1";
  }
  else {
    result.innerHTML = `<p> <i class="fa fa-question"></i> Please select an option! </p>`
    checkAnsBtn.disabled = false;
    wrapper.style.opacity = "1";
  }
}

function checkCount () {
  askedCount++;
  setCount();
  if(askedCount == totalQuestion) {
    result.innerHTML += `<p><b> Your score is ${correctScore}. </b></p>`
    checkAnsBtn.style.display = 'none';
    playAgainBtn.style.display = 'block';
    if(topScore < correctScore) {
      topScore = correctScore;
      _topScore.innerHTML = topScore;
    }
  }
  else {
    setTimeout(() => {
      loadQuestion();
    }, 300);
  }
}

function setCount () {
  _totalQuestion.textContent = totalQuestion;
  _askedCount.textContent = askedCount;
}

function restartQuiz () {
  wrapper.style.opacity = '0.5'
  playAgainBtn.style.display = 'none';
  checkAnsBtn.style.display = 'block';
  checkAnsBtn.disabled = false;
  correctScore = askedCount = 0;
  setCount();
  loadQuestion();
}

function htmlDecode (textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}