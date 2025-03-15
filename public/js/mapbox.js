/* eslint-disable*/


export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoieXVsaWlhLTc4NSIsImEiOiJjbTg1d3NzZ3gyZ3N4MmpzNjdqZjUwdHU2In0.qDUobY2c-i8ixAvMe1IBvA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yuliia-785/cm85x4fle006h01sifa3560jn',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
    });
    
    const bounds = new mapboxgl.LngLatBounds();
    
    locations.forEach(loc => {
        // Create a marker 
        const el = document.createElement('div');
        el.className = 'marker';
    
        // Add marker 
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
            .setLngLat(loc.coordinates)
            .addTo(map);
    
        // add popup 
        new mapboxgl.Popup({
            offset: 30
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);
    
        // extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    
    map.fitBounds(bounds, {
        padding: {
            top: 200, 
            bottom: 150, 
            left: 100,
            right: 100
        }
    });
}

