// define global variables.
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
        alert("Geolcation permission denied");
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
    let place = document.getElementById('place');
    let icon = document.getElementById('icon');
    let descrip = document.getElementById('descrip');
    let temp = document.getElementById('temp');

    // Assign the specific data desired from the api to variables.
    let cityData = data.name;
    let countryData = data.sys.country;
    let iconData =  data.weather[0].icon;
    let descripData = data.weather[0].description;
    let tempData = Math.round(data.main.temp * 10) / 10;

    // add the data variables to the HTML of the specific tags
    place.innerHTML = cityData + ", " + countryData;
    icon.innerHTML = "<img src= "+ iconData + ">";
    descrip.innerHTML =  descripData;
    temp.innerHTML = Math.round(tempData * 10) / 10 + " °" + tempUnit;

// add a event listener to toggle the temperature from celcius to fahrenheit.
temp.addEventListener("click", function(){
    if (tempUnit === "C"){
        tempUnit = "F";
        tempData = tempData * (9/5) + 32;
        temp.innerHTML = Math.round(tempData * 10) / 10 + " " + tempUnit ;
    } else {
        tempUnit = "C";
        tempData = (tempData - 32) / (9/5);
        temp.innerHTML = Math.round(tempData * 10) / 10 + " °" + tempUnit;
    }
})

}