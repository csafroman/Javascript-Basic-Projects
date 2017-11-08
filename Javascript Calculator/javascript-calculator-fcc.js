var button = document.querySelectorAll('button');
// console.log(button);
var mathArr = [];
var mathStr = '';
var ans;
var input = document.querySelector('input');

// function which will be executed when equal is pressed.
var equal = function(){
	mathStr = mathArr.join('');
	// console.log(mathStr);
	ans = eval(mathStr);
	ans = ans.toFixed(2);
	// console.log(ans);
	input.value = ans;
}

// function to get an empty array again to restart the calculations.
var resetArr = function(){
	mathArr = [];	
}

// function to remove everything from the calculator display.
var resetInput = function(){
	input.value = '';
}

// function to be executed when CE is pressed.
var clearEntry = function(){
	mathArr.pop();
}

button.forEach(function(element){
	element.addEventListener('click', function(){
		// console.log(element.innerHTML);
		// console.log(mathArr);
		if (element.value === 'equal'){
			equal();
			resetArr();
		} else if (element.value === "AC"){
			resetArr();
			resetInput();
		} else if (element.value === "CE"){
			resetInput();
			clearEntry();
		} else if (element.getAttribute('class') === "number"){
			mathArr.push(element.innerHTML);
			console.log(mathArr);
			input.value += this.value;
		} else {
			resetInput();	
			mathArr.push(element.innerHTML);
			console.log(mathArr);
			input.value += this.value;
		}
	});
})

