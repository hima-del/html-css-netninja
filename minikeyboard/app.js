let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let data = [row1, row2, row3];
let letters = document.querySelectorAll('.letter');
let display = document.querySelectorAll('.screen');
const tap = document.querySelector('.tap');
let row;
let index = 0;
let state = "initial";
tap.addEventListener('click', manageClick);
//console.log(data[0].classList);

function manageClick() {
    if (state === 'initial') {
        state = 'row';
        rowRotation();
    }
}

function rowRotation(direction = "down") {
    if (direction === "down") {
        rowSelector = setInterval(() => {
            switch (index) {
                case 0:
                    {
                        data[0].classList.add('horizontalselection');
                        data[2].classList.remove('horizontalselection');
                        index = index + 1; //1
                        break;
                    }
                case 1:
                    {
                        data[1].classList.add('horizontalselection');
                        data[0].classList.remove('horizontalselection');
                        index = index + 1; //2
                        break;
                    }
                case 2:
                    {
                        data[2].classList.add('horizontalselection');
                        data[1].classList.remove('horizontalselection');
                        index = 0; //0
                        break;
                    }
            }
            // row = index - 1;
        }, 1000);
    } else {
        rowSelector = setInterval(() => {
            switch (index) {
                case 0:
                    {
                        data[2].classList.add('horizontalselection');
                        data[0].classList.remove('horizontalselection');
                        index = data.length - 1; //2
                        break;
                    }
                case 1:
                    {
                        data[1].classList.add('horizontalselection');
                        data[2].classList.remove('horizontalselection');
                        index = index - 1; //1
                        break;
                    }
                case 2:
                    {
                        data[0].classList.add('horizontalselection');
                        data[1].classList.remove('horizontalselection');
                        index = index - 1; //0
                        break;
                    }
            }
        }, 1000);
    }
}