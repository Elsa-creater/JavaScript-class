let emailPattern;
let phonePattern;
let ninPattern;
let urlPattern;
let farmerNamePattern; //^[A-Za-z]+$/;
//let farmerName = prompt("Enter your name:");
let farmerName = "elizabeth";
console.log(farmerNamePattern.test(farmerName)); //true if valid, false if invalid

letninPattern = /^[A-Za-z0-9]{14}$/;
console.log(ninPattern.test("12345678901234")); //true if valid, false if invalid
letemailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,$/;
