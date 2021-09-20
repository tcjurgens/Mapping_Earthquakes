// Add console.log to check to see if our code is working.
//console.log("working");
//const API_KEY = "pk.eyJ1IjoidGNqdXJnZW5zIiwiYSI6ImNrdHFhcXM0dTBvaGMyb3Fzanc0MDZ2YXkifQ.Wc-kcdXhOYbKhMZhWZjDdA";
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
});             // this method of setting the map is useful when we need to add multiple tile layers, or a bckgrnd image to our map

//now, adding a title layer for our map
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);