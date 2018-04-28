const fs = require('fs');

const data = JSON.parse(fs.readFileSync('stats.json', 'UTF-8'));

function unsource(obj) {
    if (obj.source) {
        obj.source = '/* elided */';
    }
}

data.modules.forEach(unsource);
data.chunks.forEach((c) => {
    unsource(c);
    c.modules.forEach(unsource);
});
data.children = []; // TODO: We don't support this anyway so...

fs.writeFileSync('static/example-data.json', JSON.stringify(data));
