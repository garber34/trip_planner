const mapboxgl = require("mapbox-gl");
const makeMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoianBjb29rNzIiLCJhIjoiY2tkcW50aTlnMDU0NzJ1bHE5cGVsenFncyJ9.fIvUQ96AO1UJtqc5-S6Jfw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundColor = "red";
//markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

makeMarker('restaurants',-74.009, 40.705).addTo(map); // [-87.641, 41.895] for Chicago

 makeMarker('hotels', -74, 40.739).addTo(map);

