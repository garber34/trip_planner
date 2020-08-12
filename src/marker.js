const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "red",
    restaurants: "blue",
    activities: "green"
};

const makeMarker = function(category, long, lat) {


    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundColor = iconURLs[category];
    const marker= new mapboxgl.Marker(markerDomEl).setLngLat([long, lat]);

    return marker;
}



module.exports = makeMarker;
