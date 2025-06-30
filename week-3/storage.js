//browser storage usually for cookies etc limit of 5mbs
//local Storage- stores data until you clean it manually

localStorage.setItem("farmerName",'John',""); //set item
localStorage.getItem("name"); // get item
localStorage.clear(); //clear all items
localStorage.removeItem(); // remove specific item

let user ={
    name:"Jane Smith",
    age: 30,
}
localStorage.setItem('user', JSON.stringify(user));
let data = JSON.parse(localStorage.getItem('user'));
data.name;

//session Storage - session storage stores data for the duration of the page session for only 1 tab
sessionStorage.setItem('session name', "john");
sessionStorage.getItem('sessioin name');
sessionStorage.clear();
sessionStorage.removeItem('session Name');
//cookies
//indexed Database

