var TOTAL_PRESETS = 10;
var TOTAL_QUOTES = 14; 
var TOTAL_GREETINGS = 10;

var quotes = [ 
"Anyone who sees and paints a sky green and fields blue ought to be sterilized.",
"Great liars are also great magicians.",
"Hate is more lasting than dislike.",
"If you tell a big enough lie and tell it frequently enough, it will be believed.",
"Any sufficiently advanced technology is indistinguishable from magic.",
"The internet is a great way to get on the net.",
"If a man has long hair, it is a disgrace to him",
"If the world hates you, remember that it hated me first.",
"If only you would be altogether silent! For you, that would be wisdom.",
"I permit no woman to teach or to have authority over a man; she is to keep silent.",
"If it fits, it ships.",
"Works on my machine!",
"640K is more memory than anyone will ever need.",
"Yeah I pronounce it 'pasketti'. Why? Is there another way?"];
var quoted = [
"Adolf Hitler",
"Adolf Hitler",
"Adolf Hitler",
"Adolf Hitler",
"Arthur C. Clarke",
"Bob Dole",
"1 Corinthians 11:14",
"John 15:18",
"Job 13:5 (NIV)",
"1 Timothy 2:12",
"USPS",
"Anonymous",
"Bill Gates",
"Winston Churchill"];
var greets = [
"Hello!",
"How are you today?",
"Nice meme!",
"Welcome!",
"How did you get here?",
"Hi, what's your name?",
"Help! I'm trapped!",
"Do you know where the lights are?",
"There is no spoon.",
"You found a startpage!" ];

// Gets weather for requested location, appends to page
function getWeather(location) {
	$.simpleWeather({
		location: location,
		success: function(weather) {
			$('.weather').html('In ' + weather.city + ', ' + weather.region + ', its ' + weather.currently + ',<br>it is ' + weather.temp + '&deg;' + weather.units.temp + ', with ' + weather.wind.speed + ' ' + weather.units.speed + ' winds blowing ' + weather.wind.direction);
		},
		error: function(error)   {
			$('.weather').html("Sorry, we've had issues gathering weather information.");
			console.log(error);
		}
	});
}

// Master refresh function; appends random greeting, quote, and background
function refreshStuffs() {
	var randNumQuotes = Math.floor((Math.random() * TOTAL_QUOTES));
	var randNumGreets = Math.floor((Math.random() * TOTAL_GREETINGS));
	$('.greeting').html(greets[randNumGreets]);
	$('.quote').html('<p>&ldquo;' + quotes[randNumQuotes] + '&rdquo;</p>' + '<cite><p><small>' + quoted[randNumQuotes] + '</small></p></cite>');
	//$('body').attr('class', function(i, c) {
	//	return c.replace(/(^|\s)bg\S+/g, '');
	//}).addClass('bg' + (randNum + 1));

	// Geolocates the user, otherwise defaulting to Hartford CT (2418244)
	if('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
	    	getWeather(position.coords.latitude + ',' + position.coords.longitude);
	  	});
	} else { getWeather(2418244); }
	
	
	
}

// Initializes main keyboard nav
function bindMousetraps() {
	$.each($('.parent'), function(i, val) {
		Mousetrap.bind($(val).children('span').text(), function(e) {
			console.log(val)
			$('a#' + $(val).attr('id')).toggleClass('active').next().slideToggle(200);

			$.each($(val).parent().find('.tab span'), function(i, val) {
				Mousetrap.bind($(val).text(), function(e) {
					window.location.href = $(val).parent().attr('href');
				});
			});

			Mousetrap.bind($(val).children('span').text(), function(e) {
				$('.subMenu').slideUp(200);
				$('li a').removeClass('active');
			});
		});
	});

	// Esc to close all tabs, leave secret mode
	Mousetrap.bind('esc', function(e) {
		//var randNum = Math.floor((Math.random() * TOTAL_PRESETS));
		//$('body').removeClass('rnbw').attr('class', function(i, c) {
		//	return c.replace(/(^|\s)bg\S+/g, '');
		//}).addClass('bg' + (randNum + 1));
		// $('.subMenu').slideUp(200);
		
		$('a#' + $(val).attr('id')).toggleClass('active').next().slideToggle(200);
		
		$('li a').removeClass('active');
		Mousetrap.reset();
		bindMousetraps();
		console.log('you escaped!');
		return false;
	});

	// Refreshes everything, and closes all cells
	Mousetrap.bind('space', function(e){
		$('.subMenu').slideUp(200);
		$('li a').removeClass('active');
		refreshStuffs();
		console.log('manually refreshed!');
		return false;
	});

	// SECRET PARTY MODE!!1! :D
	Mousetrap.bind('up up down down left right left right b a enter', function() {
		$('body').attr('class', function(i, c){
	    	return c.replace(/(^|\s)bg\S+/g, '');
		}).addClass('rnbw');
		console.log('PARTYYYYYYY :D');
	});
}



// Does everything on page load, sets it to auto-refresh every 30s
$(function() {
	$('.subMenu').hide();
	$('li:has(ul)').click(function(){
		$('ul', this).slideToggle(200);
		$('a.parent', this).toggleClass('active');
	});
	refreshStuffs();
	bindMousetraps();
	setInterval(function(){
		console.log('30s has passed, refreshing...');
		refreshStuffs();
		$('.subMenu').slideUp(200);
		$('li a').removeClass('active');
	}, 30000);
});



