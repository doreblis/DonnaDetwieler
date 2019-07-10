import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import * as states from "./store";


const root = document.querySelector("#root");


function render(state) {
    root.innerHTML = `
      ${Navigation()}
      ${Header(state)}
      ${Content(state)}
      ${Footer()}
    `;


//look for click events on nav bar
document.querySelectorAll('nav li > a')
  .forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("event.target.textContent", event.target.textContent);
    render(states[event.target.textContent]);
    })
  );

}

render(states.Home);


let myNum = [1, 2, 3, 4, 5, 6,];
let doubledNum = [];

myNum.forEach(
  function(num) {
  doubledNum.push(num * 2);
}
);

console.log("my numbers:", myNum, "//doubled:", doubledNum);


let myNum2 = [1, 2, 3, 4, 5];
let doubledNum2 = myNum2.map(num => num * 2);;

console.log("doubled! mapped", doubledNum2);

let myNum3 = [1, 2, 3, 4, 5, 6, 7];
let oddNum = myNum3.filter(num => num % 2 !== 0);
console.log("filtered! odd!", oddNum);


let myNum4 = [1, 2, 3, 4, 5, 6, 7];
let mySum = myNum4.reduce(
  (prev, curr) => {
    return curr + prev;
  }
);
console.log("sum", mySum);



let arrayValues = ["hi", "hello", "cat", "dog"]
let arrayValues2 = ["his", "hellos", "cats", "dogs"]

let arrayValues = ["hi", "hello", "hi", "cat", "hi", "dog"]
let value = "hi";
let value2 = "dog";

let myNumbers = [1, 2, 3, 4, 5, 6, 7];

//Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array. HINT: test each element with a loop!
function helloArray(strings) {




}
helloArray(arrayValues);
helloArray(arrayValues2);

//Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.
function countArray(strings, value) {




}
countArray(repeatValues, value);
countArray(repeatValues, value2);


//Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.
function oddIndexes(array) {




}
oddIndexes(arrayValues);
oddIndexes(repeatValues);

//Write a function called sumArray that takes an array of numbers and returns the sum of all of those numbers added together.
function sumArray(numbers) {
  
  let sum = numbers.reduce ((x,y) => x + y);

  return sum;

}

console.log("4", sumArray(myNumbers));
