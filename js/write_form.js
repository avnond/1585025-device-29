const writeLink = document.querySelector('.write-to-us');
const writePopup = document.querySelector('.modal-write');
const writeClose = writePopup.querySelector('.modal-close');
const writeForm = writePopup.querySelector('.write-form');
const writeName = writePopup.querySelector('.your-name-input');
const writeEmail = writePopup.querySelector('.your-email-input');
const writeLetter = writePopup.querySelector('.your-letter-input');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    if (storage) {
        writeName.value = storage;
        writeEmail.focus();
    } else {
    writeName.focus();
    }
  });

  
writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writePopup.classList.remove("modal-error");
  });

writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value){
        evt.preventDefault();
        writePopup.classList.add("modal-error");        
        writePopup.offsetWidth = writePopup.offsetWidth;
        writePopup.classList.add("modal-error");  
    } else{
        if(isStorageSupport){
            localStorage.setItem('name', writeName.value);
        }
        
    }    
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writePopup.classList.remove("modal-show");
      }
    }
});
  