// declare global variables.
var button = document.querySelectorAll('button'); //get an array of all the buttons
var mathArr = []; //empty array where all the buttons clicked will be pushed.
var mathStr = ''; //string which will be used in the eval function.
var ans;
var mathDone = false;
var input = document.querySelector('input'); //store the input box in a varaible

// add a event listener to every button which will run a function on clcik.
button.forEach(function(element){
	element.addEventListener('click', doMath);
})

// function which will be decide what is to be done based on which button is pressed.
function doMath(){
	// console.log(mathArr);
	if (this.className === 'numb'){
		// if number is pressed directly after getting ans then remove the previous answer from the array.
		if(mathDone === true){
			mathArr.pop(); 
			resetInput();
		}
		mathArr.push(this.innerHTML); //add the numbers in the array.
		input.value += this.value;
		console.log(mathArr);
		mathDone = false;
	} else if (this.className === 'operator'){
		mathDone = false;
		// so that more than one operator does not get added to the array.
		if (mathArr[mathArr.length-1] === '+' || mathArr[mathArr.length-1] === '/' || mathArr[mathArr.length-1] === '*' || mathArr[mathArr.length-1] === '-' ||mathArr[mathArr.length-1] === '.'){
			mathArr.pop();
		}
		mathArr.push(this.innerHTML); // add the operators in the array
		input.value += this.value; 
		console.log(mathArr)
	} else if (this.value === "AC"){
		mathDone = false;
		resetArr(); //make the array empty
		resetInput(); // make the input box empty
		console.log(mathArr);
	} else if (this.value === "CE"){
		mathDone = false;
		mathArr.pop(); // remove the last entry in the array.
		input.value = mathArr.join('');
		console.log(mathArr);
	} else if (this.value === 'equal'){
		mathDone = true;
		mathStr = mathArr.join(''); // join the array to get a string
		ans = eval(mathStr); // run the eval function on the string to get an answer.
		ans = ans.toFixed(2); // fixed 2 decimal places.
		input.value = ans; //display the answer in the input box
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


