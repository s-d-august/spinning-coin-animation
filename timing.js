/* This code generates CSS keyframes for a given size of coin and given intervals of rotation. */


let coinsize = [10];
/* Set unit (i.e. px, em, in)*/
let unit = ['rem'];

let interval = [0, 12.5, 21.5, 30, 38, 45.5, 52.5, 59, 65, 70.5, 75.5, 80, 84, 87.5, 90.5, 93, 95, 96, 97, 97.5, 98, 98.5, 99, 99.5, 100];

for (let i = 0; i < interval.length; i = i + 2) {
    document.write(`
    
    ${interval[i]}% {
    width: ${coinsize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: var(--tail);
      background-color: var(--face);
}<br><br>

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
}<br><br>

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
}<br><br>

  ${interval[i + 1]}% {
    width: ${coinsize}${unit};
      box-shadow:
        0 0 0 var(--side-dark);
      animation-timing-function: ease-in;
      background-image: var(--head);
      background-color: var(--face);
}<br><br>

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
}<br><br>

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
}<br><br>`

    )
}