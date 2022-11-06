mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[80.3643296,21.7868542],
    zoom:4
});
var img1 = document.querySelector("#indiaGate")
var img2 = document.querySelector("#sunTemple")
var img3 = document.querySelector("#tajMahal")
var img4 = document.querySelector("#goldenTemple")
var img5 = document.querySelector("#mysorePalace")
var img6 = document.querySelector("#tanjoreTemple")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([77.229655,28.612987])
.addTo(map);

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([86.094576,19.887656])
.addTo(map);

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([78.042121,27.175134])
.addTo(map);

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([74.876532,31.620000])
.addTo(map);

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([76.655217,12.305287])
.addTo(map);

var marker6 = new mapboxgl.Marker({
    element:img6
})
.setLngLat([79.131829,10.782857])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)