<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Start</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>  
		<script> var jq_1_4_2 = jQuery.noConflict(); </script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>
	</head>

	<body>
		<?php
			function GetServerStatus($site, $port)
			{
			$status = array("<div class='online'>Online</div>", "<div class='offline'>Offline</div>");
			$fp = @fsockopen($site, $port, $errno, $errstr, .5);
			if (!$fp) {
				return $status[1];
			} else  { return $status[0];}
			}
		?>	
		
		<div id="background_cycler" >
		<script type="text/javascript">
		jq_1_4_2('#background_cycler').hide();//hide the background while the images load, ready to fade in later
		</script>

		<div class="active" style="background-image:url(backgrounds/Eva-Tree-Wallpaper-Autumn.jpg)"></div>
		<div style="background-image:url(backgrounds/Eva-Tree-Wallpaper-Winter.jpg)"></div>
		<div style="background-image:url(backgrounds/Eva-Tree-Wallpaper-Spring.jpg)"></div>
		<div style="background-image:url(backgrounds/Eva-Tree-Wallpaper-Summer.jpg)"></div>
		</div>
		
		<script type="text/javascript">
			function cycleImages(){
				var jq_1_4_2active = jq_1_4_2('#background_cycler .active');
				var jq_1_4_2next = (jq_1_4_2('#background_cycler .active').next().length > 0) ? jq_1_4_2('#background_cycler .active').next() : jq_1_4_2('#background_cycler div:first');
				jq_1_4_2next.css('z-index',2);//move the next image up the pile
					jq_1_4_2active.fadeOut(1500,function(){//fade out the top image
					jq_1_4_2active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
				jq_1_4_2next.css('z-index',3).addClass('active');//make the next image the top one
				});
			}

			jq_1_4_2(window).load(function(){
				jq_1_4_2('#background_cycler').fadeIn(1500); //fade the background back in once all the images are loaded
				// run every 7s
				setInterval('cycleImages()', 30000);
			})
		</script>
		
		
		
		<div class="sidebar">
			<div class="boxHeader" id="boxHeader">Services Statuses</div>
				<ul> 
					<li><div><span><a class="plain" href="http://10.20.30.3/admin/index.php"><strong>10.20.30.3 - RPi-Hole</strong></a></span><?php echo GetServerStatus('10.20.30.3',80); ?></div></li>
					<li><div><span><a class="plain" href="https://freenas.hbh7.com"><strong>10.20.30.8 - FreeNAS</strong></a></span><?php echo GetServerStatus('10.20.30.8',80); ?></div></li>
					<li><div><span><a class="plain" href="https://hbh7.com:8006"><strong>10.20.31.1 - Proxmox</strong></a></span><?php echo GetServerStatus('10.20.31.1',8006); ?></div></li>
					<li><div><span><a class="plain" href="http://sandstorm.hbh7.com"><strong>10.20.31.100 - SandStorm</strong></a></span><?php echo GetServerStatus('10.20.31.100',6080); ?></div></li>
					<li><div><span><a class="plain" href="https://hbh7.com"><strong>10.20.31.101 - Webserver</strong></a></span><?php echo GetServerStatus('10.20.31.101',80); ?></div></li>
					<li><div><span><a class="plain" href="http://sonerezh.hbh7.com"><strong>10.20.31.102 - Sonerezh</strong></a></span><?php echo GetServerStatus('10.20.31.102',80); ?></div></li>
					<li><div><span><a class="plain" href="http://ampache.hbh7.com"><strong>10.20.31.103 - Ampache</strong></a></span><?php echo GetServerStatus('10.20.31.103',80); ?></div></li>
					<li><div><span><a class="plain" href="http://subsonic.hbh7.com"><strong>10.20.31.104 - Subsonic</strong></a></span><?php echo GetServerStatus('10.20.31.104',80); ?></div></li>
					<li><div><span><a class="plain" href="https://onlyoffice.hbh7.com"><strong>10.20.31.111 - OnlyOffice</strong></a></span><?php echo GetServerStatus('10.20.31.111',80); ?></div></li>
				</ul>
			</div>

		<div class="centerpiece">
			<ul class="newBox">		
				<p class="center"><span class="greeting"></span><br /> <span class="weather">Trying to load weather information...</span></p>
				<div class="left">
					<li><a id="parent1" class="parentLeft" href="javascript:void(0)">Information</a>
						<ul class="subMenu">
							<li><a class="tab tab1" href="http://reddit.com">Reddit</a></li>
							<li><a class="tab tab1" href="http://arstechnica.com">Ars Technica</a></li>
							<li><a class="tab tab1" href="http://news.ycombinator.com">Hacker News</a></li>
							<li><a class="tab tab1" href="http://www.gmail.com">Gmail</a></li>
							<li><a class="tab tab1" href="https://www.icloud.com/#reminders">iCloud Reminders</a></li>
							<li><a class="tab tab1" href="https://github.com/hbh7?tab=repositories">hbh7's Github Repos</a></li>
						</ul>
					</li>
					<li><a id="parent2" class="parentLeft" href="javascript:void(0)">Useful</a>
						<ul class="subMenu">
							<li><a class="tab tab2" href="https://www.dominos.com/en/">Domino's Pizza</a></li>
							<li><a class="tab tab2" href="https://www.dropbox.com/s/8xbpp2d0b9x8mql/wish%20list.txt">My Wish List</a></li>
							<li><a class="tab tab2" href="https://github.com/hbh7/startpage">This Startpage on Github</a></li>
						</ul>
					</li>
					<li><a id="parent3" class="parentLeft" href="javascript:void(0)">Hobby</a>
						<ul class="subMenu">
							<li><a class="tab tab3" href="http://www.twitch.tv/monstercat">Monstercat Twitch</a></li>
							<li><a class="tab tab3" href="https://hbh7.com/p/">Glype Proxy</a></li>
							<li><a class="tab tab3" href="https://github.com/">Github</a></li>
							<li><a class="tab tab3" href="https://amazon.com/">Amazon</a></li>
							<li><a class="tab tab3" href="https://ebay.com/">eBay</a></li>
							<li><a class="tab tab3" href="http://youtube.com">Youtube</a></li>
							<li><a class="tab tab3" href="http://vessel.com">Vessel</a></li>
						</ul>
					</li>
				</div>
				<div class="right">
					<li><a id="parent4" class="parentRight" href="javascript:void(0)">Projects</a>
						<ul class="subMenu">
							<li><a class="tab tab4" href="http://school.hbh7.com/westwardexpansion">hbh7 - Westward Expansion</a></li>
							<li><a class="tab tab4" href="https://hbh7.com/wordpress/">hbh7 - Random Wordpress</a></li>
							<li><a class="tab tab4" href="http://westwardexpansion.eva.school.hbh7.com/">Eva - Westward Expansion</a></li>
							<li><a class="tab tab4" href="http://hbh7.com/eva/beijing/">Eva - Beijing</a></li>
							<li><a class="tab tab4" href="http://based-art.hbh7.com/">Eva - Based Art</a></li>
						</ul>
					</li>
					<li><a id="parent5" class="parentRight" href="javascript:void(0)">Good Memes</a>
						<ul class="subMenu">
							<li><a class="tab tab5" href="http://www.food.com/recipe/best-meatballs-203145">The Best Meatballs</a></li>
							<li><a class="tab tab5" href="http://thundercandraw.deviantart.com/">Eva's Deviant Poptart</a></li>
							<li><a class="tab tab5" href="http://uniqcode.com/typewriter/">Typewriter Simulator</a>
							<li><a class="tab tab5" href="http://webwit.nl/input/kbsim/">Model M Simulator</a></li>

							<li><a class="tab tab5" href="http://addictivearcade.weebly.com/">Addictive Arcade</a></li>

							<li><a class="tab tab5" href="http://www.tickcounter.com/countdown/1465409580000/america-new_york/owdhms/FFFFFF3B5998000000FF0000/">Days Left of School</a></li>
						</ul>
					</li>
					<li><a id="parent6" class="parentRight" href="javascript:void(0)">School</a>
						<ul class="subMenu">
							<li><a class="tab tab6" href="http://pathways.finalsite.com/">Pathways</a></li>
							<li><a class="tab tab6" href="https://powerschool.hartfordschools.org/public/home.html">Powerschool</a></li>
							<li><a class="tab tab6" href="https://docs.google.com">Google Docs</a>
							<li><a class="tab tab6" href="https://drive.google.com">Google Drive</a></li>
							<li><a class="tab tab6" href="https://www.connexus.com/login.aspx">Connexus</a>
							<li><a class="tab tab6" href="https://translate.google.com/">Google Translate</a></li>
							<li><a class="tab tab6" href="https://connection.naviance.com/family-connection/auth/login/?hsid=hphspatd">Naviance</a></li>
						</ul>
					</li>


				</div>
				<div class="clear"></div>
				<p class="center quote"></p>
		
				<div class="search">
					<form class="searchForm" method="GET" action="https://google.com/search">
						<input class="searchInput" type="text" name="q" placeholder="The Entire Google at your Fingertips" autofocus>
					</form>
				</div>
			</ul>
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js"></script>
	<script src="script.js"></script>
	
	
	</body>
	
	
</html>
