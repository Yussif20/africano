//check if there is local storage's color option
let mainColors = localStorage.getItem(`color_option`);

if (mainColors !== null) {
  document.documentElement.style.setProperty(`--main-color`, mainColors);

  //remove active class from colors list item
  document.querySelectorAll(`.colors-list li`).forEach((element) => {
    element.classList.remove(`active`);
    //add active class on element with dataset === local storage
    if (element.dataset.color === mainColors) {
      element.classList.add(`active`);
    }
  });
}

// setting box toggle for spin and open classes
document.querySelector(`.toggle-settings .fa-gear`).onclick = function () {
  this.classList.toggle(`fa-spin`);
  document.querySelector(`.settings-box`).classList.toggle(`open`);
};
// change the root color
const colorsLi = document.querySelectorAll(`.colors-list li`);

colorsLi.forEach((li) => {
  li.addEventListener(`click`, (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      `--main-color`,
      e.target.dataset.color
    );

    //set color on local storage
    localStorage.setItem(`color_option`, e.target.dataset.color);

    //remove active class from colors and add it to the current color
    e.target.parentElement.querySelectorAll(`.active`).forEach((element) => {
      element.classList.remove(`active`);
    });
    e.target.classList.add(`active`);
  });
});
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
}, 7000);
