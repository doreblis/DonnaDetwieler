
//this is a variable assigned to an element

let imageElement = document.getElementById(BlogImg);

//this function named "alert function" which executes an alert
let alertFunction = function() {
  alert('Hello reader!')
};

//this is assigning an event listener to your element in order to run a function
imageElement.addEventListener("click", alertFunction);