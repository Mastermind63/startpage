var TOTAL_PRESETS = 10;
var TOTAL_QUOTES = 19; 
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
"Yeah I pronounce it 'pasketti'. Why? Is there another way?",
"Failure is not an option -- it comes bundled with Windows.",
"My software never has bugs. It just develops random features.",
"App Ruined",
"You've got questions. We've got dancing paperclips.",
"Any fool can use a computer. Many do.",
"If something is free, you are the product.",
"Bailing out, you are on your own now. Good luck."];
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
"Winston Churchill",
"Anonymous",
"Anonymous",
"hbh7",
"Microsoft",
"Anonymous",
"Anonymous",
"Arch Linux"];
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
		cycleImages()
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








var fireConfig = {
  maxParticles: 5000,
  spawnDelay: 1,
  lifeSpan: {
    min: 1500,
    max: 3000
  },
  alpha: {
    min: 0.4,
    max: 0.6
  },
  alphaDecay: {
    min: 0.4,
    max: 1
  },
  colour: ["#9C2A00", "#9E2F03", "#9E1B09"],
  radius: {
    min: 5,
    max: 10
  },
  radiusDecay: {
    min: 0,
    max: 3
  },
  direction: {
    min: -Math.PI / 2 - 0.3,
    max: -Math.PI / 2 + 0.3
  },
  speed: {
    min: 50,
    max: 200
  }
};

var smokeConfig = {
  maxParticles: 500,
  spawnDelay: 10,
  lifeSpan: {
    min: 6000,
    max: 10000
  },
  alpha: {
    min: 0.1,
    max: 0.25
  },
  alphaDecay: {
    min: 0.01,
    max: 0.05
  },
  colour: ["#1A1A1A", "#0A0A0A", "#2B2B2B"],
  radius: {
    min: 5,
    max: 10
  },
  radiusDecay: {
    min: -2,
    max: -10
  },
  direction: {
    min: -Math.PI / 2 - 0.6,
    max: -Math.PI / 2 + 0.6
  },
  speed: {
    min: 50,
    max: 100
  }
};

var can = document.querySelector("canvas"),
    ctx = can.getContext("2d"),
    mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    },
    fireParticles = [],
    smokeParticles = [];

window.addEventListener("resize", resize);
document.body.addEventListener("mousemove", mouseMove);
document.body.addEventListener("touchmove", touchMove);
document.body.addEventListener("mouseout", mouseOut);
document.body.addEventListener("touchend", mouseOut);
resize();
requestAnimationFrame(update);

function createFireParticle() {
  var p = {
    lifeSpan: getRandom(fireConfig.lifeSpan),
    life: 0,
    alpha: getRandom(fireConfig.alpha),
    alphaDecay: getRandom(fireConfig.alphaDecay),
    colour: getColour(fireConfig.colour),
    x: mouse.x,
    y: mouse.y,
    radius: getRandom(fireConfig.radius),
    radiusDecay: getRandom(fireConfig.radiusDecay),
    direction: getRandom(fireConfig.direction),
    speed: getRandom(fireConfig.speed)
  };
  
  fireParticles.push(p);
}

function createSmokeParticle() {
  var p = {
    lifeSpan: getRandom(smokeConfig.lifeSpan),
    life: 0,
    alpha: getRandom(smokeConfig.alpha),
    alphaDecay: getRandom(smokeConfig.alphaDecay),
    colour: getColour(smokeConfig.colour),
    x: mouse.x,
    y: mouse.y - smokeConfig.radius.min,
    radius: getRandom(smokeConfig.radius),
    radiusDecay: getRandom(smokeConfig.radiusDecay),
    direction: getRandom(smokeConfig.direction),
    speed: getRandom(smokeConfig.speed)
  };
  
  smokeParticles.push(p);
}

function getRandom(o) {
  return Math.random() * (o.max - o.min) + o.min;
}

function getColour(a) {
  return a[Math.floor(Math.random() * a.length)];
}

var lastTime = null,
    delta = 0,
    fireSpawnTimer = 0,
    smokeSpawnTimer = 0;
function update(timestamp) {
  if (lastTime === null) lastTime = timestamp;
  delta = timestamp - lastTime;
  lastTime = timestamp;
  fireSpawnTimer += delta;
  smokeSpawnTimer += delta;
  
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#000";
  ctx.globalAlpha = 1;
  ctx.fillRect(0, 0, can.width, can.height);
  
  var p;
  for (var i=fireParticles.length-1; i>=0; i--) {
    p = fireParticles[i];
    
    p.life += delta;
    if (p.life >= p.lifeSpan) {
      fireParticles.splice(i, 1);
      continue;
    }
    
    p.alpha -= p.alphaDecay * delta / 1000;
    if (p.alpha <= 0) {
      fireParticles.splice(i, 1);
      continue;
    }
    
    p.radius -= p.radiusDecay * delta / 1000;
    if (p.radius <= 0) {
      fireParticles.splice(i, 1);
      continue;
    }
    
    p.x += p.speed * Math.cos(p.direction) * delta / 1000;
    p.y += p.speed * Math.sin(p.direction) * delta / 1000;
  }
  
  for (var i=smokeParticles.length-1; i>=0; i--) {
    p = smokeParticles[i];
    
    p.life += delta;
    if (p.life >= p.lifeSpan) {
      smokeParticles.splice(i, 1);
      continue;
    }
    
    p.alpha -= p.alphaDecay * delta / 1000;
    if (p.alpha <= 0) {
      smokeParticles.splice(i, 1);
      continue;
    }
    
    p.radius -= p.radiusDecay * delta / 1000;
    if (p.radius <= 0) {
      smokeParticles.splice(i, 1);
      continue;
    }
    
    p.x += p.speed * Math.cos(p.direction) * delta / 1000;
    p.y += p.speed * Math.sin(p.direction) * delta / 1000;
  }
  
  while (fireParticles.length < fireConfig.maxParticles && fireSpawnTimer >= fireConfig.spawnDelay) {
    createFireParticle();
    fireSpawnTimer -= fireConfig.spawnDelay;
  }
  
  while (smokeParticles.length < smokeConfig.maxParticles && smokeSpawnTimer >= smokeConfig.spawnDelay) {
    createSmokeParticle();
    smokeSpawnTimer -= smokeConfig.spawnDelay;
  }
  
  for (var i=0; i<smokeParticles.length; i++) {
    p = smokeParticles[i];
    ctx.fillStyle = p.colour;
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  ctx.globalCompositeOperation = "lighter";
  for (var i=0; i<fireParticles.length; i++) {
    p = fireParticles[i];
    ctx.fillStyle = p.colour;
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  requestAnimationFrame(update);
}



var body = document.body,
    html = document.documentElement;






function resize() {
  can.width = 280;
  
  
  
  var body = document.body, html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  height = height-510 
  
  
  var myElement = document.querySelector("#fireCanvas");
  myElement.style.height = height;
  can.height = height;
  console.log(height)
  mouse.x = 280;
  mouse.y = 280;
  
}

function mouseMove(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY-200;
}

function touchMove(e) {
  e.preventDefault();
  if (e.changedTouches.length === 0) return;
  mouse.x = e.changedTouches[0].pageX;
  mouse.y = e.changedTouches[0].pageY;
}

function mouseOut() {
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;
}



