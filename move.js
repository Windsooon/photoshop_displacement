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
var sourceCenter = getCenter(sourceLayer)

resizeLayers(sourceLayer, persentage);

targetLayer = app.activeDocument.layers[targetLayerName];
// get center coordinates from target layer
var targetCenter = getCenter(targetLayer)

var moveX = targetCenter.centerX - sourceCenter.centerX;
var moveY = targetCenter.centerY - sourceCenter.centerY;
sourceLayer.translate(moveX, moveY);
