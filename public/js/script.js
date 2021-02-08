
alert('i am still working on my portfolio 👨🏻‍💻 !!! ')

const texts = ["creative", "passionate", "talented"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if (count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.container  .typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  // setInterval(type, 250);
  setTimeout(type, 250);
})();