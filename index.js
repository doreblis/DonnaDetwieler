const name = prompt('What is your name?');

const checkName = function (){
    if(name === "") {
        name = prompt('What is your name, for real this time?');

    checkName(); //repeats until a name exists
    }
};
checkName (); //kicks off the name-checking the first time

alert("Hello " + name + "!")
