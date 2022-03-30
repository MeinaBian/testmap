// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12


// // Create the createMap function.
// function createMap(bikeLayer)
// {

//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })
//   var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });
//   var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//   maxZoom: 20,
//   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   });

//   // Create a baseMaps object to hold the lightmap layer.
//   let baseMaps={
//     "Dark": dark,
//     "Street": street,
//     "Topography":topo 
//   };

//   // Create an overlayMaps object to hold the bikeStations layer.
//   var overlays = {
//      "Bike Stations": bikeLayer
//   }

//   // Create the map object with options.
//   let map= L.map("map-id",{
//     center: newYorkCoords,
//     zoom:12,
//     layers:[dark,bikeLayer]
//   });

//   // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
//   L.control.layers(baseMaps, overLays, {
//     collapsed: false
//   }).addTo(map);
// }
// // Create the createMarkers function.
// function createMarkers(data)
// {
//   //
//   //console.log(data)
//   // Pull the "stations" property from response.data.
//   let stations = data.data.stations;
  
//   // Initialize an array to hold the bike markers.
//   let bikeStations = [];
//   // Loop through the stations array.
    
//     for (var i=0; i<stations.length; i++)
//     {
//     // Add the marker to the bikeMarkers array.
//     let s = stations[i];
//     //
//     let lat = s.lat;
//     let long = s.lon;
//     //console.log(lat) c heck console to see if code work
//     //
//     let stationName= s.name;
//     let stationCap= s.capacity;
//     let stationType= s.station_Type;

//     // For each station, create a marker, and bind a popup with the station's name.
//     let marker= L.marker([lat,long])
//     .bindPopup(`<h2>${stationName}</h2><hr>Station Type: <b>${stationType} </b>
//     <br> station Capacity: <b>${stationCap} bikes </b>`
//     )
//     // Add the marker to the bikeMarkers array.
//     bikeStations.push(marker);
//     }
//   // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
//   bikeLayer = L.layerGroup(bikeStations);
//   createMap(bikeLayer);
// }
// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers)



//solution
// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;
// // Create the createMap function.
// function createMap(bikeLayer)
// {
//   // Create the tile layer that will be the background of our map.
//   // Define variables for our tile layers.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })
//   var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });
//   var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//   maxZoom: 20,
//   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   });
//   // Create a baseMaps object to hold the lightmap layer.
//   let baseMaps = {
//     "Dark": dark,
//     "Street": street,
//     "Topography": topo
//   };
//   // Create an overlayMaps object to hold the bikeStations layer.
//   var overLays = {
//     "Bike Stations": bikeLayer
//   }
//   // Create the map object with options.
//   let map = L.map("map-id", {
//     center: newYorkCoords,
//     zoom: 12,
//     layers: [dark, bikeLayer]
//   });
//   // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
//   L.control.layers(baseMaps, overLays, {
//     collapsed: false
//   }).addTo(map);
// }
// // Create the createMarkers function.
// function createMarkers(data)
// {
//   console.log(data);
//   // Pull the "stations" property from response.data.
//   let stations = data.data.stations;
//   // Initialize an array to hold the bike markers.
//   let bikeStations = [];
//   // Loop through the stations array.
//   for(var i = 0; i < stations.length; i++)
//   {
//     // grab the station by its index
//     let s = stations[i];
//     // grab the station's lat and long
//     let lat = s.lat;
//     let long = s.lon;
//     // grab the station's name
//     let stationName = s.name;
//     // grab the capacity
//     let stationCap = s.capacity;
//     // grab the station type
//     let stationType = s.station_type;
//     // For each station, create a marker, and bind a popup with the station's name.
//     let marker = L.marker([lat, long])
//                   .bindPopup(`<h2>${stationName}</h2><hr>Station Type: <b>${stationType}</b>
//                   <br>Station Capacity: <b>${stationCap} bikes</b>`);
//     // Add the marker to the bikeMarkers array.
//     bikeStations.push(marker);
//   }
//   // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
//   bikeLayer = L.layerGroup(bikeStations);
//   createMap(bikeLayer);
// }
// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);



//high capacity and low capacity station overlaymaps object to hold the bike station layer;
var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;
// Create the createMap function.
function createMap(highCapStationLayer, lowCapStationLayer)
{
  // Create the tile layer that will be the background of our map.
  // Define variables for our tile layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  // Create a baseMaps object to hold the lightmap layer.
  let baseMaps = {
    "Dark": dark,
    "Street": street,
    "Topography": topo
  };
  // Create an overlayMaps object to hold the bikeStations layer.
  var overLays = {
    "High-Capacity Stations": highCapStationLayer,
    "Low-Capacity Stations": lowCapStationLayer
  }
  // Create the map object with options.
  let map = L.map("map-id", {
    center: newYorkCoords,
    zoom: 12,
    layers: [dark, highCapStationLayer]
  });
  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overLays, {
    collapsed: false
  }).addTo(map);
}
// Create the createMarkers function.
function createMarkers(data)
{
  //console.log(data);
  // Pull the "stations" property from response.data.
  let stations = data.data.stations;
  // Initialize an array to hold the bike markers.
  // let bikeStations = [];
  // initialize an array for high and low capacity stations
  let highCapStations = [];
  let lowCapStations = []
  // Loop through the stations array.
  for(var i = 0; i < stations.length; i++)
  {
    // grab the station by its index
    let s = stations[i];
    // grab the station's lat and long
    let lat = s.lat;
    let long = s.lon;
    // grab the station's name
    let stationName = s.name;
    // grab the capacity
    let stationCap = s.capacity;
    // grab the station type
    let stationType = s.station_type;
    // For each station, create a marker, and bind a popup with the station's name.
    let marker = L.marker([lat, long])
                  .bindPopup(`<h2>${stationName}</h2><hr>Station Type: <b>${stationType}</b>
                  <br>Station Capacity: <b>${stationCap} bikes</b>`);
    // Add the marker to the to the classic stations array or the non-classic stations array
    if(stationCap > 50)
      highCapStations.push(marker);
    else
    {
      lowCapStations.push(marker);
    }
  }
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  highCapStationLayer = L.layerGroup(highCapStations);
  lowCapStationLayer = L.layerGroup(lowCapStations);
  createMap(highCapStationLayer, lowCapStationLayer);
}
// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);