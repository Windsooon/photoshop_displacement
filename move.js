#include "helpers.js"

// config parameters
const targetDocDir = "~/T-shirt-bussies/";
const targetDocName = "TShirt-Normal.psd";
const targetLayerName = "Color Fill 2";

const sourceDocDir = "~/T-shirt-bussies/icon/";
const sourceDocName = "science.svg";
const sourceDocLayerName = "图层 1";

const persentage = 20;

// open both documents 
const targetDoc = app.open(File(targetDocDir+targetDocName));
const sourceDoc = app.open(File(sourceDocDir+sourceDocName));

// populate this array with whatever the names of the layers 
var layersToCopy = new Array(
    sourceDocLayerName,
);

copyLayers(layersToCopy, sourceDocName, targetDocName);

// close the source document
app.documents.getByName(sourceDocName).close(SaveOptions.DONOTSAVECHANGES);

sourceLayer = app.documents.getByName(targetDocName).layers[sourceDocLayerName];

// get center coordinates from source layer
var sourceBounds = sourceLayer.bounds;
var sourceLayerCenterX = sourceBounds[0].value + (sourceBounds[2].value - sourceBounds[0].value)/2;
var sourceLayerCenterY = sourceBounds[1].value + (sourceBounds[3].value - sourceBounds[1].value)/2;

resizeLayers(sourceLayer, persentage);

targetLayer = app.activeDocument.layers[targetLayerName];
// get center coordinates from target layer
var targetBounds = targetLayer.bounds;
var targetCenterX = targetBounds[0].value + (targetBounds[2].value - targetBounds[0].value)/2;
var targetCenterY = targetBounds[1].value + (targetBounds[3].value - targetBounds[1].value)/2;

var moveX = targetCenterX - sourceLayerCenterX;
var moveY = targetCenterY - sourceLayerCenterY;
sourceLayer.translate(moveX, moveY);

