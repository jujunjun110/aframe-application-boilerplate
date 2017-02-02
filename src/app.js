/* here you write your application. */
var main = function () {
	console.log("hello world");
}

var scene = document.querySelector("a-scene");
if (scene.hasLoaded) {
    main();
} else {
    scene.addEventListener('loaded', main);
}