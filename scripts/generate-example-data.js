const fs = require('fs');
const unsource = require('./unsource');
const data = JSON.parse(fs.readFileSync('stats.json', 'UTF-8'));
unsource(data);
const webpackMajorVersion = data.version[0];
fs.writeFileSync(`static/example-data/example-webpack${webpackMajorVersion}.json`, JSON.stringify(data));
