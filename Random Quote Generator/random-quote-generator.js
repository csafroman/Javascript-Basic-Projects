// define an array containing all the quotes out which one will be randomly selected to be displayed
let quotes = [
"It is something that grows over time... A true friendship. A feeling in the heart that becomes even stronger over time.",
"Mess with the best, you will die like the rest.",
"We all make choices, but in the end, our choices make us.",
"It's so much easier to be given a place to belong than to make one for yourself",
"Thank you Mario! but our princess is in another castle!",
"Experience has taught me that wishful thinking only leads to disappointment",
"There is no use crying over every mistake, you just keep on trying till you run out of cake.",
"War. War never changes.",
"It's more important to master the cards you are holding than to complain about the ones your oponenets were dealt.",
"In the darkest hour, there's always a way out.",
"Good men mean well. We just don't always end up doing well."
]

/* define an array containing all the names of the chracters who have said the qutoes and the games that those chracters 
are from, make sure that the quote and the person's details are both at the same index.*/
let character = [
"-Sheik, The Legend of Zelda",
"-Duke Nukem, Duke Nukem 3D",
"-Andrew Ryan, Bioshock",
"-Citan Uzuki, Xenogears",
"-Toad, Super Mario",
"-The Prince, The Prince of Persia",
"-Glados, Portal",
"-Narrator, Fallout 3",
"-Grimsley, Pokemon Black and White",
"-Eve, Mass Effect 3",
"-Isaac Clarke, Dead Space 3"
]


function newQuote(){
	var randomNum = Math.floor(Math.random()*(quotes.length));
	document.getElementById("random-quote").innerHTML = quotes[randomNum];
	document.getElementById("character").innerHTML = character[randomNum];
	var tweet = document.getElementById("tweet");
	var tumblr = document.getElementById("tumblr");
	var facebook = document.getElementById("facebook");
	tweet.href = "http://twitter.com/intent/tweet?text=" + quotes[randomNum] + " " + character[randomNum];
	facebook.href = "#";
	tumblr.href = "#";
}