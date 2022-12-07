let Rand1 = Math.floor(Math.random() * 6) + 1;
let P1Pic = "./img/dice" + Rand1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute('src', P1Pic);

let Rand2 = Math.floor(Math.random() * 6) +1;
let P2Pic = "./img/dice" + Rand2 + ".png";
let image2 =  document.querySelectorAll("img")[1];
image2.setAttribute('src', P2Pic);

//  function refresh() {
//     window.location.relaod();
// };