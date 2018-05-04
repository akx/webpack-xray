const StatsJSONPlugin = require('./StatsJSONPlugin');

module.exports = {
  publicPath: './',
  generateStats: true,
  plugins: [
    require('@poi/plugin-typescript')(),
  ],
  configureWebpack(config, context) {
    config.plugins.push(new StatsJSONPlugin(__dirname + '/stats.json'));
  }
};
