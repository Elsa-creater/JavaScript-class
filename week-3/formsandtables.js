const form = document.getElementById('chickForm')

const table = document.getElementById('requestTable')

//form handling
form.addEventListener('submit', function(event) {
   event.preventDefault() 

const name = document.getElementById('farmerName').value.trim();
const age = Number(document.getElementById('age').value);
const quantity = Number(document.getElementById('quantity').value);
const type= document.getElementById('chickType').value;
const errormessage = document.getElementById('errormessage');
errormessage.textContent=""
if (name || !type) {
    errormessage.textContent = "please fill out all the fields"
    return;
}
if (age<20 || age>30) {
    errormessage.textContent= 'age must be between 20 and 30'
    return;
}
if (quantity<100 || quantity>500) {
    errormessage.textContent = 'quantity should be between 100 and 50'
    return;
}
addToTable(name, age, type, quanitity);
form.reset()
});

//table handling
function addToTable(name, age, type, quanity){
    const table = document.getElementById('requestTable').getElementsByTagName('tbody')[0];

    let Row = table.insertRow();
    let cell1 = Row1.insertCell(0);
    let cell2 = Row1.insertCell(1);
    let cell3 = Row1.insertCell(2);
    cell1.textcontent = Name;
    cell2.textcontent = age;
    cell3.textcontent = Type;
    cell3.textcontent = Quantity;
    
}