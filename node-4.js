'use strict';

var plugins = require('./node-5').plugins.slice();
plugins.unshift(require('babel-plugin-transform-es2015-spread'));

module.exports = {
    plugins: plugins,
};
