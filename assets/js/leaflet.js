var latitude = 5.80;
var longitude = -55.20;
var map = L.map('map', { zoomControl: false } ).setView([ latitude, longitude], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([latitude, longitude]).addTo(map);
map.doubleClickZoom.disable();
map.dragging.disable();
map.scrollWheelZoom.disable();
