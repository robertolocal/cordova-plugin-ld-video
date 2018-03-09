var cordova = require('cordova');

var backgroundvideo = {
    start : function(filename, camera, shouldRecordAudio, qualityHigh, onlyPreview, successFunction, errorFunction) {
        camera = camera || 'back';
        cordova.exec(successFunction, errorFunction, "backgroundvideo","start", [filename, camera, shouldRecordAudio, qualityHigh, onlyPreview]);
    },
    stop : function(successFunction, errorFunction) {
        cordova.exec(successFunction, errorFunction, "backgroundvideo","stop", []);
    }
};

module.exports = backgroundvideo;
