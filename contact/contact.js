const firstName = prompt("Hi there! What's your first name?");
const lastName = prompt("Hi there! What's your last name?");
const output = document.querySelector("#greeting");

if (firstName || lastName) {
  output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + "!</p>";
} else {
  output.innerHTML = "<p>Please tell us your first and last names!</p>";
}
}
// If you want the message customized, do "<p id='testID'>" then add rules in css

// output.textContent = "Thanks for visiting, " + name + ".";