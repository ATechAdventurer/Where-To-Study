if (window.location.href == "https://wheretostudy.app/") {

  mapboxgl.accessToken = 'pk.eyJ1IjoibWFub3N0ZWVsZSIsImEiOiJjamhtanE1OWswZWFmM2RyeDd3M3pleDdnIn0.Ccam63uwLV2GkhuDt-8DlQ'; // replace this with your access token
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', // replace this with your style URL
    center: [-96.752323, 32.9854185],
    zoom: 10.7
  });

}