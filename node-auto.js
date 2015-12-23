'use strict';

var semver = require('semver');

var plugins = require('./node-5').plugins.slice();
if (semver.satisfies(process.version, '^4')) {
    plugins.unshift(require('babel-plugin-transform-es2015-spread'));
} else if (!semver.satisfies(process.version, '^5')) {
    throw new Error('you should use node version either 4.x or 5.x, lower is not supported by dysonshell');
}

module.exports = {
    plugins: plugins,
};
