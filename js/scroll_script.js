	$(document).ready(function() {
	var NavY = $('.Wentylacja').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > (NavY - 100)) { 
		$('.Klimatyzacja_Menu').addClass('sticky');
	} else {
		$('.Klimatyzacja_Menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});
	
	


	
		$(document).ready(function() {
	var NavY = $('.Wentylacja').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > (NavY - 100)) { 
		$('.mobile-menu').addClass('sticky');
	} else {
		$('.mobile-menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});
	
	
	
	
	
			$(document).ready(function() {
	var NavY = $('.Wentylacja').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > (NavY - 100)) { 
		$('.Banner_logo_mobile').addClass('sticky');
	} else {
		$('.Banner_logo_mobile').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});