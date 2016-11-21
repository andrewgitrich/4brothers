
$(document).ready(function(){

$('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=b05fa92c08f170c8e9d03b1a7891eb40",
	 function(data){
	 	var condition = data.weather[0].icon;
	 	var kelvin = data.main.temp;
	 	
	 	function temp(kelvin){
	 		return kelvin * 1.8 - 459.67;
	 	}
	 	
	 	console.log(kelvin);
	 	console.log(Math.floor(temp(kelvin)));
		console.log(condition);

		$("#weather").append('<img src='+ 'http://openweathermap.org/img/w/'+ condition + '.png' + '>');
		$("#description").text(data.weather[0].description);
		$("#temp").text(Math.floor(temp(kelvin)) + "°F");
		
		});


});	




//b05fa92c08f170c8e9d03b1a7891eb40 
//http://api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=b05fa92c08f170c8e9d03b1a7891eb40