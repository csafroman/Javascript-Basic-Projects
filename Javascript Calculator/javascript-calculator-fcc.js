var button = document.querySelectorAll('button');
var mathArr = [];
var mathStr = '';
var ans;
var mathDone = false;
var input = document.querySelector('input');

button.forEach(function(element){
	element.addEventListener('click', doMath);
})

function doMath(){
	// console.log(mathArr);
	if (this.className === 'numb'){
		if(mathDone === true){
			mathArr.pop();
			resetInput();
		}
		mathArr.push(this.innerHTML);
		input.value += this.value;
		console.log(mathArr);
		mathDone = false;
	} else if (this.className === 'operator'){
		mathDone = false;
		if (mathArr[mathArr.length-1] === '+' || mathArr[mathArr.length-1] === '/' || mathArr[mathArr.length-1] === '*' || mathArr[mathArr.length-1] === '-' ||mathArr[mathArr.length-1] === '.'){
			mathArr.pop();
		}
		mathArr.push(this.innerHTML);
		input.value += this.value;
		console.log(mathArr)
	} else if (this.value === "AC"){
		mathDone = false;
		resetArr();
		resetInput();
		console.log(mathArr);
	} else if (this.value === "CE"){
		mathDone = false;
		mathArr.pop();
		input.value = mathArr.join('');
		console.log(mathArr);
	} else if (this.value === 'equal'){
		mathDone = true;
		mathStr = mathArr.join('');
		ans = eval(mathStr);
		ans = ans.toFixed(2);
		input.value = ans;
		mathArr = [ans];
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


