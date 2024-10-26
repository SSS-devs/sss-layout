---
---

clatitude = "{{ site.data.sitetext[site.locale].contact.map.location.latitude }}";
clongitude = "{{ site.data.sitetext[site.locale].contact.map.location.longitude }}";
latitude ="{{ site.data.sitetext[site.locale].contact.map.location.latitude }}";
longitude = "{{ site.data.sitetext[site.locale].contact.map.location.longitude }}";
map = L.map('map', { zoomControl: false } ).setView([ clatitude, clongitude], 17);
L.tileLayer('{{ site.data.sitetext[site.locale].contact.map.server }}', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
marker = L.marker([latitude, longitude]).addTo(map);
map.doubleClickZoom.disable();
map.dragging.disable();
map.scrollWheelZoom.disable();
