var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Photos_1 = new ol.format.GeoJSON();
var features_Photos_1 = format_Photos_1.readFeatures(json_Photos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_1.addFeatures(features_Photos_1);
var lyr_Photos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_1, 
                style: style_Photos_1,
                popuplayertitle: 'Photos',
                interactive: true,
                title: '<img src="styles/legend/Photos_1.png" /> Photos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Photos_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Photos_1];
lyr_Photos_1.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Photos_1.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Photos_1.set('fieldLabels', {'photo': 'inline label - visible with data', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'inline label - visible with data', 'rotation': 'hidden field', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'timestamp': 'no label', });
lyr_Photos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});