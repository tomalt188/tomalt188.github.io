(function($) {
"use strict";

/*---------------------
  venobox
--------------------- */
	var veno_box = $('.venobox');
	veno_box.venobox();

/*----------------------------------------
	Skill js
------------------------------------------*/
	  
	$('.skillbar').each(function() {
		$(this).find('.skillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 5000);
	});	

	
/*------------------------------------
 search option
------------------------------------- */ 
    $('.search-option').hide();
    $(".main-search").on('click', function(){
        $('.search-option').animate({
            height:'toggle',
        });
    });
/*---------------------
 TOP Menu Stick
--------------------- */
var windows = $(window);
var sticky = $('#sticker');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 400) {
        sticky.removeClass('stick');
    }else{
        sticky.addClass('stick');
    }
});

/* -------------------------------------------------
Highlight the current section in the navigation bar
---------------------------------------------------- */
	
	var section = $('section'),
		navigation_links = $("#main-nav-wrap li a");
	
	section.waypoint ({
		handler: function(direction) {
			
			var active_section;
			active_section = $('section#' + this.element.id);
			
			if (direction === "up") active_section = active_section.prev();
			
			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');
			
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
			
		},offset: '25%'
	});
	

/*------------------------------- 
Smooth Scrolling
--------------------------------- */
	$('.smoothscroll').on('click', function(e) {
		
		e.preventDefault();
		
		var target = this.hash,
			$target = $(target);
		
		$('html, body').stop().animate({'scrollTop': $target.offset().top}, 800, 'swing', function() {
			window.location.hash = target;
		});
		
	});

/*----------------------------
 jQuery MeanMenu
------------------------------ */
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();
/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
    
/*----------------------------
 Counter js active
------------------------------ */
    var count = $('.counter');
    count.counterUp({
		delay: 40,
		time: 3000
	});
	
/*--------------------------
 collapse
---------------------------- */
	var panel_test = $('.panel-heading a');
	panel_test.on('click', function(){
		panel_test.removeClass('active');
		$(this).addClass('active');
	});
/*--------------------------
 Parallax
---------------------------- */	
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

/*--------------------------
 MagnificPopup
---------------------------- */	
    $('.video-play').magnificPopup({
        type: 'iframe'
    });


/*--------------------------
     slider carousel
---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

/*----------------------------
 isotope active
------------------------------ */
	// project start
    $(window).on("load",function() {
        var $container = $('.project-all');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.project-menu li a').on("click", function() {
            $('.project-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
/*---------------------
 Testimonial carousel
---------------------*/
    var review = $('.testimonial-carousel');
    review.owlCarousel({
		loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
})(jQuery);