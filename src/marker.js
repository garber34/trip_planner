const mapboxgl = require("mapbox-gl");

const makeMarker = function(category, lat, long, map) {
    let markerURL = category === 'hotel' ? "http://i.imgur.com/D9574Cu.png" :
    category === 'activity' ? "http://i.imgur.com/WbMOfMl.png" :
    category === "restaurant" ? "http://i.imgur.com/cqR6pUI.png" : null;

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${markerURL})`;
    new mapboxgl.Marker(markerDomEl).setLngLat([long, lat]).addTo(map);
}

module.exports = makeMarker