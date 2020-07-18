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
    let interval = 1;
    for (let i = 0; i < rows.length; i++) {
        //console.log(data[0][i]);
        setTimeout(() => {
            data[0][i].classList.add('horizontalselection');
        }, 2000 * interval);
        setTimeout(removeClass, 2000 * (interval + 1));
        interval++;
    }
}

function removeClass() {
    console.log('hello');
    for (let i = 0; i < rows.length; i++) {
        data[0][i].classList.remove('horizontalselection');

    }
}