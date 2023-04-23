var mymap = L.map('map').setView([-1.0912, 37.0117], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-1.0912, 37.0117]).addTo(mymap);
marker.bindPopup("<b>isaac home !!!</b><br>juja is a good place.").openPopup();