var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

function popup(feature, layer) { 
	if (feature.properties) 
	{
            layer.bindPopup("");
	} 
}

var ciudades = L.geoJson(null, {
	onEachFeature: popup
});

$.getJSON("./js/ciudades.geojson", function (data) {
	ciudades.addData(data);
});

ciudades.addTo(map);
