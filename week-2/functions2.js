//function greet farmer () {
    console.log("Hello, welcome to young4Chicks platform")
}

//greetFarmer(); // we have console.log so don't need to return

//function submitRequest() {
    console.log("Your chick request has been submitted");
    alert("Your chick request has been submitted")
}

//submitRequest();

function calculateTotalCost(quantity, pricePerChick) {
    return quantity*pricePerChick
}

//calculateTotalCost(100,1650);
//calculateTotalCost(70,1650);
//calculateTotalCost(30,1650);

//let total = calculateTotalCost(100,1650)
//console.log(total);

let greetFarmers= (farmerName) => console.log("Hello" + "" + farmer + "welcome to young4Chicks platform");{
// let greetFarmers= function(farmerName){ console.log("Hello" + "" + farmer + "welcome to young4Chicks platform");
}

greetFarmers("Sanyu")
greetFarmers("Peter")
greetFarmers("John")
greetFarmers("Xerxes")

function processTheMoney(callback){
    callback()
}
processTheMoney(function(){
    console.log("collegues, the money is coming")
});
 
function greetFarmer(farmerName) {
    return function() { 
           console.log("Hello" + " " + "welcome to young4Chick platfrom")
    }
}

 greetFarmer("Ashley");   