var button = document.querySelectorAll('button');
var mathArr = [];
var mathStr = '';
var ans;
var input = document.querySelector('input');

button.forEach(function(element){
	element.addEventListener('click', doMath);
})

function doMath(){
	if (this.value === 'equal'){
		if(mathArr[mathArr.length-1] === '+' || mathArr[mathArr.length-1] === '/' || mathArr[mathArr.length-1] === '*' || mathArr[mathArr.length-1] === '-'){
			mathArr.pop();
		}
		mathStr = mathArr.join('');
		ans = eval(mathStr);
		ans = ans.toFixed(2);
		input.value = ans;
		mathArr = [ans];
	} else if (this.value === "AC"){
		resetArr();
		resetInput();
	} else if (this.value === "CE"){
		resetInput();
		clearEntry();
	} else {
		resetInput();	
		mathArr.push(this.innerHTML);
		console.log(mathArr);
		input.value += this.value;
	}
}

// function to get an empty array again to restart the calculations.
function resetArr(){
	mathArr = [];	
}

// function to remove everything from the calculator display.
function resetInput(){
	input.value = '';
}

// function to be executed when CE is pressed.
function clearEntry(){
	mathArr.pop();
}

// function which will be executed when equal is pressed.
// function equal(){
// 	console.log(mathArr);
// 	console.log(mathArr[mathArr.length-1]);
// 	if(mathArr[mathArr.length-1] === '+' || mathArr[mathArr.length-1] === '/' || mathArr[mathArr.length-1] === '*' || mathArr[mathArr.length-1] === '-'){
// 		mathArr.pop();
// 	}
// 	mathStr = mathArr.join('');
// 	ans = eval(mathStr);
// 	ans = ans.toFixed(2);
// 	input.value = ans;
// }


