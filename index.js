require("babel-register")({
    presets: [ 'env' ]
});

// require("@babel/register")({
//     presets: [ "@babel/preset-env" ]
// });

console.log('index.js');

module.exports = require('./src/main');