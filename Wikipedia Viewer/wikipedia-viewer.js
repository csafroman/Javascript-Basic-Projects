// declare global variables
let search;
let url;
let section = document.querySelector(".displayPages")

/* add a event listener on the input box so that as soon as there is an 
inpur given some html is rendered under it */
document.querySelector('input').addEventListener("input", function(){
	document.querySelector('p').innerHTML = "Press Enter to search";
});
	
/* add a event listener which will execute a function when enter is pressed after
text has been entered in the search box */
if (document.querySelector('input').value !== null){
	document.querySelector('input').addEventListener("keypress",function(e){
		if (e.keyCode == 13){
			while (section.firstChild){
				section.removeChild(section.firstChild);
			}	
			fetchResults();
		}
	});
}


/* write a function to complete the url by adding the serached words to the url 
and fetch the data from the api. */
function fetchResults(){
	search = document.querySelector('input').value;
	search = search.replace(" ", "%20");
	url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search="+search;

	fetch(url)
	.then(function(data){
        return data.json();
    })
    .then(function(value){
    	console.log(value);
    	renderHTML(value);
    })
}

// wrtie a function to render the HTML for all the results from the search
function renderHTML(data){
	for(i = 0;i<data[1].length;i++){								
		let title = data[1][i];										
		let snippet = data[2][i];					
		// let pageID = data.query.search[i].pageid;					// pageId - to redirect to the corresponding page
		let page = data[3][i];		// Redirects to the corresponding page
		let ref = document.createElement("a");						// Create <a> tag
		 	ref.setAttribute("href",page);							// Append attributes to the <a> tag
		 	ref.setAttribute("target","_blank");
			ref.className="pageRedirect";
		let div = document.createElement("div");					// Create <div> tag
		let head = document.createElement("h2");  					// Create <h2> tag
		var content = document.createElement("p");                  // Create <p> tag
		var textnode = document.createTextNode(`${title}`);         // Create a text node with title
		content.innerHTML = snippet;								// Append corresponding tags and text nodes
		head.appendChild(textnode);
		div.appendChild(head);
		div.appendChild(content);
		div.className = "content";
		ref.appendChild(div);
		console.log(ref);
		section.append(ref);
	}
}



