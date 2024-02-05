// show/hide ABOUT tab



function classToggle(element, toggle) {
  element.classList.toggle(toggle);
}

var aboutButton = document.getElementById('about__button')
var aboutText = document.getElementById('about__text')

aboutButton.addEventListener('click', () => {
  classToggle(aboutText, 'collapse')
})

var plusIcon = document.getElementById('plusicon')
var minusIcon = document.getElementById('minusicon')
var urlLine2 = document.querySelector('.coin-img__line2')

function toggleURL2() {
  classToggle(urlLine2, 'collapse');
  classToggle(minusIcon, 'hide');
  classToggle(plusIcon, 'hide');
  if (minusIcon.classList.contains('hide')){
    document.getElementById('coin-img__input1').placeholder = "paste URL for faces here";}
    else {document.getElementById('coin-img__input1').placeholder = "paste URL for heads here"
  }
}

plusIcon.addEventListener('click', () => {
  toggleURL2();
})

minusIcon.addEventListener('click', () => {
  toggleURL2();
})

var root = document.querySelector(':root');
var coinHeads = document.getElementById('coin-img__input1');
var coinTails = document.getElementById('coin-img__input2');

var url1 = coinHeads.value;
var url2 = coinTails.value;

coinHeads.addEventListener('change', showErrorMessage(coinHeads));
coinTails.addEventListener('change', faceChange);

var imgTest = 'bulb.png'

root.style.setProperty('--head', `url("${imgTest}")`);

/*
function isImgUrl(url, element) {
  return fetch(url, {method: 'HEAD'}).then(res => {
    if (res.headers.get('Content-Type').startsWith('image')){
      faceChange(url);
    }
    else {
      showErrorMessage(element)
    }
  })
}
*/

function faceChange() {

  if (url1 && url2){
    root.style.setProperty('--head', `url("${url1}")`);
    root.style.setProperty('--tail', `url("${url2}")`);
  }
  else if (url1 || url2) {
    var url0 = (url1 || url2);
    root.style.setProperty('--head', `url("${url0}")`);
    root.style.setProperty('--tail', `url("${url0}")`);
  }
 
}

function showErrorMessage(input) {
  let container = input.parentElement; // The .input-wrapper
  
  // Remove an existing error
  let error = container.querySelector('.error-message');
  if (error) {
    container.removeChild(error);
  }
  
  // Now add the error, if the message is not empty
  else {
    let error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = "This URL isn't valid!";
    container.appendChild(error);
  }
}

/* 
 - validate input
 - if only one input, set for both
*/



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
  coin.style.animationDirection = `normal`;
  buttonAlt.classList.toggle('spinstyle__button--active');
  buttonConst.classList.toggle('spinstyle__button--active');
}

document.querySelector('#spinstyle__const').addEventListener('click', () => {
  spinStyleConst();
  speedAdjust();
})
