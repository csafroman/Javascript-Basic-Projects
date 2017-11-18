let changeLength = document.querySelectorAll('.changeCounter');
let breakLength = Number(document.querySelector('#breakLength span').innerText);
let sessionLength = Number(document.querySelector('#sessionLength span').innerText);
let rendering = false;
var millsec;
let timerRunning = false;

// write a function to change the desired session and break length.
function changeTimerLength(e){
	// the buttons will be active only if the timer is not running.
	if (rendering === false){
		console.log(e);	
		if(this.className.split(' ')[1] === 'break'){
			this.value === '-' ? (breakLength !== 1 ? breakLength -= 1 : null) : breakLength += 1;
			document.querySelector('#breakLength span').innerText = breakLength;
		} else if (this.className.split(' ')[1] === 'session'){
			this.value === '-' ? (sessionLength !== 1 ? sessionLength -=1 : null) : sessionLength += 1;
			document.querySelector('#sessionLength span').innerText = sessionLength;
			// render the session length to the timer only if the timer is not running.
			if (timerRunning === false){
				document.querySelector('#timer p').innerText = `${sessionLength}:00`
			}
		}
	}
}

// add an event listener on all the +/- buttons.
changeLength.forEach(function(b){
	b.addEventListener('click',changeTimerLength);
});

// function to get a countdown timer running
var countdown = function(len, type){
	var futureTime = new Date().getTime() + len;
	// use setInterval function to update the timer every second giving the effect of a countdown running
	var x = setInterval(function(){
		// disable the add/less buttons while timer is running
		rendering = true;
		// disable the rendering of the seesion/break time while the timer is running
		timerRunning = true;
		var diff = futureTime - new Date().getTime();
		var mins = Math.floor((diff % (1000*60*60)) / (1000*60));
		mins < 0 ? mins = 0 : null;
		var secs = Math.ceil((diff % (1000*60)) / 1000);
		document.querySelector('#timer p').innerHTML = `${mins}:${secs}`;

		add an event listener on the stop button to puase the timer.
		var stopBtn = document.querySelector('#stop');
		stopBtn.addEventListener('click', function(e){
			console.log(e);
			// enable the add/suubtract buttons but stop the rendering of new session length
			rendering = false;
			timerRunning = true;
			clearInterval(x);
		});

		// function to start the break timer as soon as session reaches 0 and vice-versa
		if(Math.floor(diff/1000) < 0){
			clearInterval(x);
			if (type === 'session'){
				countdown((breaklength * 60000),'break');
				document.querySelector('#timer h3').innerHTML = "Break";
			} else {
				countdown((sessionLength * 60000),"session");
				document.querySelector('#timer h3').innerHTML = 'Session';
			}	
		}

	},1000);
// }add an event listener on the start button to start the timer
var startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function(){
	// calculate the millisecond value of the time being shown in the timer so which be used as a parameter for the countdown function
	millsec = (Number((document.querySelector('#timer p').innerHTML).split(':')[0]) * 60000) + (Number((document.querySelector('#timer p').innerHTML).split(':')[1])*1000);
	// call the countdown function with the parameters to start the timer.
	countdown(millsec,'session');
});

// add a event listener on the reset button to reload the entire page
var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(g){
	location.reload();
	console.log(g);
});

