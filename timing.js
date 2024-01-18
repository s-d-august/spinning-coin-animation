/* This code allows for the size and rotation of the coin to be changed dynamically by using CSSStylesheet or writing to <style>. */

let coinSize = [10]; // sets the size of the coin in the below units. Number only.

let unit = ['rem']; // i.e. px, in, rem

let backgroundColor = ['#f0efff']; // string should be formatted for CSS -- hex, RGB, and valid color names are acceptable

let headImage = ['url("crown.png")']; // link to the image for the HEADS side of the coin, formatted for CSS. Can be local or external.
let tailImage = ['url("knife.png")']; // same as above, for TAILS

let animationTime = [15]; // in seconds. The complete accelerate/decelerate cycle takes twice this time (because it reverses.)

/* Timing intervals for each rotation, based on CSS animation keyframes. 
Each value represents one spin, from face to face; the numbers are the percentage the animation is complete.
Smaller intervals = faster spinning, larger intervals = slower spinning. */

let intervalAcc = [0, 12.5, 21.5, 30, 38, 45.5, 52.5, 59, 65, 70.5, 75.5, 80, 84, 87.5, 90.5, 93, 95, 96, 97, 97.5, 98, 98.5, 99, 99.5, 100];
//The coin accelerates, then decelerates.

let intervalEven = [0, 50, 100];
//The coin spins at a constant speed.

let interval = intervalAcc; // set intervalAcc or intervalEven


//The following makes sure the coin animation plays in the right direction -- linear for the constant, alternate for the accel/decel. 
let animationDirection = '';
if (interval === intervalAcc) {
  animationDirection = ['alternate'];
}
else {animationDirection = ['linear'];
}


/* The complete CSS is stored as 3 separate variables (css2 is generated by a loop) which are joined together to work.
    (css1 + css2 + css3) === css */

// Everything up to the start of the keyframes, which are generated on a loop
let css1 = [`


:root {
  --faceColor: #a0a0a0;
  --lowlight: #111;
  --side: #6F6F6F;
  --side-dark: #0e0e0e;
}

html {
  height: 100%;
}

body {
  height: 100%;
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
}

.coin {
  height: ${coinSize}${unit};
  width: ${coinSize}${unit};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.coin::before {
  content: "";
  display: block;
  position: relative;
  height: ${coinSize}${unit};
  width: ${coinSize}${unit};
  border-radius: 50%;
  background-color: var(--faceColor);
  animation: spin ${animationTime}s ${animationDirection} infinite;
  background-image: ${headImage};
  background-size: 100% 100%;
  background-position: center;
  background-blend-mode: overlay;
  filter: saturate(0);
  animation-delay: -0.5s;
}  @keyframes spin {`
]

//The function to generate the spinning animation (css2). The array variable is associated with the interval variable.

