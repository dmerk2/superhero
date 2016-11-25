

$(document).ready(function(){
	//alert("Hi");
	var nameChoice = prompt("What would you like to name your super hero?")

	$("#superHero").html(nameChoice);
	$("#jumboP").html("Choose what power " + nameChoice + " should use!");


//change size, color, opacity....
	$(".normalButton").on("click", function(){
		$(".superHero").animate({height: "300px", width: "200px"});
	})

	$(".growButton").on("click", function(){
		$(".superHero").animate({height: "500px", width: "300px"});
	});

	$(".shrinkButton").on("click", function(){
		$(".superHero").animate({height: "100px", width: "100px"});
	});

	$(".stretchButton").on("click", function(){
		$(".superHero").animate({height: "500px"});
	});

	$(".visButton").on("click", function(){
		$(".superHero").animate({opacity: "1"});
	});

	$(".invisButton").on("click", function(){
		$(".superHero").animate({opacity: "0.1"});
	});

});