let interval = [0, 12.5, 21.5, 30, 38, 45.5, 52.5, 59, 65, 70.5, 75.5, 80, 84, 87.5, 90.5, 93, 95, 96, 97, 97.5, 98, 98.5, 99, 99.5, 100];
for (let i = 0; i < interval.length; i = i + 2) {
  document.write(`${interval[i]}% {
                     @include face($face: var(--tail));
                 }<br>

                 ${(interval[i] + interval[i + 1]) / 2 - 0.001}% {
                     @include edgein($face: var(--tail));
                 }<br>

                 ${(interval[i] + interval[i + 1]) / 2 + 0.001}% {
                     @include edgeout;
                 }<br>

                 ${interval[i + 1]}% {
                     @include face;
                 }<br>

                 ${(interval[i + 1] + interval[i + 2]) / 2 - 0.001}% {
                     @include edgein;
                 }<br>

                 ${(interval[i + 1] + interval[i + 2]) / 2 + 0.001}% {
                     @include edgeout($face: var(--tail));
                 }<br>`

  )
}