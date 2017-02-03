/* here you import original components. */
require("./component.js");

document.addEventListener('DOMContentLoaded', function() {
    /* here you write your application. */
    if (typeof AFRAME === 'undefined') {
        throw new Error('Component attempted to register before AFRAME was available.');
    }
    // ES6 test
    ["hello", "world", "!!"].map(n => console.log(n));
});