let lat;
let long;

/* write a function to get the current location of the user in terms of 
 latitude and longitude */
function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            long = position.coords.longitude;
            localWeather(lat, long);
    } else {
        alert("Geolcation not supported")
    }    
}

geolocation(); //call the function to get the geolocation.

/* write a function to fetch the data from the api, convert it to JSON 
format. */
function localWeather(lat, long){
    const url = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;
    fetch(url)
    .then(function(data){
        return data.json()
    })
    .then(function(response){
        renderHTML(response)
    })
}