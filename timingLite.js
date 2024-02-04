// show/hide ABOUT tab

function collapseElement() {
  var aboutButton = document.getElementById("about__text");
  aboutButton.classList.toggle('collapse');
}

document.querySelector('#about__button').addEventListener('click', () => {
  collapseElement();
})



// ColorPicker for Background

let colorPicker;
const defaultColor = "#f0efff";

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#bgColor__input");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateColor, false);
  colorPicker.select();
}

function updateColor(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.backgroundColor = event.target.value;
  }
}



// Setting variables

var buttonAlt = document.getElementById("spinstyle__alt");
var buttonConst = document.getElementById("spinstyle__const");
var slider = document.getElementById("speedInput");




// Speed slider

slider.addEventListener('input', speedAdjust);

function speedAdjust() {
  if (buttonAlt.classList.contains('spinstyle__button--active')) {
    var speed = ((slider.value) * 10);
  }
  else { var speed = slider.value; }

  var coin = document.querySelector(".coin");
  coin.style.animationDuration = `${speed}s`;
}



// Spin style buttons 

function spinStyleAlt() {
  var coin = document.querySelector('.coin');
  coin.style.animationName = `spinAlt`;
  coin.style.animationDirection = `alternate`;
  buttonAlt.classList.toggle('spinstyle__button--active');
  buttonConst.classList.toggle('spinstyle__button--active');
}

document.querySelector('#spinstyle__alt').addEventListener('click', () => {
  spinStyleAlt();
  speedAdjust();
})

function spinStyleConst() {
  var coin = document.querySelector('.coin');
  coin.style.animationName = `spinConst`;
  coin.style.animationDirection = `linear`;
  buttonAlt.classList.toggle('spinstyle__button--active');
  buttonConst.classList.toggle('spinstyle__button--active');
}

document.querySelector('#spinstyle__const').addEventListener('click', () => {
  spinStyleConst();
  speedAdjust();
})
