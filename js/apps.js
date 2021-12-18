/*!

*/

(function() {
	"use strict";
	
	$(document).ready(function() {
		/* Mobile Menu */
		var $mobileMenu = $('.primary-nav').clone();
		$mobileMenu.appendTo('#mobile-nav');

		$('#mobile-nav > ul').each(function() {
            var navContainer = $(this);
			navContainer.removeAttr('class');
			navContainer.find('*').removeAttr('class');
        });;

		$('#mobile-nav').mmenu({
			extensions 	: [ 'effect-panels-slide-100', 'effect-listitems-slide', 'effect-menu-slide', 'border-offset', 'pagedim-black' ],
			navbars: [
			{
				content: ['<a href="#"><span class="icon icon-sm icon-facebook-circle m-x-auto"></span></a>', '<a href="#"><span class="icon icon-sm icon-twitter-circle m-x-auto"></span></a>', '<a href="#"><span class="icon icon-sm icon-instagram-circle m-x-auto"></span></a>']
			}
			],
		});

		var API = $('#mobile-nav').data('mmenu');
		$("#mmenu-trigger").click(function() {
			API.open();
		});

		/* Not clickable item */
		$('.primary-nav li a.not-clickable').on('click tap', function(e) {
			e.preventDefault();
		});

		/* Sub Menu & dropdown */
		$('.primary-nav > li.has-children, .nav > li.has-dropdown').each(function() {
            var $this = $(this);
			var $thisLink = $this.find('> .nav-link');
						
			$thisLink.on('mouseenter tap', function(e){
				var $this = $(this);

				if ( e.type == 'tap' ) e.stopPropagation();

				if ( $this.parent('li').length > 0 ) {
					var $thisParent = $this.parent();
				} else {
					var $thisParent = $this;
				}

				$thisParent.addClass('item-hovered');
			});
			
			$this.on('mouseleave', function() {
				$this.removeClass('item-hovered');
			});
        });

		$('#topCart').lightSlider({
			gallery: false,
			item: 2,
			thumbItem: 0,
			slideMargin: 0,
			vertical: true,
			verticalHeight: 250,
			speed: 600,
			loop: false,
			pager: false,
		});

		/* Subscribe Modal
		if (!Cookies.get('subscribeModal')) {
			setTimeout(function() {
				$('#subscribeModal').modal();
			}, 2000);
		}
		// to set expired less than a day
		var subscribeExpired = new Date(new Date().getTime() + 5 * 60 * 1000); // 5 min
		$('#subscribeModal').on('shown.bs.modal', function () {
			// bootstrap modal callback function
			// set cookie
			Cookies.set('subscribeModal', 'valid', { expires: subscribeExpired, path: "/" }); // need to set the path to fix a FF bug
		});*/

		/* Cart Dropdown 
		$('.mini-nav > li.has-dropdown').each(function() {
            var $this = $(this);
			var $thisLink = $this.find('> .mini-cart-toggle');
						
			$thisLink.on('mouseenter tap', function(e){
				var $this = $(this);

				if ( e.type == 'tap' ) e.stopPropagation();

				if ( $this.parent('li').length > 0 ) {
					var $thisParent = $this.parent();
				} else {
					var $thisParent = $this;
				}

				$thisParent.addClass('item-hovered');
			});
			
			$this.on('mouseleave', function() {
				$this.removeClass('item-hovered');
			});
        });*/
		
		/* Sticky Menu on scroll 
		var fissa = 0;
		$(window).scroll(function(){
			if ( $(window).width() > (992) ) {
				if ( $(window).scrollTop() > (236) ) {
					if( fissa == 0 ){
						fissa=1;
						$('.ob-navbar').addClass('navbar-fixed-top').css({'opacity':0,'top':-46, 'bottom': 'auto'}).animate({'opacity':1,'top':0},300,function(){});
					}
				}

				if ( $(window).scrollTop() < (236) ) {
					if ( fissa==1 ){
						fissa = 0;
						$('.ob-main-menu').animate({'opacity':0,'top':-46},200,function(){
							$('.ob-navbar').removeClass('navbar-fixed-top').css({'top':'auto', 'bottom':0});
							$('.ob-main-menu').animate({'opacity':1,'top':0},300)
						});
					}
				}
			}
		});*/

		/* Form Validation 
		$('#product-form').validator({focus:false}).on('submit',function(e){
			if (e.isDefaultPrevented()) {
				var $indicator = $(this).find('.has-error .custom-radio:not(.disabled) > .custom-control-indicator');
				$indicator.addClass('animated flash');
				setTimeout(function() {
					$indicator.removeClass('animated flash');
				},500);
			}
		});*/

    });
}(jQuery));
