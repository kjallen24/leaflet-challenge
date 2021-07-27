//add in APi Key

// set-up layers for maps
var maps = {
 birds_eyeview: birdseyeview_background,
 Terrain: terrain_background
 GrayMap: graymap_background,
};

// adding 'graymap' tile layer to the map
graymap_background.addTo(map);

// controlling which layers are visible.
L.control{
 .layers(maps)
 .addTo(map);
}

// Pulls geoJSON data of hourly data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(data) {
 function styleInfo(feature) {
   return {
     opacity: 1,
     fillOpacity: 1,
     fillColor: getColor(feature.properties.mag),
     color: "#000000",
     radius: getRadius(feature.properties.mag),
     stroke: true,
     weight: 0.5
   };
 }
  // adding geoJSON layer to the map
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }

 // Gradient color scale for magnitude markersm using getColor func
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
  legend.onAdd = function() {
      var div = L
        .DomUtil
        .create("div", "info legend");
      var grades = [0, 1, 2, 3, 4, 5];
      var colors = [
        "#E7169F", // HOT PINK
        "#BB16E7", // HOT PURPLE
        "#1639E7", // HOT BLUE
        "#11C714", // HOT GREEN
        "#DDD40C", // YELLOW
        "#DD360C"  // RED
      ];
      legend.addTo(map);
  }
