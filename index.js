var nsuploader = require('netsuite-uploader')
  , through = require('through');

module.exports = function(options) {
  options.domain = options.domain || 'rest.sandbox.netsuite.com';

  nsuploader.config(options);
  return through(function(file) {
    if(file.path) {
      nsuploader(file.path).then(function() {
        console.log(file.path + ' uploaded.');
      }, function(e) {
        console.log('Error', e);
      });
    }
  });
};
