
// set-up layers for maps
var maps = {
 birds_eyeview: birdseyeview_background,
 Terrain: terrain_background
 GrayMap: graymap_background,
};
// layers for two different sets of data, earthquakes and tectonicplates.
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// additional layers
var addlayers = {
 "Tectonic Plates": tectonicplates,
 "Earthquakes": earthquakes
};

// adding one 'graymap' tile layer to the map.
graymap_background.addTo(map);

// control which layers are visible.
L.control
 .layers(maps, addlayers)
 .addTo(map);




// Pulls geoJSON data of hourly data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson", function(data) {
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
  }
