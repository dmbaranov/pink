function initialize() {
  var coords = {lat: 59.9363547, lng: 30.318919};

  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    //center: new google.maps.LatLng(59.9363547, 30.318919),
    center: coords,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  }

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 13,
    fillOpacity: 100,
    fillColor: "#d22856",
    strokeWeight: 10,
    strokeColor: "white"
    }
  });

  var map = new google.maps.Map(mapCanvas, mapOptions)
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
