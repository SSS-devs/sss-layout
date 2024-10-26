---
---

var map = L.map('map', {
		zoomControl: {{ site.data.sitetext[site.locale].contact.map.zoom.control | default: false }},
		dragging: {{ site.data.sitetext[site.locale].contact.map.zoom.drag | default: false }},
		doubleClickZoom: {{ site.data.sitetext[site.locale].contact.map.zoom.doubleclick | default: false }},
		scrollWheelZoom: false } ).setView([ {{ site.data.sitetext[site.locale].contact.map.center.latitude }}, {{ site.data.sitetext[site.locale].contact.map.center.longitude }} ], {{ site.data.sitetext[site.locale].contact.map.zoom.level | default: 17 }} );
L.tileLayer('{{ site.data.sitetext[site.locale].contact.map.server }}', {
    maxZoom: {{ site.data.sitetext[site.locale].contact.map.zoom.max | default: 19 }},
    attribution: '&copy; <a href="https://www.openstreetmap.org/?mlat={{ site.data.sitetext[site.locale].contact.map.location.latitude }}&mlon={{ site.data.sitetext[site.locale].contact.map.location.longitude }}#map={{ site.data.sitetext[site.locale].contact.map.zoom.level }}/{{ site.data.sitetext[site.locale].contact.map.center.latitude }}/{{ site.data.sitetext[site.locale].contact.map.center.longitude }}">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([ {{ site.data.sitetext[site.locale].contact.map.location.latitude }}, {{ site.data.sitetext[site.locale].contact.map.location.longitude }} ]).addTo(map);
