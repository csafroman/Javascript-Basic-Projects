// declare an array containing all the channel names of twitch.
let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// declare 2 more arrays which will store the data to be received from the api. 
let channelData = [];
let streamStatus = [];


users.forEach(function(channel){
	let channelUrl = 'http://wind-bow.glitch.me/twitch-api/channels/' + channel;
	let streamsUrl = 'http://wind-bow.glitch.me/twitch-api/streams/' + channel;
	fetch(channelUrl)
	.then(function(data){
		return data.json();
	})
	.then (function(value){
		channelData.push(value);
		console.log(channelData);
	})

	fetch(streamsUrl)
	.then(function(data){
		return data.json();
	})
	.then (function(value){
		streamStatus.push(value);
		console.log(streamStatus);
	})
})

setTimeout(renderHTML,2000);

function renderHTML(){
	var table = document.querySelector('.userData');
	var descrip;
	for (i=0;i<users.length;i++){
		if(streamStatus[i].stream == null){
			descrip = "Offline";
		} else {
			descrip = channelData[i].status;
		}
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		td1.setAttribute('class','logo');
		var img = document.createElement('img');
		img.setAttribute('src', channelData[i].logo);
		img.setAttribute('alt', "No logo");
		var td2 = document.createElement('td');
		var a = document.createElement('a');
		a.innerHTML = channelData[i].display_name;
		a.setAttribute('href', channelData[i].url);
		a.setAttribute('target',"_blank");
		var td3 = document.createElement('td');
		td3.innerHTML = descrip;	
		table.appendChild(tr);
		tr.appendChild(td1);
		td1.appendChild(img);
		tr.appendChild(td2);
		td2.appendChild(a);	
		tr.appendChild(td3);
	}
}