function getcss2(array) {
  var output = '';

  for (let i = 0; i < (array.length - 1); i = i + 2) {
    output += (`

    
    ${interval[i]}% {
    width: ${coinSize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: ${tailImage};
      background-color: var(--faceColor);
}

    ${(interval[i] + interval[i + 1]) / 2 - 0.001}% {
    width: ${coinSize / 100}${unit};
      box-shadow:
        ${coinSize / 200}${unit} 0 0 var(--side),
        ${coinSize / 100}${unit} 0 0 var(--side),
        ${coinSize / 66.66}${unit} 0 0 var(--side),
        ${coinSize / 50}${unit} 0 0 var(--side),
        ${coinSize / 40}${unit} 0 0 var(--side),
        ${coinSize / 33.33}${unit} 0 0 var(--side),
        ${coinSize / 28.57}${unit} 0 0 var(--side),
        ${coinSize / 25}${unit} 0 0 var(--side),
        ${coinSize / 22.22}${unit} 0 0 var(--side),
        ${coinSize / 20}${unit} 0 0 var(--side),
        ${coinSize / 18.18}${unit} 0 0 var(--side),
        ${coinSize / 16.65}${unit} 0 0 var(--side),
        ${coinSize / 15.37}${unit} 0 0 var(--side),
        ${coinSize / 14.28}${unit} 0 0 var(--side),
        ${coinSize / 13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinSize / -26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: linear;
      background-image: ${tailImage};
}

    ${(interval[i] + interval[i + 1]) / 2 + 0.001}% {
    width: ${coinSize / 100}${unit};
      box-shadow:
        ${coinSize / -200}${unit} 0 0 var(--side),
        ${coinSize / -100}${unit} 0 0 var(--side),
        ${coinSize / -66.66}${unit} 0 0 var(--side),
        ${coinSize / -50}${unit} 0 0 var(--side),
        ${coinSize / -40}${unit} 0 0 var(--side),
        ${coinSize / -33.33}${unit} 0 0 var(--side),
        ${coinSize / -28.57}${unit} 0 0 var(--side),
        ${coinSize / -25}${unit} 0 0 var(--side),
        ${coinSize / -22.22}${unit} 0 0 var(--side),
        ${coinSize / -20}${unit} 0 0 var(--side),
        ${coinSize / -18.18}${unit} 0 0 var(--side),
        ${coinSize / -16.65}${unit} 0 0 var(--side),
        ${coinSize / -15.37}${unit} 0 0 var(--side),
        ${coinSize / -14.28}${unit} 0 0 var(--side),
        ${coinSize / -13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinSize / 26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
      background-image: ${headImage};
}

  ${interval[i + 1]}% {
    width: ${coinSize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: ${headImage};
      background-color: var(--faceColor);
}

  ${(interval[i + 1] + interval[i + 2]) / 2 - 0.001}% {
    width: ${coinSize / 100}${unit};
      box-shadow:
        ${coinSize / 200}${unit} 0 0 var(--side),
        ${coinSize / 100}${unit} 0 0 var(--side),
        ${coinSize / 66.66}${unit} 0 0 var(--side),
        ${coinSize / 50}${unit} 0 0 var(--side),
        ${coinSize / 40}${unit} 0 0 var(--side),
        ${coinSize / 33.33}${unit} 0 0 var(--side),
        ${coinSize / 28.57}${unit} 0 0 var(--side),
        ${coinSize / 25}${unit} 0 0 var(--side),
        ${coinSize / 22.22}${unit} 0 0 var(--side),
        ${coinSize / 20}${unit} 0 0 var(--side),
        ${coinSize / 18.18}${unit} 0 0 var(--side),
        ${coinSize / 16.65}${unit} 0 0 var(--side),
        ${coinSize / 15.37}${unit} 0 0 var(--side),
        ${coinSize / 14.28}${unit} 0 0 var(--side),
        ${coinSize / 13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinSize / -26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: linear;
      background-image: ${headImage};
}

  ${(interval[i + 1] + interval[i + 2]) / 2 + 0.001}% {
    width: ${coinSize / 100}${unit};
      box-shadow:
        ${coinSize / -200}${unit} 0 0 var(--side),
        ${coinSize / -100}${unit} 0 0 var(--side),
        ${coinSize / -66.66}${unit} 0 0 var(--side),
        ${coinSize / -50}${unit} 0 0 var(--side),
        ${coinSize / -40}${unit} 0 0 var(--side),
        ${coinSize / -33.33}${unit} 0 0 var(--side),
        ${coinSize / -28.57}${unit} 0 0 var(--side),
        ${coinSize / -25}${unit} 0 0 var(--side),
        ${coinSize / -22.22}${unit} 0 0 var(--side),
        ${coinSize / -20}${unit} 0 0 var(--side),
        ${coinSize / -18.18}${unit} 0 0 var(--side),
        ${coinSize / -16.65}${unit} 0 0 var(--side),
        ${coinSize / -15.37}${unit} 0 0 var(--side),
        ${coinSize / -14.28}${unit} 0 0 var(--side),
        ${coinSize / -13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinSize / 26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
      background-image: ${tailImage};
}`)

  }
  return output;
}

let css2 = getcss2(interval) //Uses the getcss2 function to generate the CSS keyframes based on the interval array.

//The final CSS keyframe (it doesn't generate properly otherwise.)
let css3 = [`
    
    100% {
    width: ${coinSize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: ${tailImage};
      background-color: var(--faceColor);
}}`]

let css = (css1 + css2 + css3)

/* ONLY ONE OF THE BELOW SHOULD BE OPERATIONAL -- EITHER OVERRIDE STYLESHEET OR WRITE TO <style>
   MAKE SURE THE OTHER IS COMMENTED OUT! */

/* TO OVERRIDE STYLESHEET -- INSERT <script src="timing.js"></script> IN BODY

// Construct the CSSStyleSheet
const stylesheet = new CSSStyleSheet();

// Add some CSS
stylesheet.replaceSync(css1 + css2 + css3)

// Tell the document to adopt your new stylesheet.
document.adoptedStyleSheets = [stylesheet];

*/

//TO WRITE TO <style> -- INSERT <script src="timing.js"></script> IN HEAD (or body I guess)

document.write('<style>' + css + '</style>')
