/* here you require original components. */
require('./component.js')
require('./shader.js')

function main() {
    /* here you write main logic. */
    ['hello', 'world', '!'].map((v) => console.log(v))
}

document.addEventListener('DOMContentLoaded', function () {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})

