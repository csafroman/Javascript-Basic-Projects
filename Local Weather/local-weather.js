let lat;
let long;
let tempUnit = "C";

/* write a function to get the current location of the user in terms of 
 latitude and longitude */
function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            long = position.coords.longitude;
            localWeather(lat, long);
        });
    } else {
        alert("Geolcation not supported");
    }    
}

geoLocation(); //call the function to get the geolocation.

/* write a function to fetch the data from the api, convert it to JSON 
format. */
function localWeather(lat, long){
    const url = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(response){
        renderHTML(response);
    })
}

//function to render the coresponding HTML.
function renderHTML(data){
    /* capture the respective html tags, where the data is suppose to be 
    rendered, in seperate variables */
    let city = document.getElementById('city');
    let icon = document.getElementById('icon');
    let descrip = document.getElementById('descrip');
    let temp = document.getElementById('temp');

    /* Get the specific data desirted from the api and assign to the inner
    HTMl of the variables. */
    city.innerHTML = data.name + ", " + data.sys.country;
    icon.innerHTML = "<img src= "+data.weather[0].icon+ ">";
    descrip.innerHTML =  data.weather[0].description;
    temp.innerHTML = Math.round(data.main.temp * 10) /10 + " °" + tempUnit;
}