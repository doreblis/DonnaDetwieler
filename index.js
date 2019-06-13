//examples of strings
let seagull = "bird at sea";
let seal = "ocean cat";
let otter = "ocean cutie";
let tiger = "big cat";
let wolf = "hungry dog";

console.log(seagull, seal, otter, tiger, wolf);

//array of animals
myArray = [];

//concatenation of string and variable
let animalTalk = 'I went to the Zoo and saw a ' + seagull ;
console.log(animalTalk);

//creating an array of variables
let myAnimalArray = [seagull, seal, otter, tiger, wolf];
console.log(myAnimalArray);

//array pop - removes from eng
myAnimalArray.pop();
console.log("pop", myAnimalArray);

myAnimalArray.pop(seagull);
console.log("pop tiger", myAnimalArray);

//array push - adds to end of array
myAnimalArray.push(wolf);
console.log("push", myAnimalArray);

