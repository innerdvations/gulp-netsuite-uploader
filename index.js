var nsuploader = require('./node_modules/netsuite-uploader')
  , through = require('through');

module.exports = function(options) {
  options.domain = options.domain || 'rest.sandbox.netsuite.com';

  nsuploader.config(options);
  return through(function(file) {
    if(options.folder) file.folder = options.folder;
    if(file.path) {
      nsuploader(file).then(function() {
        console.log(file.path + ' uploaded.');
      }, function(e) {
        console.log('Error', e);
      });
    }
  });
};
