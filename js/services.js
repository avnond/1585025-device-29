const switcherDelivery = document.querySelector('button.switcher-1');
const sliderDelivery = document.querySelector('.slider-1');

const switcherWarranty = document.querySelector('button.switcher-2');
const sliderWarranty = document.querySelector('.slider-2');

const switcherCredit = document.querySelector('button.switcher-3');
const sliderCredit = document.querySelector('.slider-3');

switcherWarranty.addEventListener("click", function (evt) {
    evt.preventDefault();  
    sliderDelivery.classList.add("visually-hidden");
    sliderCredit.classList.add("visually-hidden");
    sliderWarranty.classList.remove("visually-hidden");

    switcherDelivery.classList.remove("switcher-current");
    switcherDelivery.classList.add("switcher-inactive");
    switcherCredit.classList.remove("switcher-current");
    switcherCredit.classList.add("switcher-inactive");

    switcherWarranty.classList.remove("switcher-inactive");
    switcherWarranty.classList.add("switcher-current");
  });

  switcherDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();  
    sliderWarranty.classList.add("visually-hidden");
    sliderCredit.classList.add("visually-hidden");
    sliderDelivery.classList.remove("visually-hidden");

    switcherWarranty.classList.remove("switcher-current");
    switcherWarranty.classList.add("switcher-inactive");
    switcherCredit.classList.remove("switcher-current");
    switcherCredit.classList.add("switcher-inactive");

    switcherDelivery.classList.remove("switcher-inactive");
    switcherDelivery.classList.add("switcher-current");
  });

  switcherCredit.addEventListener("click", function (evt) {
    evt.preventDefault();  
    sliderWarranty.classList.add("visually-hidden");
    sliderDelivery.classList.add("visually-hidden");
    sliderCredit.classList.remove("visually-hidden");

    switcherWarranty.classList.remove("switcher-current");
    switcherWarranty.classList.add("switcher-inactive");
    switcherDelivery.classList.remove("switcher-current");
    switcherDelivery.classList.add("switcher-inactive");

    switcherCredit.classList.remove("switcher-inactive");
    switcherCredit.classList.add("switcher-current");
  });