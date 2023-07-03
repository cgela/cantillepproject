 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";


  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	$("#message-me").on("click", function(){
		alert('Message sent.');
		$("#user-message").val("");
	})

	$("#search").on("click", function(){
		let str = document.getElementById("to-search").value;
		str = str.replace(/\s/g, "");
		window.open(`https://www.google.com/search?q=${str}`);
		$("#to-search").val("");
		
	})

	var ancientText, middleText, modernText;
	ancientText = `<p style="text-align:center;font-size:30px;margin:70px 0;">ANCIENT PERIOD</p>
	<p>The history of science and technology in the ancient period is a fascinating journey that showcases the ingenuity and curiosity of early civilizations in their pursuit of knowledge and understanding of the natural world.</p>

	<p>In ancient Mesopotamia, one of the earliest cradles of civilization, significant scientific achievements emerged. The Mesopotamians made important contributions to astronomy, developing a complex system of celestial observations and creating the earliest known written astronomical records. They also developed advanced mathematical techniques, including the concept of the number zero and the base-60 numerical system that influenced later civilizations like the Greeks.</p>
	
	<p>In ancient Egypt, science and technology played a crucial role in various fields. The Egyptians had a deep understanding of mathematics and engineering, as demonstrated by the construction of monumental structures like the pyramids. They also developed sophisticated techniques in medicine and surgery, as evidenced by the knowledge preserved in papyrus scrolls such as the Edwin Smith Papyrus, which contains detailed descriptions of surgical procedures.</p>
	
	<p>Ancient Greece is widely regarded as a pivotal period in the history of science and technology. Greek philosophers and scientists laid the foundation for many disciplines, such as mathematics, physics, biology, and medicine. Prominent figures like Pythagoras, Euclid, Archimedes, and Hippocrates made groundbreaking contributions that continue to shape these fields today. The Greeks also developed revolutionary concepts, including the heliocentric model of the universe proposed by Aristarchus and the systematic approach to scientific inquiry exemplified by Aristotle.</p>
	
	<p>In ancient China, notable advancements in various scientific and technological domains occurred. Chinese scholars made significant progress in areas such as astronomy, metallurgy, agriculture, and medicine. Inventions like the compass, papermaking, gunpowder, and movable type printing revolutionized various aspects of society, influencing not only China but also the entire world.</p>
	
	<p>The ancient period also witnessed scientific and technological achievements in other regions, such as the Indus Valley civilization in South Asia, which had advanced knowledge of urban planning and sanitation systems, and the Mayans in Mesoamerica, who developed precise calendars and made significant strides in mathematics and astronomy.</p>
	
	<p>Overall, the history of science and technology in the ancient period demonstrates the remarkable intellectual prowess and innovative spirit of early civilizations. Their discoveries and inventions laid the groundwork for future advancements, shaping the trajectory of human progress and setting the stage for the scientific and technological marvels of the modern age.</p>

	<p>The ancient period was marked by several remarkable inventions that laid the foundation for human civilization and continue to influence our lives today. Here are some notable inventions from that era:</p>

	<div class="content-list">
		<img src="images/ancient/1.jpg">
		<h2 style="margin:30px 0;color:#000;">Wheel</h2>
		<p>The invention of the wheel, dating back to around 3500 BCE, revolutionized transportation and remains one of the most significant inventions in history.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/2.jpg">
		<h2 style="margin:30px 0;color:#000;">Writing Systems</h2>
		<p>Various ancient civilizations developed their writing systems, such as cuneiform in Mesopotamia, hieroglyphics in Egypt, and hieroglyphs in Mesoamerica, which enabled the recording and communication of information.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/3.png">
		<h2 style="margin:30px 0;color:#000;">Mathematics</h2>
		<p> Ancient cultures made significant strides in mathematics, including the concept of zero by the ancient Babylonians, the Pythagorean theorem by the Greeks, and the positional numeral system by the ancient Indians.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/4.jpg">
		<h2 style="margin:30px 0;color:#000;">Iron Metallurgy</h2>
		<p> The discovery and widespread use of iron metallurgy, starting around 1500 BCE, allowed for stronger and more durable tools and weapons, transforming various aspects of ancient societies.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/5.jpg">
		<h2 style="margin:30px 0;color:#000;">Paper</h2>
		<p> Ancient Chinese inventors developed papermaking techniques around 105 CE, replacing more cumbersome writing materials like bamboo and silk and enabling the widespread dissemination of knowledge.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/6.png">
		<h2 style="margin:30px 0;color:#000;">Compass</h2>
		<p> Invented in ancient China during the Han Dynasty (2nd century BCE), the compass revolutionized navigation and had a profound impact on exploration and trade.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/7.png">
		<h2 style="margin:30px 0;color:#000;">Archimedes' Screw</h2>
		<p> Developed by the ancient Greek scientist Archimedes, this device allowed for the efficient lifting of water and was used for irrigation and drainage purposes.
		</p>
	</div>
	<div class="content-list">
		<img src="images/ancient/8.png">
		<h2 style="margin:30px 0;color:#000;">Calendar Systems</h2>
		<p> Ancient civilizations, such as the Mayans and Egyptians, devised complex calendar systems to track time, celestial events, and agricultural cycles.
		</p>
	</div>
	
	<p style="margin-top:50px;">These inventions from the ancient period laid the groundwork for human progress, shaping subsequent developments in science, technology, and civilization. They exemplify the ingenuity and resourcefulness of our ancestors and continue to have a lasting impact on our lives today.</p>`;

	middleText = `<p style="text-align:center;font-size:30px;margin:70px 0;">MIDDLE AGE (DARK AGES)</p>
	<p>During the Middle Ages, from the 5th to the 15th century, science and technology underwent significant developments and transformations. This period is often referred to as the "Medieval period" or the "Dark Ages," characterized by a decline in the scientific achievements of the ancient world and a shift in focus towards religious and philosophical pursuits.</p>

	<p>One of the defining features of the Middle Ages was the dominance of the Catholic Church, which exerted significant influence over intellectual and scientific endeavors. Scientific inquiry was often guided by religious principles, and the pursuit of knowledge was primarily aimed at supporting theological doctrines. Scholars such as Thomas Aquinas sought to reconcile reason and faith, incorporating Aristotelian philosophy into Christian theology.</p>
	
	<p>However, despite the dominance of religious authority, the Middle Ages witnessed important advancements in various fields. The study of medicine and anatomy progressed, with notable figures like Ibn Sina (Avicenna) in the Islamic world and the establishment of medical schools in Salerno and Montpellier in Europe. These developments contributed to the accumulation of medical knowledge and the refinement of medical practices.</p>
	
	<p>In the field of mathematics, scholars like Fibonacci introduced Hindu-Arabic numerals to Europe, which revolutionized mathematical calculations and paved the way for the development of algebra and other branches of mathematics.</p>
	
	<p>Technological advancements were also made during the Middle Ages. The widespread use of windmills for grinding grain and pumping water increased productivity, while the introduction of the heavy plow improved agricultural practices. The invention of the mechanical clock in the 13th century provided a more precise means of measuring time and had a significant impact on various aspects of society.</p>
	
	<p>Additionally, the construction of magnificent cathedrals and castles showcased remarkable architectural achievements, utilizing innovative techniques such as pointed arches and flying buttresses.</p>
	
	<p>Overall, while the Middle Ages are often associated with a relative decline in scientific and technological progress compared to the preceding and succeeding periods, there were still notable advancements in various fields that laid the groundwork for future developments in science and technology.</p>

	<p>The Middle Ages were marked by several notable inventions and technological advancements. Here are a few examples:</p>
	<div class="content-list">
		<img src="images/middle/1.jpg">
		<h2 style="margin:30px 0;color:#000;">The Printing Press</h2>
		<p> Invented by Johannes Gutenberg around 1440, the printing press revolutionized the dissemination of knowledge by enabling the mass production of books, leading to a significant increase in literacy and the spread of ideas.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/2.png">
		<h2 style="margin:30px 0;color:#000;">Mechanical Clocks</h2>
		<p> The development of mechanical clocks in the 14th century introduced a precise and reliable method of timekeeping, which had a profound impact on various aspects of society, such as trade, navigation, and the organization of daily life.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/3.jpg">
		<h2 style="margin:30px 0;color:#000;">Gunpowder</h2>
		<p> While gunpowder had been known in ancient times, it was during the Middle Ages that its use in weaponry, such as cannons and  firearms, became more widespread. This innovation had a profound impact on warfare and the balance of power.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/4.png">
		<h2 style="margin:30px 0;color:#000;">Windmills</h2>
		<p> Windmills were widely used during the Middle Ages for various purposes, such as grinding grain, pumping water, and powering machinery. They played a crucial role in improving agricultural productivity and industrial processes.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/5.jpg">
		<h2 style="margin:30px 0;color:#000;">Eyeglasses</h2>
		<p> Developed in the late 13th century, eyeglasses revolutionized vision correction and had a significant impact on fields such as medicine, reading, and craftsmanship.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/6.jpg">
		<h2 style="margin:30px 0;color:#000;">Astrolabe</h2>
		<p> The astrolabe, an ancient astronomical instrument, saw advancements during the Middle Ages. It allowed astronomers and navigators to determine the positions of celestial objects and helped in navigation and timekeeping.
		</p>
	</div>
	<div class="content-list">
		<img src="images/middle/7.jpg">
		<h2 style="margin:30px 0;color:#000;">Gothic Architecture</h2>
		<p> The Middle Ages witnessed the development of Gothic architecture, characterized by pointed arches, ribbed vaults, and flying buttresses. These architectural innovations allowed for taller and more intricate building designs, seen in cathedrals and castles.
		</p>
	</div>
	`;

	modernText = `
	<p style="text-align:center;font-size:30px;margin:70px 0;">MODERN AGES</p>
	<p>The modern age, starting from the 18th century onwards, has seen an explosion of inventions and technological advancements that have shaped the world we live in today. Here are some notable inventions of the modern age:</p>
	<div class="content-list">
		<img src="images/modern/1.jpg">
		<h2 style="margin:30px 0;color:#000;">Steam Engine</h2>
		<p> Invented by James Watt in the late 18th century, the steam engine powered the Industrial Revolution, transforming industries such as manufacturing, transportation, and agriculture.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/2.jpg">
		<h2 style="margin:30px 0;color:#000;">Telegraph</h2>
		<p> Developed by Samuel Morse in the early 19th century, the telegraph revolutionized long-distance communication by enabling the transmission of messages through electrical signals, laying the foundation for future advancements in telecommunications.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/3.jpg">
		<h2 style="margin:30px 0;color:#000;">Telephone</h2>
		<p> Invented by Alexander Graham Bell in 1876, the telephone allowed for real-time voice communication over long distances, revolutionizing personal and business communication.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/4.jpg">
		<h2 style="margin:30px 0;color:#000;">Electricity</h2>
		<p> The harnessing and widespread use of electricity in the late 19th century transformed society, powering innovations such as electric lighting, appliances, and the development of electrical infrastructure.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/5.jpg">
		<h2 style="margin:30px 0;color:#000;">Automobile</h2>
		<p>  The invention of the automobile in the late 19th century, notably by Karl Benz and Henry Ford, revolutionized transportation, enabling personal mobility on a massive scale and leading to the development of modern road systems.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/6.jpg">
		<h2 style="margin:30px 0;color:#000;">Airplane</h2>
		<p> The Wright brothers, Orville and Wilbur, achieved powered flight in 1903, ushering in the era of aviation, which has transformed travel, trade, and global connectivity. 
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/7.png">
		<h2 style="margin:30px 0;color:#000;">Computer</h2>
		<p> The development of electronic computers in the mid-20th century, including pioneers like Alan Turing and John von Neumann, led to the digital revolution and the emergence of modern computing technologies that have transformed almost every aspect of human life.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/8.jpg">
		<h2 style="margin:30px 0;color:#000;">Internet</h2>
		<p>The creation of the internet in the late 20th century revolutionized global communication and information access, connecting people worldwide and enabling rapid sharing of knowledge and resources.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/9.jpg">
		<h2 style="margin:30px 0;color:#000;">Mobile Phones</h2>
		<p>The invention and proliferation of mobile phones in the late 20th century transformed personal communication, allowing people to stay connected and access information on the go.
		</p>
	</div>
	<div class="content-list">
		<img src="images/modern/10.jpg">
		<h2 style="margin:30px 0;color:#000;">Renewable Energy Technologies</h2>
		<p>In recent decades, there have been significant advancements in renewable energy technologies such as solar power, wind power, and electric vehicles, driving the transition towards a more sustainable and environmentally friendly future.
		</p>
	</div>
	<p style="margin-top:50px;">These inventions are just a glimpse of the countless innovations that have shaped the modern age, showcasing humanity's ability to push the boundaries of knowledge, improve living standards, and create transformative technologies.</p>
	`;
	

	$(".read-more-button").on("click", function(){
		let content;

		if ($(this).hasClass("ancient-period")) {
			content = ancientText;
		} else if ($(this).hasClass("middle-age")) {
			content = middleText;
		} else if ($(this).hasClass("modern-ages")) {
			content = modernText;
		}

		document.body.insertAdjacentHTML("afterbegin", `
		<div class="overlay" id="overlay"></div>`)
		$("html").css("overflow-y", "hidden");
		document.getElementById("overlay").insertAdjacentHTML("afterbegin", `
		<div class="content-wrapper" id="content-wrapper" onscroll="test()">
		
		<div>
		<a id="back"><u>Back</u></a>
		${content}
		</div>
		</div>`);

		//scroll function..
		let container = document.getElementById("content-wrapper");
		var prev;
		container.onscroll = function() {
			var current = container.scrollTop;
			if (current > prev) {
				$("#back").css({
					"position" : "absolute",
					"left": "40px",
  					"top": "20px"
				})
			} else {
				
				$("#back").css({
					"position" : "fixed",
					"left" : "8%",
					"top" : "3%"
				})
			}
			prev = current;
		}
		//
		$(".overlay").on("click", function(){
			$(this).remove();
			$("html").css("overflow-y", "scroll");
		})
		$("#content-wrapper").on("click", function(event){
			event.stopPropagation();
		})
		$("#back").on("click", function(){
			$(".overlay").remove();
			$("html").css("overflow-y", "scroll");
		})
	})

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {

		if ( $('.hero-slide').length > 0 ) {
			$('.hero-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
			});
		}

		if ( $('.owl-slide-3').length > 0 ) {
			$('.owl-slide-3').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						items: 2
					},
					1000:{
						items: 2
					},
					1200:{
						items: 3
					}
				}
			});
		}

		if ( $('.owl-slide').length > 0 ) {
			$('.owl-slide').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
		    margin: 30,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
//   OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
	siteScroll();
	

	$(function () {
		// $("#bgndVideo").YTPlayer();
	});

});