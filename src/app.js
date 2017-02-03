/* here you write your components. */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function() {
        ["hello", "component"].map(v => console.log(v));
    },
    update: function(oldData) {},
    remove: function() {},
    // tick: function (t) { },
    pause: function() {},
    play: function() {}
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');

    var main = function() {
        // ES6 test
        ["hello", "world", "!"].map(n => console.log(n));
    }


    var scene = document.querySelector("a-scene");

    if (scene.hasLoaded) {
        main();
    } else {
        scene.addEventListener('loaded', main);
    }
});