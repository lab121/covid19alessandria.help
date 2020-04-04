import * as L from 'leaflet/dist/leaflet'

const mymap = L.map('map').setView([44.9107397,8.6166693], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibHVzc29sdWNhIiwiYSI6ImNrOGs4cjExdTAydmUzaG9vcDg1bWZsMGgifQ.rN6P2Ht0ECeUiwOYzcPpww'
}).addTo(mymap);

const orangeIcon = L.icon({
  iconUrl: '/images/map/marker-icon.png',
  shadowUrl: '/images/map/marker-shadow.png'
});

const x = document.getElementsByClassName("js-marker");
let i;
for (i = 0; i < x.length; i++) {
  const title = x[i].dataset.title;
  const link = x[i].dataset.link;
  const coord_lat = x[i].dataset.coordlat;
  const coord_lon = x[i].dataset.coordlon;

  const marker = L.marker([coord_lat, coord_lon], {icon: orangeIcon}).addTo(mymap);
  marker.bindPopup("<a href=\""+link+"\">"+title+"</a>");
}
