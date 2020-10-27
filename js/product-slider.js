const controlOne = document.querySelector('.slider-control-1');
const sliderOne = document.querySelector('.product-slider-item:nth-of-type(1)');

const controlTwo = document.querySelector('.slider-control-2');
const sliderTwo = document.querySelector('.product-slider-item:nth-of-type(2)');

const controlThree = document.querySelector('.slider-control-3');
const sliderThree = document.querySelector('.product-slider-item:nth-of-type(3)');


controlOne.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderTwo.classList.remove("slide-current");
    sliderThree.classList.remove("slide-current");

    sliderOne.classList.add("slide-current");   

    controlTwo.classList.remove("current");
    controlThree.classList.remove("current");
    controlOne.classList.add("current");
  });

controlTwo.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderOne.classList.remove("slide-current");
    sliderThree.classList.remove("slide-current");

    sliderTwo.classList.add("slide-current");   

    controlOne.classList.remove("current");
    controlThree.classList.remove("current");
    controlTwo.classList.add("current");
  });

controlThree.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderOne.classList.remove("slide-current");
    sliderTwo.classList.remove("slide-current");

    sliderThree.classList.add("slide-current");   

    controlOne.classList.remove("current");
    controlTwo.classList.remove("current");
    controlThree.classList.add("current");
  });