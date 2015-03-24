function initialize() {
	var latLngArray = [
	new google.maps.LatLng(36.156684, -86.778655),
new google.maps.LatLng(36.151556, -86.794362), //Home2 Suites
new google.maps.LatLng(36.152171, -86.794788), //Hilton Garden Inn
new google.maps.LatLng(36.151860, -86.797688), //Courtyard Nashville 
new google.maps.LatLng(36.148138, -86.806881)  //Homewood Suites by Hilton® Nashville Vanderbilt, TN
]
var latLngMCC = new google.maps.LatLng(36.156723, -86.778573);
var mapCanvas = document.getElementById('map-canvas');
var mapOptions = {
	// center: latLngArray[0],
	// zoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions);

var bounds = new google.maps.LatLngBounds();
bounds.extend(latLngArray[0]);
bounds.extend(latLngArray[1]);
bounds.extend(latLngArray[2]);
bounds.extend(latLngArray[3]);
bounds.extend(latLngArray[4]);
map.fitBounds(bounds);

for (i=1; i<latLngArray.length; i++) {
	var marker = new google.maps.Marker(
	{
		position:latLngArray[i],
		map:map,
		icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+i+'|FF776B|000000',
		shadow:'https://chart.googleapis.com/chart?chst=d_map_pin_shadow'
	}
	);
}
var marker = new google.maps.Marker(
{
	position:latLngMCC,
	map:map,
	icon:'http://maps.google.com/mapfiles/arrow.png',
	shadow:'https://chart.googleapis.com/chart?chst=d_map_pin_shadow'
}
);


}
google.maps.event.addDomListener(window, 'load', initialize);

