import { Configuration } from 'webpack';
export default {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `sub-app-ng17-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_sub-app-ng17`, // webpack 5 needs to replace jsonpFunction with chunkLoadingGlobal
  },
} as Configuration;
