//The Document Object Model (Dom);
//the document stands for your entire html and css
//Tree like structure with objects
// all HTML and CSS turned into Javascript
//console.log(document);
    //console.log(window);

//     //DOM methods
//  //console.log(document.body);
//  getElementById(); //selects an element by Id
//  getElementsByClassName(); // selects an element by class
//  getElementByTagName(); // selects an element by html tag i.e p, h1, h2 etc
//  querySelector(); //selects the first matching css class can be ussed for id's and html tags
//  querySelectorAll(); //selects all matching elements

// const allTitles = document.getElementsByTagName("h1");
// console.log(allTitles.length);
// for (let x = 0; x < allTitles.length; x++) {
//     //console.log(allTitles[x];
    
// }

//const firstTitle = document.getElementById('heading 1')
//const firstTitle = document.querySelector('.title')
//const firstTitle = document.querySelector('#title')
//const firstTitle = document.querySelector('h1')

const allTitles = document.querySelectorAll('h1');
allTitles[3].className = 'title';
allTitles[3].textContext = 'This is the Fourth heading ';
allTitles[3].style.color = 'blue';
//allTitles.setAttribute();
//allTitles.remove();




    // Create/get 
    // R
    // U
    // D