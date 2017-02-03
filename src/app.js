/* here you import original components. */
require('./component.js')

document.addEventListener('DOMContentLoaded', function () {
    if (typeof AFRAME === 'undefined') {
        throw new Error('Component attempted to register before AFRAME was available.')
    }

    /* here you write main logic. */

    // ES6 notation
    ['hello', 'world', '!'].map((v) => console.log(v))
})
