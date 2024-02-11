// show/hide ABOUT tab
var coin = document.querySelector(".coin");


function classToggle(element, toggle) {
  element.classList.toggle(toggle);
}

var aboutButton = document.getElementById('about__button')
var aboutText = document.getElementById('about__text')

aboutButton.addEventListener('click', () => {
  classToggle(aboutText, 'collapse')
})

let headImage = [];
let tailImage = [];


var plusIcon = document.getElementById('plusicon')
var plusIcon2 = document.getElementById('plusicon2')
var minusIcon = document.getElementById('minusicon')
var minusIcon2 = document.getElementById('minusicon2')
var urlLine1 = document.querySelector('.coin-img__line1')
var urlLine2 = document.querySelector('.coin-img__line2')

var root = document.querySelector(':root');
var coinHeads = document.getElementById('coin-img__input1');
var coinTails = document.getElementById('coin-img__input2');

function toggleURL2(line, minus, plus) {
  classToggle(line, 'collapse');
  classToggle(minus, 'collapse');
  classToggle(plus, 'collapse');
  //  classToggle(minusIcon2, 'collapse');
  //  classToggle(plusIcon2, 'collapse');
}

plusIcon.addEventListener('click', () => {
  toggleURL2(urlLine2, minusIcon, plusIcon);
})

plusIcon2.addEventListener('click', () => {
  toggleURL2(urlLine1, minusIcon2, plusIcon2);

})

minusIcon.addEventListener('click', () => {
  toggleURL2(urlLine1, minusIcon2, plusIcon2);
  headImage.splice(0, 1);
  coinHeads.value = '';
  faceChange(headImage[0], tailImage[0]);

})

minusIcon2.addEventListener('click', () => {
  toggleURL2(urlLine2, minusIcon, plusIcon);
  tailImage.splice(0, 1);
  coinTails.value = '';
  faceChange(headImage[0], tailImage[0]);

})

// coinHeads.addEventListener('change', faceChange);
// coinTails.addEventListener('change', faceChange);

// var imgTest = 'crown.png'

// root.style.setProperty('--head', `url("${imgTest}")`);

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





coinHeads.addEventListener('change', function () {
  const file_reader = new FileReader();
  file_reader.addEventListener('load', () => {
    const uploaded_image = file_reader.result;
    headImage.splice(0, 1, uploaded_image);
    faceChange(headImage[0], tailImage[0]);
  });
  file_reader.readAsDataURL(this.files[0]);
});

coinTails.addEventListener('change', function () {
  const file_reader = new FileReader();
  file_reader.addEventListener('load', () => {
    const uploaded_image = file_reader.result;
    tailImage.splice(0, 1, uploaded_image);

    faceChange(headImage[0], tailImage[0]);
  });
  file_reader.readAsDataURL(this.files[0]);
});


function faceChange(url1, url2) {

  if (url1 && url2) {
    root.style.setProperty('--head', `url("${url1}")`);
    root.style.setProperty('--tail', `url("${url2}")`);
  }
  else if (url1 || url2) {
    var url0 = (url1 || url2);
    root.style.setProperty('--head', `url("${url0}")`);
    root.style.setProperty('--tail', `url("${url0}")`);
  }
  else {
    return
  }

}
/*
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
*/
/* 
 - validate input
 - if only one input, set for both
*/

var coinColorGold = document.getElementById('coinColor__gold')
var coinColorSilver = document.getElementById('coinColor__silver')
var coinColorCopper = document.getElementById('coinColor__copper')

function coinColorClassSet(color) {
  coinColorGold.classList.remove('coinColor__selected'),
    coinColorSilver.classList.remove('coinColor__selected'),
    coinColorCopper.classList.remove('coinColor__selected'),
    color.classList.add('coinColor__selected')
}

coinColorGold.addEventListener('click', function () {
  coin.style.filter = 'none';
  coinColorClassSet(coinColorGold)
})

coinColorSilver.addEventListener('click', function () {
  coin.style.filter = 'saturate(0)';
  coinColorClassSet(coinColorSilver)
})

coinColorCopper.addEventListener('click', function () {
  coin.style.filter = 'hue-rotate(-40deg) brightness(0.75) contrast(115%)';
  coinColorClassSet(coinColorCopper)
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
const body = document.querySelector("body");
function updateColor(event) {

  if (body) {
    body.style.backgroundColor = event.target.value;
  }
}



// Setting variables

var buttonAlt = document.getElementById("spinstyle__alt");
var buttonConst = document.getElementById("spinstyle__const");
var slider = document.getElementById("speedInput");
var sliderValueArrayConst = [0.15, 0.25, 0.37, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5]
var sliderValueArrayAlt = [3, 4, 5, 6, 7, 8, 9, 10, 11]



// Speed slider

slider.addEventListener('input', speedAdjust);

function speedAdjust() {
  let sliderValue = slider.value;
  if (buttonAlt.classList.contains('spinstyle__button--active')) {
    var speed = (sliderValueArrayAlt[sliderValue]);
  }
  else { var speed = sliderValueArrayConst[sliderValue]; }


  coin.style.animationDuration = `${speed}s`;
}





// Spin style buttons 

function spinStyleAlt() {
  var coin = document.querySelector('.coin');
  coin.style.animationName = `spinAlt`;
  coin.style.animationDirection = `alternate`;
  buttonAlt.classList.toggle('spinstyle__button--active');
  buttonConst.classList.toggle('spinstyle__button--active');
  slider.style.max = sliderValueArrayAlt.length
  slider.style.value = ((sliderValueArrayAlt.length) / 2)
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
  slider.style.max = sliderValueArrayConst.length
  slider.style.value = ((sliderValueArrayConst.length) / 2)
}

document.querySelector('#spinstyle__const').addEventListener('click', () => {
  spinStyleConst();
  speedAdjust();
})

var reset = document.getElementById('reset')

reset.addEventListener('click', function(){
  headImage.splice(0, 1);
  coinHeads.value = '';
  tailImage.splice(0, 1);
  coinTails.value = '';
  classToggle(urlLine2, 'collapse');
  spinStyleConst();
  speedAdjust();
  faceChange(headImage[0], tailImage[0]);
  colorPicker.value = defaultColor;
  body.style.backgroundColor = defaultColor;
  coin.style.filter = 'saturate(0)';
  coinColorClassSet(coinColorSilver);
  aboutText.classList.add('collapse');
})
