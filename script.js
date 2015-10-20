function  doIt(theExpression) {

	try {
		var total = eval(theExpression);
	} catch (e) {
		if(e instanceof SyntaxError) {
			alert("Error: you need numbers!");
			return;
		}
	}


	if(total == 42) {
		var sound = new Audio("spaceship.m4a");
		sound.play();
		var element = document.getElementById('meaning'),
			left = -500,
			lastFrame = +new Date,
			timer;

		// Move element right 600 px
		timer = setInterval(function() {
			var now = new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			// clear the time and stop animation
			if(left > 3000) {
				clearInterval(timer);
			}
		}, 16);
	
		
	}	

	total = eval(theExpression);
	Calc.total.value = total;
}