'use strict';

module.exports = {
    plugins: [

        // (I don know what the fuck but it seems the plugin order matters)

        // other utils
        require('babel-plugin-add-module-exports'),

        // ES6 for node 5
        require('babel-plugin-transform-es2015-modules-commonjs'),

        // stage-0
        require("babel-plugin-transform-do-expressions"),
        require("babel-plugin-transform-function-bind"),

        // stage-1
        require("babel-plugin-transform-class-constructor-call"),
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-decorators"),
        require("babel-plugin-transform-export-extensions"),

        // stage-2
        require("babel-plugin-syntax-trailing-function-commas"),
        require("babel-plugin-transform-object-rest-spread"),

        // stage-3
        require("babel-plugin-transform-exponentiation-operator"),
        [require("babel-plugin-transform-async-to-module-method"), {
            "module": "bluebird",
            "method": "coroutine",
        }],

    ],
};

