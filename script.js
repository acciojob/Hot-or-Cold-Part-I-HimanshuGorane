//your code here
const btn = document.querySelector("#btn");
  const num = document.querySelector("#num");
  const guessBtn = document.querySelector("#guessBtn");
  const guess = document.querySelector("#guess");
  const result = document.querySelector("#result");
  let randomNumber;

  btn.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 41) - 20;
    num.textContent = "The number to guess is: " + randomNumber;
  });

  guessBtn.addEventListener("click", function() {
    let userGuess = parseInt(guess.value);
    let difference = Math.abs(userGuess - randomNumber);
    if (difference <= 5) {
      result.textContent = "Hot!";
    } else {
      result.textContent = "Cold!";
    }
  });
