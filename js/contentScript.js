window.addEventListener("load", function() {
	// Get the zIndex of the subBanner
	const subBanner = document.querySelector(".subBanner");
	const z = document.defaultView.getComputedStyle(subBanner, null).zIndex;

	// Set the zIndex of the fullScreen to 1 + the subBanner zIndex
	const fullScreen = document.getElementById("imagesFullScreen");
	fullScreen.style.zIndex = +z + 1;
});
