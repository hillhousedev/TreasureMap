var map = L.map('map').setView([39.742043, -104.991531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const points = [];
let polyline;
let bean = `https://static-cdn.jtvnw.net/emoticons/v1/302039277/4.0`


map.on('click', (event) => {
    const latlng = [event.latlng.lat, event.latlng.lng];
    points.push(latlng);
    console.log(points);
    if (!polyline) {
        polyline = L.polyline(points, { color: 'red', weight: 15, }).addTo(map);
        L.popup({
                autoClose: false,
                closeOnClick: false,
            })
            .setLatLng(latlng)
            .setContent('<img class="shinny-koffin" src="https://i.imgur.com/STVYppv.png">')
            .openOn(map);



    } else {
        polyline.setLatLngs(points);
        if (Math.random() < 0.2) {
            L.popup({
                    autoClose: false,
                    closeOnClick: false,
                })
                .setLatLng(latlng)
                .setContent(`
                <h1>Start on trail head, <br>hike until you happy, <br>then you drive back home.</h1> 
                <img class="baked-beans" src="https://static-cdn.jtvnw.net/emoticons/v1/302039277/4.0">
                `)
                .openOn(map);


        }
    }
});



// zoom the map to the polyline
// map.fitBounds(polyline.getBounds());