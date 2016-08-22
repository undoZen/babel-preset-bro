'use strict';

module.exports = {
  plugins: [
    // put it on first to be easy removed (for rollup)
    require('babel-plugin-transform-es2015-modules-commonjs'),

    // ES6 for node 5
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-es2015-function-name'),

    // stage-0
    require("babel-plugin-transform-do-expressions"),
    require("babel-plugin-transform-function-bind"),

    // stage-1
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-transform-export-extensions"),

    // stage-2
    require("babel-plugin-transform-object-rest-spread"),

    // stage-3
    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-exponentiation-operator"),
    [require("babel-plugin-transform-async-to-module-method"), {
        "module": "bluebird",
        "method": "coroutine",
    }]
  ]
}
