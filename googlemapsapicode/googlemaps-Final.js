function initMap() {
			var myLatLng = {lat:47.617273, lng: -122.328129};
			var mapDiv = document.getElementById("map");
			var map = new google.maps.Map(mapDiv, {
				center: myLatLng,
				zoom: 8
			});
			setMarkers(map);
	
}
	var starbucks = [
		['A', 47.649861, -122.350070, 4],
		['B', 47.610180, -122.342392, 5],
		['C', 47.614030, -122.328349, 3],
		['D', 47.638242, -122.357325, 2],
		['E', 47.641021, -122.325562, 1],
		['F', 47.609090, -122.339914, 6],
		['G', 47.661578, -122.333093, 7]
          ];
	
	function setMarkers(map) {
        var image = {
          url: 'starbucksmarker.psd',
		  size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < starbucks.length; i++) {
          var starbuck = starbucks[i];
          var marker = new google.maps.Marker({
            position: {lat: starbuck[1], lng: starbuck[2]},
            map: map,
            icon: 'starbucksmarker.psd',
			shape: shape,
            title: starbuck[0],
            zIndex: starbuck[3]
          });
        }
      }
			
		
			

				/*marker.addListener('load', function() {
				infowindow.open(map, marker);
			}); */
				
			
			
		
			
			
			
			
			
			
			
			
			
		
