const { name } = require('./package');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config;
}