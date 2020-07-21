const row1 = document.getElementById('one');
const row2 = document.getElementById('two');
const row3 = document.getElementById('three');
const row4 = document.getElementById('four');
const row5 = document.getElementById('five');
const row6 = document.getElementById('six');
const letters = document.querySelectorAll('.letter');
const tap = document.querySelector('.tap');
const container = document.querySelector('.container');
let dispaly = document.querySelector('.screen');
state = 'initial';
tap.addEventListener('click', handleClick);
let data = [row1, row2, row3, row4, row5, row6];
let index = 0;
let colIndex = 0;
let row;
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

function rowRotation(direction = 'down') {
    if (direction === 'down') {
        rowSelector = setInterval(() => {
            switch (index) {
                case 0:
                    {
                        data[0].classList.add('horizontalselection');
                        data[5].classList.remove('horizontalselection');
                        index = index + 1;
                        break;
                    }
                case 1:
                    {
                        data[1].classList.add('horizontalselection');
                        data[0].classList.remove('horizontalselection');
                        index = index + 1;
                        break;
                    }
                case 2:
                    {
                        data[2].classList.add('horizontalselection');
                        data[1].classList.remove('horizontalselection');
                        index = index + 1;
                        break;
                    }
                case 3:
                    {
                        data[3].classList.add('horizontalselection');
                        data[2].classList.remove('horizontalselection');
                        index = index + 1;
                        break;
                    }
                case 4:
                    {
                        data[4].classList.add('horizontalselection');
                        data[3].classList.remove('horizontalselection');
                        index = index + 1;
                        break;
                    }
                case 5:
                    {
                        data[5].classList.add('horizontalselection');
                        data[4].classList.remove('horizontalselection');
                        index = 0;
                        break;
                    }
            }
            row = index - 1;
        }, 1000);
    } else {
        rowSelector = setInterval(() => {
            switch (index) {
                case 0:
                    {
                        data[5].classList.add('horizontalselection');
                        data[0].classList.remove('horizontalselection');
                        index = data.length - 1;
                        break;
                    }
                case 1:
                    {
                        data[0].classList.add('horizontalselection');
                        data[1].classList.remove('horizontalselection');
                        index = index - 1;
                        break;
                    }
                case 2:
                    {
                        data[1].classList.add('horizontalselection');
                        data[2].classList.remove('horizontalselection');
                        index = index - 1;
                        break;
                    }
                case 3:
                    {
                        data[2].classList.add('horizontalselection');
                        data[3].classList.remove('horizontalselection');
                        index = index - 1;
                        break;
                    }
                case 4:
                    {
                        data[3].classList.add('horizontalselection');
                        data[4].classList.remove('horizontalselection');
                        index = index - 1;
                        break;
                    }
                case 5:
                    {
                        data[4].classList.add('horizontalselection');
                        data[5].classList.remove('horizontalselection');
                        index = index - 1;
                        break;
                    }
            }
            row = index;
        }, 1000);
    }
}

function columnRotation() {
    columnselector = setInterval(() => {
        console.log(row, colIndex);
        data[row === -1 ? 5 : row].children[colIndex].classList.add('elementselection');
        data[row === -1 ? 5 : row].children[prevColIndex].classList.remove('elementselection');
        prevColIndex = colIndex;
        colIndex = (colIndex + 1) % 12;
    }, 1000);
}

function getValue() {
    if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('up')) {
        data[row === -1 ? 5 : row].children[prevColIndex].classList.remove('elementselection');
        rowRotation('up');
        state = 'row';
        clearInterval(columnselector);
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('down')) {
        data[row === -1 ? 5 : row].children[prevColIndex].classList.remove('elementselection');
        rowRotation('down');
        state = 'row';
        clearInterval(columnselector);
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('letter')) {
        let sample = data[row === -1 ? 5 : row].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('number')) {
        let sample = data[row === -1 ? 5 : row].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('special')) {
        let sample = data[row === -1 ? 5 : row].children[prevColIndex].textContent;
        dispaly.innerHTML += sample;
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('enter')) {
        dispaly.innerHTML += '<br>';

    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('space')) {
        dispaly.innerHTML += ' ';
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('back')) {
        let text = dispaly.innerHTML;
        dispaly.innerHTML = text.slice(0, -1);
    } else if (data[row === -1 ? 5 : row].children[prevColIndex].classList.contains('case')) {

        if (status !== "smalletter") {
            for (let i = 0; i < letters.length; i++) {
                let text = letters[i].textContent.toLowerCase();
                letters[i].innerHTML = text;
                status = "smalletter";
            }

        } else {
            for (let i = 0; i < letters.length; i++) {
                let text = letters[i].textContent.toUpperCase();
                letters[i].innerHTML = text;
                status = "capital"
            }
        }

    }

}