/* Adapted from http://bit.ly/2lfulxo */
'use strict';

console.log('Starting app...');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;
const src = env === 'production' ? './build/app' : './src/app';

require('babel-polyfill');
if (env === 'development') {
  // for development use babel/register for faster runtime compilation
  require('babel-register');
}

const app = require(src).default;
app.listen(port);

console.log('App started listening on port: '+port);
