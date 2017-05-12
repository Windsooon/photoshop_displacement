/**
 * Copy layer from one document to another
 * @param {string|Array}  layersToCopy
 * @param {string}        sourceDocumentName
 * @param {string}        targetDocumentName
 */
function copyLayers(layersToCopy, sourceDoc, targetDoc) {
      var sourceLayer, targetLayer, sourceGroup;
      var sourceDoc = app.documents.getByName(sourceDoc)
      var targetDoc = app.documents.getByName(targetDoc)

      if (app.activeDocument != sourceDoc) {
        app.activeDocument = sourceDoc;
      }

      if (typeof layersToCopy === 'string') {
        sourceGroup = sourceDoc.layerSets.getByName(layersToCopy);
        targetLayer = sourceGroup.duplicate(targetDoc, ElementPlacement.PLACEATBEGINNING)
      }
      else if (Object.prototype.toString.call(layersToCopy) === '[object Array]') {
        for (var i=0; i<layersToCopy.length; i++) {
          sourceLayer = sourceDoc.artLayers.getByName(layersToCopy[i]);
          targetLayer = sourceLayer.duplicate(targetDoc, ElementPlacement.PLACEATBEGINNING);
        }
      } 
}

function resizeLayers(layer, persentage) {
    var startRulerUnits = app.preferences.rulerUnits;  
    app.preferences.rulerUnits = Units.PIXELS;  
    var bounds = layer.bounds;  
    var width = bounds[2].value - bounds[0].value;
    var height = bounds[3].value - bounds[1].value;
    // var newWidth = width * persentage/100;
    // var newHeight = height * persentage/100;
    // var newSize = (100 / width) * 300;  
    activeDocument.activeLayer.resize(persentage, persentage, AnchorPosition.MIDDLECENTER);
    app.preferences.rulerUnits = startRulerUnits; 
}
