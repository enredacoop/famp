var myIcon = L.Icon.extend({
    options: {
        iconUrl: 'famp-icon.png',
        iconSize:     [32, 32]
    }
});


var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);



function popup(feature, layer) { 
    if (feature.properties.nombre) 
    {
        layer.bindPopup("<strong>"+feature.properties.nombre+"</strong>");
    } 
}

function styledPoints (feature, latlng) {
    return L.marker(latlng, {icon: new myIcon()});
}

var ciudades = L.geoJson(null, {
    onEachFeature: popup,
    pointToLayer: styledPoints
});

$.getJSON("./js/ciudades.geojson", function (data) {
    ciudades.addData(data);
});

ciudades.addTo(map);
