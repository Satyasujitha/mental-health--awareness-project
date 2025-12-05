// Simple mood quiz
function startQuiz() {
  const answer = prompt(
    "How are you feeling today? (happy / okay / sad / stressed)"
  );

  const resultBox = document.getElementById("quiz-result");
  let msg = "";

  if (!answer) {
    msg = "It’s okay if you don’t want to share right now 💛";
  } else {
    const mood = answer.toLowerCase().trim();

    if (mood === "happy") {
      msg = "Yay! Keep enjoying the good moments 🌈";
    } else if (mood === "okay") {
      msg = "You're doing fine. Take small breaks and be kind to yourself ✨";
    } else if (mood === "sad") {
      msg = "Sending you a big virtual hug 🤗 Talk to someone you trust.";
    } else if (mood === "stressed") {
      msg = "Pause, breathe deeply, and remember you don’t have to do it all at once 💛";
    } else {
      msg = "Whatever you’re feeling is valid. You are not alone 💜";
    }
  }

  resultBox.textContent = msg;
}

// (optional) rotating quotes – you can remove this if you want static text
const quotes = [
  "“You are stronger than you think.”",
  "“Your feelings are valid.”",
  "“One step at a time is still progress.”",
  "“You don’t have to be perfect to be worthy.”"
];

let index = 0;
setInterval(() => {
  index = (index + 1) % quotes.length;
  const quoteEl = document.getElementById("quote-text");
  if (quoteEl) {
    quoteEl.textContent = quotes[index];
  }
}, 5000);
