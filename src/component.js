/* here you write your components. */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function() {
        // ES6 notation
        ["hello", "component", "!"].map(v => console.log(v));
    },
    update: function(oldData) {},
    remove: function() {},
    // tick: function (t) { },
    pause: function() {},
    play: function() {}
});