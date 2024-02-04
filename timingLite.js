function collapseElement() {
  var aboutButton = document.getElementById("about__text");
  aboutButton.classList.toggle('collapse');
}

document.querySelector('#about__button').addEventListener('click', () => {
  collapseElement();
})



//ColorPicker for Background

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


var buttonAlt = document.getElementById("spinstyle__alt");
var buttonConst = document.getElementById("spinstyle__const");
var slider = document.getElementById("speedInput");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var speed = slider.value;
  var coin = document.querySelector(".coin");
  coin.style.animationDuration = `${speed}s`;
} 



function spinStyleAlt() {
  var coin = document.querySelector('.coin');
  coin.style.animationName = `spinAlt`;
  coin.style.animationDirection = `alternate`;
  buttonAlt.classList.toggle('spinstyle__button--active');
  buttonConst.classList.toggle('spinstyle__button--active');
}

document.querySelector('#spinstyle__alt').addEventListener('click', () => {
  spinStyleAlt();
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
})
