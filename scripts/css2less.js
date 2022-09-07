const fs = require('fs');
const path = require('path');

fs.renameSync(
  path.join(__dirname, 'dist', '/index.css'),
  path.join(__dirname, 'dist', '/index.less'),
);
