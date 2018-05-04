const fs = require('fs');

class StatsJSONPlugin {
  constructor(filename, mode = {all: true}, indent = null) {
    this.filename = filename;
    this.mode = mode;
    this.indent = indent;
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => {
      try {
        const statsJson = JSON.stringify(stats.toJson(this.mode), null, this.indent);
        fs.writeFile(this.filename, statsJson, 'utf-8', (err) => {
          if(err) {
            console.log('Error writing stats: ', err);
          }
        });
      } catch (err) {
        console.log('Error serializing stats: ', err);
      }
    });
  }
}

module.exports = StatsJSONPlugin;
