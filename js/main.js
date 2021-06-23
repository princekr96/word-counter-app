const input = document.querySelector('.textfield');
const word = document.querySelector('.word');
const letter = document.querySelector('.character');

function fun() {
  var wordCount = 0, letterCount = 0;

  letterCount = input.value;
  letter.textContent = letterCount.length;

  var split = letterCount.split(" ");

  for(var i=0; i<split.length; i++) {
    if (split[i] !== "") {
      wordCount += 1;
    }
  }

  word.textContent = wordCount;
}