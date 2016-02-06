function guessFunction() {
	var choices = ["CAT", "DOG", "BIRD"];
	if (document.getElementById("guessOne").value.toUpperCase()===choices[0]) {
			document.getElementById("cat").setAttribute("style", "display:block");
			document.getElementById("big").addEventListener("click", function() {
				document.getElementById("bigTwo").setAttribute("style", "display:block");
			});
			document.getElementById("small").addEventListener("click", function() {
				document.getElementById("wrong").setAttribute("style", "display:block");
			});
			document.getElementById("tiger").addEventListener("click", function() {
				document.getElementById("tigerTwo").setAttribute("style", "display:block");
				document.getElementById("tigerPic").setAttribute("style", "display:block");
				document.getElementById("tigerBPic").setAttribute("style", "display:block");
				document.getElementById("charity").setAttribute("style", "display:block");

			});
			document.getElementById("lion").addEventListener("click", function() {
				document.getElementById("default").setAttribute("style", "display:block");
			});
			
	} else if (document.getElementById("guessOne").value.toUpperCase()===choices[1]) {
		document.getElementById("dog").setAttribute("style", 'display:block');
	} else if (document.getElementById("guessOne").value.toUpperCase()===choices[2]) {
		document.getElementById("bird").setAttribute("style", "display:block");
	} else {
		document.getElementById("default").setAttribute("style", "display:block");
	};
}
