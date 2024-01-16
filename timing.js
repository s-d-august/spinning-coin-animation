/* This code allows for the size and rotation of the coin to be changed dynamically by using CSSStylesheet. */

let coinsize = [10]; // number only

let unit = ['rem']; // i.e. px, in, rem

let interval = [0, 12.5, 21.5, 30, 38, 45.5, 52.5, 59, 65, 70.5, 75.5, 80, 84, 87.5, 90.5, 93, 95, 96, 97, 97.5, 98, 98.5, 99, 99.5, 100];
// Timing intervals for each rotation, based on CSS animation keyframes

// Everything up to the start of the keyframes, which are generated on a loop
let css1 = [`


:root {
  --face: #a0a0a0;
  --lowlight: #111;
  --side: #6F6F6F;
  --side-dark: #0e0e0e;
  --head: url("crown.png");
  --tail: url("knife.png");
  --coinsize: ${coinsize}${unit};
}

html {
  height: 100%;
}

body {
  height: 100%;
  background-color: #f0efff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coin {
  height: ${coinsize}${unit};
  width: ${coinsize}${unit};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.coin::before {
  content: "";
  display: block;
  position: relative;
  height: ${coinsize}${unit};
  width: ${coinsize}${unit};
  border-radius: 50%;
  background-color: var(--face);
  animation: spin 15s alternate infinite;
  background-image: var(--coin-face);
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
    width: ${coinsize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: var(--tail);
      background-color: var(--face);
}

    ${(interval[i] + interval[i + 1]) / 2 - 0.001}% {
    width: ${coinsize / 100}${unit};
      box-shadow:
        ${coinsize / 200}${unit} 0 0 var(--side),
        ${coinsize / 100}${unit} 0 0 var(--side),
        ${coinsize / 66.66}${unit} 0 0 var(--side),
        ${coinsize / 50}${unit} 0 0 var(--side),
        ${coinsize / 40}${unit} 0 0 var(--side),
        ${coinsize / 33.33}${unit} 0 0 var(--side),
        ${coinsize / 28.57}${unit} 0 0 var(--side),
        ${coinsize / 25}${unit} 0 0 var(--side),
        ${coinsize / 22.22}${unit} 0 0 var(--side),
        ${coinsize / 20}${unit} 0 0 var(--side),
        ${coinsize / 18.18}${unit} 0 0 var(--side),
        ${coinsize / 16.65}${unit} 0 0 var(--side),
        ${coinsize / 15.37}${unit} 0 0 var(--side),
        ${coinsize / 14.28}${unit} 0 0 var(--side),
        ${coinsize / 13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinsize / -26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: linear;
      background-image: var(--tail);
}

    ${(interval[i] + interval[i + 1]) / 2 + 0.001}% {
    width: ${coinsize / 100}${unit};
      box-shadow:
        ${coinsize / -200}${unit} 0 0 var(--side),
        ${coinsize / -100}${unit} 0 0 var(--side),
        ${coinsize / -66.66}${unit} 0 0 var(--side),
        ${coinsize / -50}${unit} 0 0 var(--side),
        ${coinsize / -40}${unit} 0 0 var(--side),
        ${coinsize / -33.33}${unit} 0 0 var(--side),
        ${coinsize / -28.57}${unit} 0 0 var(--side),
        ${coinsize / -25}${unit} 0 0 var(--side),
        ${coinsize / -22.22}${unit} 0 0 var(--side),
        ${coinsize / -20}${unit} 0 0 var(--side),
        ${coinsize / -18.18}${unit} 0 0 var(--side),
        ${coinsize / -16.65}${unit} 0 0 var(--side),
        ${coinsize / -15.37}${unit} 0 0 var(--side),
        ${coinsize / -14.28}${unit} 0 0 var(--side),
        ${coinsize / -13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinsize / 26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
      background-image: var(--head);
}

  ${interval[i + 1]}% {
    width: ${coinsize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: var(--head);
      background-color: var(--face);
}

  ${(interval[i + 1] + interval[i + 2]) / 2 - 0.001}% {
    width: ${coinsize / 100}${unit};
      box-shadow:
        ${coinsize / 200}${unit} 0 0 var(--side),
        ${coinsize / 100}${unit} 0 0 var(--side),
        ${coinsize / 66.66}${unit} 0 0 var(--side),
        ${coinsize / 50}${unit} 0 0 var(--side),
        ${coinsize / 40}${unit} 0 0 var(--side),
        ${coinsize / 33.33}${unit} 0 0 var(--side),
        ${coinsize / 28.57}${unit} 0 0 var(--side),
        ${coinsize / 25}${unit} 0 0 var(--side),
        ${coinsize / 22.22}${unit} 0 0 var(--side),
        ${coinsize / 20}${unit} 0 0 var(--side),
        ${coinsize / 18.18}${unit} 0 0 var(--side),
        ${coinsize / 16.65}${unit} 0 0 var(--side),
        ${coinsize / 15.37}${unit} 0 0 var(--side),
        ${coinsize / 14.28}${unit} 0 0 var(--side),
        ${coinsize / 13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinsize / -26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: linear;
      background-image: var(--head);
}

  ${(interval[i + 1] + interval[i + 2]) / 2 + 0.001}% {
    width: ${coinsize / 100}${unit};
      box-shadow:
        ${coinsize / -200}${unit} 0 0 var(--side),
        ${coinsize / -100}${unit} 0 0 var(--side),
        ${coinsize / -66.66}${unit} 0 0 var(--side),
        ${coinsize / -50}${unit} 0 0 var(--side),
        ${coinsize / -40}${unit} 0 0 var(--side),
        ${coinsize / -33.33}${unit} 0 0 var(--side),
        ${coinsize / -28.57}${unit} 0 0 var(--side),
        ${coinsize / -25}${unit} 0 0 var(--side),
        ${coinsize / -22.22}${unit} 0 0 var(--side),
        ${coinsize / -20}${unit} 0 0 var(--side),
        ${coinsize / -18.18}${unit} 0 0 var(--side),
        ${coinsize / -16.65}${unit} 0 0 var(--side),
        ${coinsize / -15.37}${unit} 0 0 var(--side),
        ${coinsize / -14.28}${unit} 0 0 var(--side),
        ${coinsize / -13.33}${unit} 0 0 var(--side);
      transform: translateX(${coinsize / 26.66}${unit});
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
      background-image: var(--tail);
}`)

  }
  return output;
}

let css2 = getcss2(interval) //Uses the getcss2 function to generate the CSS keyframes.

//The final CSS keyframe (it doesn't generate properly otherwise.)
let css3 = [`
    
    100% {
    width: ${coinsize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: var(--tail);
      background-color: var(--face);
}}`]



// Construct the CSSStyleSheet
const stylesheet = new CSSStyleSheet();

// Add some CSS
stylesheet.replaceSync(css1 + css2 + css3)

// Tell the document to adopt your new stylesheet.
document.adoptedStyleSheets = [stylesheet];


