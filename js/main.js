const input = document.querySelector('.textfield');
const word = document.querySelector('.word');
const letter = document.querySelector('.character');

var inputVal;

// input.addEventListener('change', (e) => {
//   inputVal = e.target.value;
//   letter.innerText = inputVal.length;
// });

function fun() {
  input.addEventListener('change', (e) => {
    inputVal = e.target.value;
    letter.innerText = inputVal.length;
  });
}