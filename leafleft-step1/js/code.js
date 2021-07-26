  
//var eq_url= 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

//var earthquakes = new L.LayerGroup();

var graymap_background = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={"API_KEY"}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

 // Gradient color scale for magnitude markers
 function getColor(magnitude) {
    switch (true) {
      case magnitude > 5:
        return "#FF284D";
      case magnitude > 4:
        return "#FF4162";
      case magnitude > 3:
        return "#FF5B77";
      case magnitude > 2:
        return "#FF748C";
      case magnitude > 1:
        return "#FF8EA1";
      default:
        return "#FFA7B6";
    }
  }
