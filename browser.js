'use strict';

module.exports = {
  plugins: [
    require("babel-plugin-syntax-flow"),
    require("babel-plugin-transform-flow-strip-types"),

    // the position is fixed so that bro-rollup preset can remove it
    require('babel-plugin-transform-es2015-modules-commonjs'),

    // ES6 for browser only
    require("babel-plugin-transform-es2015-template-literals"),
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),

    require("babel-plugin-transform-class-properties"), // stage-2 but order matters here

    require("babel-plugin-transform-es2015-classes"),
    require("babel-plugin-transform-es2015-object-super"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-computed-properties"),
    require("babel-plugin-transform-es2015-for-of"),
    require("babel-plugin-check-es2015-constants"),
    require("babel-plugin-transform-es2015-block-scoping"),
    require("babel-plugin-transform-es2015-typeof-symbol"),

    // ES6 for node 4
    require('babel-plugin-transform-es2015-spread'),

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
    require("babel-plugin-transform-export-extensions"),

    // stage-2
    require("babel-plugin-transform-object-rest-spread"),

    // stage-3
    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-exponentiation-operator"),
    [require('fast-async'), {
      "runtimePattern": "directive"
    }]
  ]
};
