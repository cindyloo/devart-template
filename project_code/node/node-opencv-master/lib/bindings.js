module.exports = require('../node_modules/opencv/build/Release/opencv.node');


try {
  module.exports = require('../node_modules/opencv/build/Release/opencv.node');
} catch (e) { try {
  module.exports = require('../node_modules/opencv/build/default/opencv.node');
} catch (e) {
  throw e;
}}