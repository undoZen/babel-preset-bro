'use strict';

var semver = require('semver');

var plugins
if (semver.satisfies(process.version, '^4')) {
  plugins = require('./node-4').plugins.slice();
} else if (!semver.satisfies(process.version, '^5')) {
  plugins = require('./node-5').plugins.slice();
} else if (!semver.satisfies(process.version, '>=6')) {
  plugins = require('./node-6').plugins.slice();
} else {
  throw new Error('you should use node version 4.x or upper, lower is not supported by dysonshell');
}

module.exports = {
  plugins: plugins,
};
