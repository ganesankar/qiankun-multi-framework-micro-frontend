const { name } = require('./package');
const { override, addPostcssPlugins } = require('customize-cra')

const addSitePlugins = () => config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config
}

module.exports = override(
    addPostcssPlugins([require('tailwindcss')]),
    addSitePlugins(),

)
