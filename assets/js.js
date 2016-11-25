

$(document).ready(function(){
	//alert("Hi");
	var nameChoice = prompt("What would you like to name your super hero?")

	$("#superHero").html(nameChoice);
	$("#jumboP").html("Choose what power " + nameChoice + " should use!");


//change size, color, opacity....

	$(".visButton").on("click", function(){
		$(".superMan").animate({opacity: "1"});
	});

	$(".invisButton").on("click", function(){
		$(".superMan").animate({opacity: "0.1"});
	});

});