// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const sendOSCMessage = (address, data) => window.api.send("oscSend", address, data);

const cleanClassName = (className) => className.toLowerCase().split(' ').join('_');

const sendModelPreditions = (predictions) => {
  predictions.map(prediction => {
    const {className, probability} = prediction;
    const cleanedClassName = cleanClassName(className);
    sendOSCMessage(cleanedClassName, probability);
  });
};