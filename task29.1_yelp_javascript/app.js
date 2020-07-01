document.querySelector('.e').addevenetlistener('DOMContentLoaded', loadData);
//load customer
function loadData(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            //console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            const output = `
            ${data.review} reviews
            `;
            document.querySelector('.e').innerHTML = output;
        }
    }
    xhr.send();
}
//load customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '60_customers.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer) {
                output += `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}