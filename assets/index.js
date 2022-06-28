var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColors = randomColorGenerate();
var colorDisplay = document.querySelector("#colorDisplay");
var statusDisplay = document.querySelector("#status");
var header = document.querySelector("header");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var resetbtn = document.querySelector("#reset");

easybtn.addEventListener("click", function() {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares = 6;
	header.style.background = "white";
	statusDisplay.textContent = "Try to guess the right color based on the RGB value by clicking on the blocks."
	colors = generateRandomColors(numSquares);
	pickedColors = randomColorGenerate();
	colorDisplay.textContent = pickedColors;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else{
		squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function() {
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	statusDisplay.textContent = "Try to guess the right color based on the RGB value by clicking on the blocks."
	numSquares = 9;
	header.style.background = "white";
	colors = generateRandomColors(numSquares);
	pickedColors = randomColorGenerate();
	colorDisplay.textContent = pickedColors;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}	
});

resetbtn.addEventListener('click', function(){
	colors = generateRandomColors(numSquares);
	pickedColors = randomColorGenerate();
	colorDisplay.textContent = pickedColors;
	resetbtn.textContent = "New Game";
	statusDisplay.textContent = "Try to guess the right color based on the RGB value by clicking on the blocks."	
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	header.style.background = "white";
});

colorDisplay.textContent = pickedColors;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColors);
		if (clickedColor === pickedColors) {
			statusDisplay.textContent = "Correct! You win";
			resetbtn.textContent = "Play Again?";
			changeColors(clickedColor);
			header.style.background = clickedColor;
		}
		else{
			this.style.backgroundColor = "white";
			statusDisplay.textContent = "Wrong! Try Again";
		}
	});
}

function changeColors(colorz){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colorz;
	}
}

function randomColorGenerate(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(generatedColor){
	var arr = []
	for (var i = 0; i < generatedColor; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}


