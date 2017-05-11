#include "helpers.js"

var fileRef = File("~/T-shirt-bussies/TShirt-Normal.psd")
var fileRefIcon = File("~/T-shirt-bussies/icon/science.svg")
var docRef = app.open(fileRef)
var docRefIcon = app.open(fileRefIcon)

#target photoshop
app.bringToFront();

var sourceDocumentName = 1;
var targetDocumentName = 0;

// populate this array with whatever the names of the layers 
// you want to copy are

var layersToCopy = new Array(
  '图层 1',
);

// alternatively, specify the name of a layer group containing
// the layers you want to copy over. 
// Just uncomment the following line

//var layersToCopy = 'layer-group-to-copy';

copyLayers(layersToCopy, sourceDocumentName, targetDocumentName);

app.activeDocument = app.documents[0];
iconLayer = activeDocument.activeLayer;

resizeLayers(iconLayer, 20);
app.documents[1].close(SaveOptions.DONOTSAVECHANGES);
backgroundLayer = app.activeDocument.layers["Color Fill 2"];
app.activeDocument.activeLayer = backgroundLayer;
var bounds = backgroundLayer.bounds;
var width = bounds[2].value - bounds[0].value;
var height = bounds[3].value - bounds[1].value;
iconLayer.translate(680, 100);
