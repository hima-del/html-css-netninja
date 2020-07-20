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
    let sample = data[prevIndex].children[prevColIndex].textContent;
    dispaly.innerHTML += sample;
}
// const row1 = document.getElementById('one');
// const row2 = document.getElementById('two');
// const row3 = document.getElementById('three');
// const row4 = document.getElementById('four');
// const row5 = document.getElementById('five');
// const row6 = document.getElementById('six');
// const letters = document.querySelectorAll('.letter');
// const tap = document.querySelector('.tap');
// const container = document.querySelector('.container');
// let dispaly = document.querySelector('.screen');
// let state = 'initial';
// let rowSelection;
// let columnSelection;
// tap.addEventListener('click', handleClick);
// let data = [row1, row2, row3, row4, row5, row6];
// let currentRow = 0;
// let prevRow = data.length - 1;
// let currentColumn = 0;
// let prevColumn = 11;
// let rowPosition;

// function handleClick() {
//     if (state === 'initial') {
//         state = 'row';
//         rowRotation();
//     } else if (state === 'row') {
//         state = 'column';
//         clearInterval(rowSelection);
//         columnRotation();
//     } else {
//         getValue();
//     }
// }


// function rowRotation(currentLine, direction = 'down') {
//         if (direction === 'down') {
//         rowSelection = setInterval(() => {
//             data[currentRow].classList.add('horizontalselection');
//             data[prevRow].classList.remove('horizontalselection');
//             prevRow = currentRow;
//             currentRow = (currentRow + 1) % 6;
//         }, 1000);
//         rowPosition = currentRow;
//     } else {
//         state = 'row';
//         let prevLine;
//         rowSelection = setInterval(() => {
//             if (currentLine === 0) {
//                 currentLine = currentLine + data.length;
//                 prevLine = data.length - 1;
//                 data[currentLine % 6].classList.remove('horizontalselection');
//                 data[prevLine].classList.add('horizontalselection');
//                 currentLine = prevLine;
//             } else {
//                 prevLine = currentLine - 1;
//                 data[currentLine % 6].classList.remove('horizontalselection');
//                 data[prevLine].classList.add('horizontalselection');
//                 currentLine = prevLine;
//                 rowPosition = currentLine;
//             }
//         }, 1000);

//     }
// }

// function columnRotation(rowPosition) {
//     // console.log(rowPosition);
//     columnSelection = setInterval(() => {
//         data[rowPosition].children[currentColumn].classList.add('elementselection');
//         data[rowPosition].children[prevColumn].classList.remove('elementselection');
//         prevColumn = currentColumn;
//         currentColumn = (currentColumn + 1) % 12;
//     }, 1000);
// }


//     if (data[prevRow].children[prevColumn].classList.contains('up')) {
//         clearInterval(columnSelection);
//         rowRotation(prevRow, 'up');
//     }
// }