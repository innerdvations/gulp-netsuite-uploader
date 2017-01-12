# gulp-netsuite-uploader

### A gulp plugin for uploading to NetSuite

Rewrite of https://github.com/dturton/gulp-nsupload to work with netsuite-uploader instead of nsupload.

Upload files to NetSuite.  Either choose a folder to put a new file, or (without choosing a folder) replace an existing file with the same name.

Recommended for use with gulp-watch.

## Installation

Install and deploy the restlet included with netsuite-uploader. You'll need the script internal id for the config file.

You'll probably want to use the PUT verb for the function, although NetSuite doesn't allow you to be truly 
restful (no semantic URI), so use a POST if you like it better.

The upload function will return a stream handler, and must be called with the following properties:

- email - The email address of an authorized user
- password - The password for the same user
- account - The netsuite account number (get from Setup > Integration > Webservices)
- script - The script ID of the deployed restlet.
- [folder] - Optional folder id to put the uploaded file in. If not included, replaces the first found existing file with the same name.
- [domain] - Optional domain to use for the upload. Useful for continuous integration and automated releases to PRD.
Defaults to rest.netsuite.com
- [method] - Optional method that you deployed the restlet function to. Defaults to "PUT"

See below for an example gulpfile

```javascript
var upload = require('gulp-netsuite-uploader');

gulp.src('foo.js').pipe(upload({
  email: 'a@example.com',
  password: 'password',
  account: 1234,
  script: 123,
  folder: 123456
}));
```
