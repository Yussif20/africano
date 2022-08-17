// slecting landing page
let landingPage = document.querySelector(`.landing-page`);

//get array of images
let imgsArray = [
  `01.jpg`,
  `02.jpg`,
  `03.jpg`,
  `04.jpg`,
  `05.jpg`,
  `06.jpg`,
  `07.jpg`,
  `08.jpg`,
  `09.jpg`,
  `10.jpg`,
];

setInterval(() => {
  //get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  //change image url
  landingPage.style.backgroundImage =
    `url("../imgs/` + imgsArray[randomNumber] + `")`;
}, 2000);
