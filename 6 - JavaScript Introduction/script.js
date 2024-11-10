// var firstNum = prompt("Please enter a number: ");
// var secondNum = prompt("Please enter a second number: ");
// var sum = Number(firstNum) + Number(secondNum);
// alert(sum)

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

document.addEventListener("DOMContentLoaded", function() {
    // Your code here

	function checkDriverAge(age) {

		if (age > 18) {
			return "Powering On. Enjoy the ride!";
		} else if (age === 18) {
			return "Congratulations on your first year of driving. Enjoy the ride!";
		} else {
			return "Sorry, you are too young to drive this car. Powering off";
		}
	}

	var checkDriverAge2 = function() {
		var age = Number(prompt("Please enter your age: "))
		if (age > 18) {
			alert("Powering On. Enjoy the ride!");
		} else if (age === 18) {
			alert("Congratulations on your first year of driving. Enjoy the ride!");
		} else {
			alert("Sorry, you are too young to drive this car. Powering off");
		}
	}

	var array = ["Banana", "Apples", "Oranges", "Blueberries"];

	var login = {
		username: "xLevy",
		password: "password123"
	}

	var database = [login]

	var newsfeed = [{
		usename: "user1",
		timeline: "04-15-2014"
	},{
		usename: "user2",
		timeline: "05-15-2014"
	},{
		usename: "user3",
		timeline: "06-15-2014"
	}]
});
