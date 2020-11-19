var map = L.map('map').setView([39.742043, -104.991531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const points = [];
let polyline;

map.on('click', (event) => {
    points.push([event.latlng.lat, event.latlng.lng]);
    console.log(points);
    if (!polyline) {
        polyline = L.polyline(points, { color: 'red' }).addTo(map);

    } else {
        polyline.setLatLngs(points);
    }
});



// zoom the map to the polyline
map.fitBounds(polyline.getBounds());