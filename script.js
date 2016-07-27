$(document).ready(function(){
	console.log("I'm working! JS is working!");
	var apiKey = 'dc6zaTOxFJmzC';

	rndOffset = Math.floor(Math.random()*100)+1;

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=hamburgers&api_key=dc6zaTOxFJmzC&limit=5&offset=" + rndOffset);


	xhr.done(function(data) { 
		console.log("success got data", data);
		bgImg = data.data[0].images.downsized_large.url;
		console.log(bgImg); 
		bgImg2 = data.data[1].images.downsized_large.url;
		// $('body').css('background-image',bgImg);
		$('.wrapper').css('background-image', 'url(' + bgImg + ')');
		$('body').css('background-image', 'url(' + bgImg2 + ')');

		bgImg3 = data.data[2].images.downsized_large.url;
		bgImg4 = data.data[3].images.downsized_large.url;
		
		$('.burger1').css('background-image', 'url(' + bgImg3 + ')');
		$('.burger2').css('background-image', 'url(' + bgImg4 + ')');
		$('.burger3').css('background-image', 'url(' + bgImg4 + ')');
		$('.burger4').css('background-image', 'url(' + bgImg3 + ')');
	});
});