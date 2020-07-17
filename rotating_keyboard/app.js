const rows = document.querySelectorAll('.row');
const letters = document.querySelectorAll('.letter');
const tap = document.querySelector('.tap');
const container = document.querySelector('.container');

tap.addEventListener('click', rowRotation);
let data = [];
data.push(rows);

function rowRotation() {

    addClass();
}

function addClass() {
    for (let i = 0; i < rows.length; i++) {
        data[0][i].classList.add('horizontalselection');
        setTimeout(removeClass, 2000);
    }

}

function removeClass() {
    for (let i = 0; i < rows.length; i++) {
        data[0][i].classList.remove('horizontalselection');
    }
}