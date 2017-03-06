(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* here you require original components. */
require('./component.js');
require('./shader.js');

function main() {
    /* here you write main logic. */
    ['hello', 'world', '!'].map(function (v) {
        return console.log(v);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var sceneEl = document.querySelector('a-scene');
    if (sceneEl.hasLoaded) {
        main();
    } else {
        sceneEl.addEventListener('loaded', main);
    }
});

},{"./component.js":2,"./shader.js":3}],2:[function(require,module,exports){
'use strict';

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/* here you write your components. */
AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function init() {
        ['hello', 'component'].map(function (v) {
            return console.log(v);
        });
    },
    update: function update(oldData) {},
    remove: function remove() {},
    // tick: function (t) { },
    pause: function pause() {},
    play: function play() {}
});

},{}],3:[function(require,module,exports){
'use strict';

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/* here you write your shader. */
AFRAME.registerShader('my-shader', {
    schema: {},
    vertexShader: require('./shader/default.vert')(),
    fragmentShader: require('./shader/default.frag')()
});

},{"./shader/default.frag":4,"./shader/default.vert":5}],4:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; // [0.0, 0.0] ~ [1.0, 1.0] \n" +
" \n" +
"void main(void) { \n" +
"    vec2 p = (vUV * 2.0) - vec2(1.0, 1.0); // normalize to [-1.0, 1.0] ~ [1.0, 1.0] \n" +
"    float x = p[0]; \n" +
"    float y = p[1]; \n" +
"    gl_FragColor = vec4(abs(x), abs(y), 1.0, 1.0); //(Red, Green, Blue, Alpha) \n" +
"} \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],5:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; \n" +
" \n" +
"void main(void) { \n" +
"  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n" +
"  vUV = uv; \n" +
"} \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}]},{},[1]);
