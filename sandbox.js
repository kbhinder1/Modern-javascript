let age = 25;
let year = 2019;

console.log(age,year);

age = 40
console.log(age);

const points = 100
console.log(points);

//var score = 75;
//console.log(score);

// strings
console.log('hello, world');

let email = 'asdf@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName +' '+ lastName;
console.log('fullName');

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase())
let outcome0 = fullName.toLowerCase();
console.log(outcome0, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods
//let outcome = email.lastIndexOf('n');
//let outcome = email.slice(0,10);
//let outcome = email.substr(4,10)
//let outcome = email.replace('m','w');

//let outcome = email.replace('n','w');
//console.log(outcome);

//NUMBERS
let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operators +,-,*,/,**,%

//console.log(10 / 2);
//let outcome = radius % 3;
//let outcome = pi * radius**2
// order of operation - B I D M A S
let outcome = 5* (10-3)**2;
console.log(outcome);

//let likes = 10;

//likes = likes + 1;
//likes++;
//likes += 10;
//likes -= 5;
//likes *=2;
//likes /= 2;
//console.log(likes);

//let sentence = 'the blog has' + likes + 'likes';
//console.log(sentence);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way
//let sentence1 = "The blog called" +  ' ' + title  + 'by'  +  ' ' + author +'has' +  ' ' + likes  +  ' ' + 'likes';
//console.log(sentence1);

//tempelate string way
let sentence2 = 'The blog called ${title} by ${author} has ${likes}';
console.log(sentence2);

// // creating html templates
// let html =
// `<h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// </html>`

// console.log(html);

let ninjas = ['shaun','ryu','chun-li'];
//ninjas[1] = 'ken'
//console.log(ninjas[1]);

//let ages = [20,25,30, 35];
//console.log(ages[2]);

//let random = ['shaun','crystal', 30, 20];
//console.log(random);

//array methods

//let outcome2 = ninjas.join(',');
//console.log(outcome2);
let outcome2= ninjas.concat(['ken'])
console.log(outcome2);

let outcome3 = ninjas.push('ken','jay');
outcome3 = ninjas.pop();
console.log(outcome3);

let number = null+3;

console.log(number, number +3, `the number is ${number}`);

//boolean & comparisons
console.log(true,false)

//methods can return booleans 
let emailid ='asdf.ca';
let namess = ['mario','luigi'];

//let result = email.includes('@');
//result = email.includes('luigi');

//console.log(result);
//comparison operators
let number1 = 25;
/* console.log(number1==25) ;
console.log(number1==30) ;
console.log(number1!=34) ;
console.log(number1>34) ;
console.log(number1<34) ;
console.log(number1<=34) ; */
//let name = 'shaun';
//console.log(name =='shaun');


//type conversion
let score = '100';
//score = Number(score);
console.log(score + 1);
console.log(typeof score);

//let result = Number('hello');
//console.log(result,typeof result);
//let result = Boolean (0);
//let result = Boolean ();
let result = Boolean('0');

console.log(result,typeof result);

// for loops
/*for(let i = 0; i < 5; i++){
    console.log('in loop:',i);
}*/

//console.log('loop finished');

//const names = ['shaun', 'mario', 'luigi'];

/*for(let i = 0; i < names.length; i++){
    //console.log(i);
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loops
//let i = 0;

while(i < 5){
    console.log('in loop:', i);
}

// while loops
const name4 = ['shaun', 'mario', 'luigi'];
let i = 0;*/
// do while loops



//function expression
// const speak = function(){
// console.log('good day!');
// };
// //greet();
// //greet();
// //greet();

// speak();
// speak();
// speak();

// //function declaration
// function greet(){
// console.log('hello there');
// }

//arguements & parameters

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };
// console.log(name);

// speak('mario', 'morning');

// const speak = function(name = 'roye', time = 'evening'){
//     console.log(`good ${time} ${name}`);
// };
// console.log(name);

// speak();

// const speak = function(name = 'roye', time = 'evening'){
//     console.log(`haaaa ${time} ${name}`);
// };
// console.log(name);

// speak( 'maria', 'lalalala');

// returning values

// const speak = function(name = 'luigi' , time = 'night'){
//     console.log(`good $(time) $(name)`);
// };

// speak();

// const calcArea = function(radius){
//     let area = 3.14 * radius **2;
//     console.log(area);
// }

// calcArea(5);

// const calcArea = function(radius){
//     let area = 3.14 * radius **2;
//    return area;
// }

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){

// };

// calcVol(area);

//regular function
// const calcArea = function(radius){
// return 3.14 * radius ** 2;
// }

//arrow function
// const calcArea = radius =>   3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:' , area);

//practise arrow functions

// const greet = function(){
//     return'hello, world';
// };

// const greet = () =>  'hello, world';
// const outcome5 = greet();
// console.log(result);

// const bill = function(products, tax){
// let total = 0;
// for(let i=0; i<products.length; i++){
//     total += products[i] + products[i] * tax;
// }
// return total;
// }

// const bill = (products,tax) => {
//     let sum = 0;
// for(let i = 0; i < products.length; i++){
//     sum += products[i] + products[i] * tax;
// }
// return  sum;
// };
// console.log(bill([10,15,30], 0.2));

// const name = 'shaun';

// //functions
// const greet = () => 'hello';
//  let resultOne = greet();
//  console.log(resultOne);

//  //methods

//  let resultTwo = name.toUpperCase();
//  console.log(resultTwo);
 
// //callbacks & foreach

// // let people =['mario','luigi','ryu','shaun' ,'chun-li'] ;

// // const logPerson = (person, index) => {
// //     console.log(`${index} - hello${person}`);
// // };

// // people.forEach((person, index)=>{

// // });

// //get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario','luigi','ryu','shaun','chun-li'];

// let html = ``;

// people.forEach(function(person){
 
// //create html template
// html += `<li style="color: purple">${person}</li>`;

// });

// console.log(html);
// ul.innerhtml = html;

//object literals
let user = {
name: 'crystal',
age: 30,
email: 'crystal@thenetninja.co.uk',
location: 'berlin',
blogs: []
};