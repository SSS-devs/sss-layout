---
---

map = L.map('map', { zoomControl: false } ).setView([ {{ site.data.sitetext[site.locale].contact.map.location.latitude }}, {{ site.data.sitetext[site.locale].contact.map.location.longitude }} ], 17);
L.tileLayer('{{ site.data.sitetext[site.locale].contact.map.server }}', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
marker = L.marker([ {{ site.data.sitetext[site.locale].contact.map.location.latitude }}, {{ site.data.sitetext[site.locale].contact.map.location.longitude }} ]).addTo(map);
map.doubleClickZoom.disable();
map.dragging.disable();
map.scrollWheelZoom.disable();
