var main = function () {
	// ES6 test
	["hello", "world", "!"].map(n => console.log(n));
}


var scene = document.querySelector("a-scene");
if (scene.hasLoaded) {
    main();
} else {
    scene.addEventListener('loaded', main);
}
