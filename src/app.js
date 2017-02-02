/* here you write your application. */
var main = function () {
	console.log("hello world");
}

var scene = querySelector("a-scene");

if (scene.hasLoaded) {
    main();
} else {
    scene.addEventListener('loaded', main);
}