
$(document).ready(function(){

$('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	

//need to create function if api fails to load

$.ajax({
	url: "https://api.darksky.net/forecast/e5e9137e0dcfcfbf68e0f371041fd1ac/40.4406,-79.9959",
	dataType: "jsonp",
	
	success: function(data){
		console.log(data);
		var icon = data.currently.icon;
		console.log(icon);
		
		$("#icon").append('<img src=' + 'png/' + icon + '.png' + '>');
		$("#temp").append(Math.floor(data.currently.temperature) + "°F");
		$("#description").append(data.currently.summary);
	},
	type: "GET",
	});




});	




//e5e9137e0dcfcfbf68e0f371041fd1ac
//https://api.darksky.net/forecast/e5e9137e0dcfcfbf68e0f371041fd1ac/40.4406, 79.9959
//darksky