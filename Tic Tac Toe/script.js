var chooseChar = document.querySelector('.chooseChar');
var board = document.querySelector('.board');
var replay = document.querySelector('.replayBtn');
var origBoard;
var humanPlayer
var compPlayer;
var begin = document.querySelector('#beginBtn')

// function to let you choose the character you want to play as.
begin.addEventListener('click', function(e){	
	if (document.querySelector('#X').checked === true){
		humanPlayer = document.querySelector('#X').value;
		compPlayer = document.querySelector('#O').value;
	} else {
		humanPlayer = document.querySelector('#O').value;
		compPlayer = document.querySelector('#X').value;
	}
	board.style.display = 'block'; //display the board
	replay.style.display = 'block'; // display the replay button
	chooseChar.style.display = 'none'; //remove the display of the radio buttons
})

// function to restart the game
replay.addEventListener('click', function(){
	cells.forEach(function(cell){
		cell.innerHTML = '' // make the board empty again.,
		emptyCells =[]; // reset the array to empty again.
	})
})


var cells = document.querySelectorAll('.cells'); // get a nodelist of the all the cells.
var empCells = Array.from(cells); //get an array from the nodelist
var emptyCells =[];

// apply click event listener on every cells.
cells.forEach(function(c){
	c.addEventListener('click', startGame)
})

// function to allow users to play with the computer.1
function startGame(){
	if(this.innerHTML == ''){
		this.innerHTML = humanPlayer;
		emptyCells = empCells.filter(function(emp){
			if(emp.innerHTML === ''){	
				return emp;
			}
		})	
		console.log(emptyCells);
		// response from the computer
		if(emptyCells.length>1){	
			emptyCells[Math.floor(Math.random()*emptyCells.length)].innerHTML = compPlayer;
		}
	}
}
