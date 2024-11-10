var body = document.querySelector("body");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var current = document.querySelector("h3");

var random = document.querySelector(".random");

current.innerText = body.style.background
console.log(body.style.background)

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	current.innerText = body.style.background;
}

function ranndomGradient() {

	let c1 = `${generateRandomHex()}`;
	let c2 = `${generateRandomHex()}`;

	color1.value = c1;
	color2.value = c2;
	
	setGradient();
}

function rgbToHex(r, g, b) {
    return "#" + 
        ((1 << 24) | (r << 16) | (g << 8) | b)
            .toString(16)
            .slice(1)
            .toUpperCase();
}


function generateRandomHex() {
	let c1 = Math.floor(Math.random() * 255);
	let c2 = Math.floor(Math.random() * 255);
	let c3 = Math.floor(Math.random() * 255);
	return rgbToHex(c1, c2, c3);
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", ranndomGradient);
