let table = document.querySelector('.product-list');

table.onmouseover = function(event) {
    let target = event.target.closest('li');
    if (!target) return;
    let elem = target.querySelector('.product-item-overlay');
    elem.classList.remove('visually-hidden');
}

table.onmouseout = function(event) {
    let target = event.target.closest('li');
    if (!target) return;
    let elem = target.querySelector('.product-item-overlay');
    elem.classList.add('visually-hidden');
}
