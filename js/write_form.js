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
  });

writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value || !writeLetter.value){
        evt.preventDefault();
    } else{
        if(isStorageSupport){
            localStorage.setItem('name', writeName.value);
        }
        
    }    
  });

  