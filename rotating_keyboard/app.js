const row1 = document.getElementById('one');
const row2 = document.getElementById('two');
const row3 = document.getElementById('three');
const row4 = document.getElementById('four');
const row5 = document.getElementById('five');
const row6 = document.getElementById('six');
const letters = document.querySelectorAll('.letter');
console.log(letters[1].textContent);
console.log(letters.length);
const tap = document.querySelector('.tap');
const container = document.querySelector('.container');
let dispaly = document.querySelector('.screen');
state = 'initial';
let x;
let status = "smalletter";
tap.addEventListener('click', handleClick);
let data = [row1, row2, row3, row4, row5, row6];
let index = 0;
let prevIndex = data.length - 1;
let colIndex = 0;
let prevColIndex = 11;

function handleClick() {
    if (state === 'initial') {
        state = 'row';
        rowRotation();
    } else if (state === 'row') {
        state = 'column';
        clearInterval(rowSelector);
        columnRotation();
    } else {
        getValue();
    }
}

function rowRotation() {
    rowSelector = setInterval(() => {
        data[index].classList.add('horizontalselection');
        data[prevIndex].classList.remove('horizontalselection');
        prevIndex = index;
        index = (index + 1) % 6;
    }, 1000);
}

function columnRotation() {
    columnselector = setInterval(() => {
        data[prevIndex].children[colIndex].classList.add('elementselection');
        data[prevIndex].children[prevColIndex].classList.remove('elementselection');
        prevColIndex = colIndex;
        colIndex = (colIndex + 1) % 12;
    }, 1000);
}

function getValue() {

    if (data[prevIndex].children[prevColIndex].classList.contains('letter')) {
        let sample = data[prevIndex].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    }
    if (data[prevIndex].children[prevColIndex].classList.contains('number')) {
        let sample = data[prevIndex].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    }
    if (data[prevIndex].children[prevColIndex].classList.contains('special')) {
        let sample = data[prevIndex].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    }
    if (data[prevIndex].children[prevColIndex].classList.contains('enter')) {
        dispaly.innerHTML += '<br>';

    } else if (data[prevIndex].children[prevColIndex].classList.contains('space')) {
        dispaly.innerHTML += ' ';
    } else if (data[prevIndex].children[prevColIndex].classList.contains('back')) {
        let text = dispaly.innerHTML;
        dispaly.innerHTML = text.slice(0, -1);
    } else if (data[prevIndex].children[prevColIndex].classList.contains('case')) {

        if (status !== "smalletter")
            for (let i = 0; i < letters.length; i++) {
                let text = letters[i].textContent.toLowerCase();
                letters[i].innerHTML = text;
                status = "smalletter";

            } else {
                for (let i = 0; i < letters.length; i++) {
                    let text = letters[i].textContent.toUpperCase();
                    letters[i].innerHTML = text;
                    status = "capital"
                }
            }
    }
}