
const trivia = {
  question: "Which programming language runs in the browser?",
  options: ["Python", "C++", "JavaScript", "Java"],
  answer: "JavaScript"
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const jokeSection = document.getElementById("joke-section");
const messageSection = document.getElementById("message-section");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const messageEl = document.getElementById("message");
const retryBtn = document.getElementById("retry");


function loadTrivia() {
  questionEl.textContent = trivia.question;
  optionsEl.innerHTML = "";

  trivia.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  jokeSection.classList.add("hidden");
  messageSection.classList.add("hidden");
}

function checkAnswer(selected) {
  if (selected === trivia.answer) {
    showJoke();
  } else {
    showMessage("Oops! That's incorrect. Try again.");
  }
}


function showJoke() {
  jokeSection.classList.remove("hidden");
  messageSection.classList.add("hidden");

  setupEl.textContent = "Fetching a funny one...";
  punchlineEl.textContent = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.punchline;
    })
    .catch(() => {
      setupEl.textContent = "Couldn't fetch joke 😞";
    });
}


function showMessage(msg) {
  messageEl.textContent = msg;
  messageSection.classList.remove("hidden");
  jokeSection.classList.add("hidden");
}

retryBtn.addEventListener("click", loadTrivia);


loadTrivia();

