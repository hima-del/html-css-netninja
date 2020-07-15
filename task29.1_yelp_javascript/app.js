//load customer
function loadData(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            //console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            // console.log(data[0].review);

            data.forEach((item) => {
                let spanId = `review${item.id}`
                document.getElementById(spanId).textContent = `${item.review} reviews`;


            });
            for (i = 0; i < data.length; i++) {

                addStar(data[i].id, parseFloat(data[i].stars));
                console.log(data[i].id, parseFloat(data[i].stars));
            }
        }
    }
    xhr.send();
}
loadData();
document.getElementById('one').addEventListener('click', rotateDiv);
document.getElementById('two').addEventListener('click', rotateDiv);
document.getElementById('three').addEventListener('click', rotateDiv);
let arrayOrder = [1, 2, 3];
//first click:231
//312
//123
function rotateDiv() {
    //console.log('1233');
    let num = arrayOrder.shift();
    console.log(num);
    arrayOrder.push(num);
    console.log(arrayOrder);
    document.getElementById('one').style.order = arrayOrder[0];
    document.getElementById('two').style.order = arrayOrder[1];
    document.getElementById('three').style.order = arrayOrder[2];

}

function addStar(id, star) {
    const starBox = document.getElementById(id).children;
    console.log(starBox);
    if (Number.isInteger(star) === true) {
        for (let i = 0; i < star; i++) {
            console.log(starBox[i]);
            starBox[i].classList.remove('unchecked');
            starBox[i].classList.add('checked');
        }
    } else {
        for (j = 0; j < star; j++) {
            starBox[j].classList.remove('unchecked');
            starBox[j].classList.add('checked');
        }
        starBox[Math.floor(star)].classList.remove('unchecked');
        starBox[Math.floor(star)].classList.add('fa-star-half-o');
    }
}