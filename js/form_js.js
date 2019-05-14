var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "pictures/headerform.jpg";
images[1] = "pictures/manu2.jpg";
images[2] = "pictures/manu3.jpg";
images[3] = "pictures/manu4.jpg";
images[4] = "pictures/manu5.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
