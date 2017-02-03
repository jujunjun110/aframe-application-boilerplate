(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* here you write your components. */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function init() {
        ["hello", "component"].map(function (v) {
            return console.log(v);
        });
    },
    update: function update(oldData) {},
    remove: function remove() {},
    // tick: function (t) { },
    pause: function pause() {},
    play: function play() {}
});

document.addEventListener("loaded", function () {
    console.log('loaded');

    var main = function main() {
        // ES6 test
        ["hello", "world", "!"].map(function (n) {
            return console.log(n);
        });
    };

    var scene = document.querySelector("a-scene");

    if (scene.hasLoaded) {
        main();
    } else {
        scene.addEventListener('loaded', main);
    }
});

},{}]},{},[1]);
