const slider = document.getElementById("slider");
const buttons= document.querySelectorAll(".nav-btn");

buttons.forEach(button => [
    button.addEvenetListener("mouseenter", function () {
		
		slider.style.left=button.offsetLeft + "px";
		slider.style.width=button.offsetWidth + "px";
		slider.style.height=button.offsetHeight+"px";
		
	});
});