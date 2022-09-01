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
//////////////////////////////////////////////////////////////////////////////
////////////// the slider /////////////////////
///////////////     Functions ///////////////

const nextSilde = () => {
  if (nextButton.classList.contains(`disabled`)) {
    return false;
  } else {
    currnetSlide++;
    checker();
  }
};

const prevSilde = () => {
  if (prevButton.classList.contains(`disabled`)) {
    return false;
  } else {
    currnetSlide--;
    checker();
  }
};

const checker = () => {
  // set the slide number string
  // slideNumberElement.textContent =
  //   `Slide #` + currnetSlide + ` of ` + slidesCount;

  //remove all active classes
  removeAllActive();
  //adding the active class to the current slide
  sliderImages[currnetSlide - 1].classList.add(`active`);

  // set active classs on current pagination item
  paginationCreatedUl.children[currnetSlide - 1].classList.add(`active`);

  //the disabled class
  if (currnetSlide == 1) {
    prevButton.classList.add(`disabled`);
  } else {
    prevButton.classList.remove(`disabled`);
  }
  if (currnetSlide == slidesCount) {
    nextButton.classList.add(`disabled`);
  } else {
    nextButton.classList.remove(`disabled`);
  }
};

const removeAllActive = () => {
  //remove active class from all images
  sliderImages.forEach((img) => {
    img.classList.remove(`active`);
  });
  //remove active class from all bullets
  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove(`active`);
  });
};
/////////////////////////////////////////  Selecting Elements   ///////////////////////////////////////
// get slider items, Array.from()[ES6 feature]
var sliderImages = Array.from(
  document.querySelectorAll(`.slider-container img`)
);

// get number of slides
let slidesCount = sliderImages.length;

// set currnet slide
let currnetSlide = 1;

// slide number element
let slideNumberElement = document.getElementById(`slide-number`);

// previous and next elements
let nextButton = document.getElementById(`next`);
let prevButton = document.getElementById(`prev`);

// Create the main ul element
let paginationElement = document.createElement(`ul`);

// Set attribute to the created ul
paginationElement.setAttribute(`id`, `pagination-ul`);

// Create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // create the list item
  let paginationItem = document.createElement(`li`);

  // Set attribute to custome li
  paginationItem.setAttribute(`data-index`, i);

  //set item content
  paginationItem.appendChild(document.createTextNode(i));

  //append items to the main ul list
  paginationElement.appendChild(paginationItem);
}

//Add the created ul to the page
document.getElementById(`indicators`).appendChild(paginationElement);

//get the created ul
let paginationCreatedUl = document.getElementById(`pagination-ul`);

// get pagination items, Array.from()[ES6 feature]
var paginationsBullets = Array.from(
  document.querySelectorAll(`#pagination-ul li`)
);
// loop through all bullets items
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currnetSlide = parseInt(this.getAttribute(`data-index`));
    checker();
  };
}

// Trigger the cheacker function
checker();
///////////////////////////////////////    Handling Events   //////////////////////////////////////////////
// Handling clicks on next and previous buttons
nextButton.onclick = nextSilde;
prevButton.onclick = prevSilde;
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
