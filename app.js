const mapContainer = document.getElementById('map');

var map = L.map('map').setView([39.742043, -104.991531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const points = [];
let bakedBeans = 0;
let polyline;
let mode = 'pink';
mapContainer.classList.add('pink');
const modes = ['pink', 'dark'];

const defaultLatLng = [39.742043, -104.991531];
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log("Now fully loaded");
//     var popup = L.popup({
//             autoClose: false,
//             closeOnClick: false,
//         })
//         .setLatLng(defaultLatLng)
//         .setContent('<h1 class="info">Hello Friend Click around the map to find hidden treasures.</h1>')
//         .openOn(map);
//     console.log('DOM fully loaded and parsed');
// })
let bean = `https://static-cdn.jtvnw.net/emoticons/v1/302039277/4.0`



map.on('click', (event) => {
    if (mode === 'pink') {
        mapContainer.classList.toggle(mode);
        mode = 'dark';
        mapContainer.classList.toggle(mode);
    } else {
        mapContainer.classList.toggle(mode);
        mode = 'pink';
        mapContainer.classList.toggle(mode);
    }
    const latlng = [event.latlng.lat, event.latlng.lng];
    points.push(latlng);
    console.log(points);
    if (!polyline) {
        polyline = L.polyline(points, { color: 'red', weight: 10, }).addTo(map);
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
            bakedBeans++;
            L.popup({
                    autoClose: false,
                    closeOnClick: false,
                })
                .setLatLng(latlng)
                .setContent(`
                <h2>TOTAL: ${bakedBeans} </h2>
                <h3>Start on trail head, <br>hike until you happy, <br>then you drive back home.</h3> 
                <div class="burried-treasure">
                    <img class="burried-treasure" src="http://i.imgur.com/4EzXhBE.png">
                    <img class="baked-beans" src="https://static-cdn.jtvnw.net/emoticons/v1/302039277/4.0">
                    
                </div>
                
                `)
                .openOn(map);


        }
    }
});



// zoom the map to the polyline
// map.fitBounds(polyline.getBounds());