(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('.primary-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "991",
		meanRevealPosition: "right",
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".sticky");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 2) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	/*------------------------------------
        expertise-slider
	--------------------------------------*/
	$('.expertise-slider').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		dots:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})

	// Isotope--------------------------------------
	var $grid = $('.isotope').isotope({
		itemSelector: '.isotope-item',
		percentPosition: true,
		masonry: {
		  columnWidth: 1
		}
	  })

	  // filter items on button click
	$('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
  
	// change is-checked class on buttons
	$('.filter-button').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.active').removeClass('active');
		  $( this ).addClass('active');
		});
	  });

	   // Magnific Popup
	  $('.test-popup-link').magnificPopup({
		type: 'image'
		// other options
	  });



	  /*------------------------------------
        Testimonials-slider
	--------------------------------------*/
	$('.testimonial-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	  /*------------------------------------
        Brand-slider
	--------------------------------------*/
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

})(jQuery);
