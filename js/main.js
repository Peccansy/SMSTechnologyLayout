$( document ).ready( function() {

    'use strict';
    var count = 0;    
    // Responsive navigation
    // -------------------------------------------------- 

    $( '.navbar-nav-toggle' ).on( 'click', function() { 

    		if($('.navbar-nav-toggle').hasClass('open') & $('.row').css('position') == 'fixed' ){
    				
    					$('.row').addClass('mobile-navbar');    					 				 
    			}


    		if($('.navbar-nav-toggle').hasClass('open') & $(window).scrollTop()<=$('.row').height() ){
    				
    					$('.row').removeClass('mobile-navbar');	   				 
    			}   	   		

        	if($('.navbar-nav-toggle').hasClass('open')) {        		
        	
            	$( 'header nav ul' ).slideUp(function() {

            		$('.navbar-nav-toggle').removeClass('open');
            		$( 'header nav ul' ).removeClass( 'nav-open' );	
            		

            	} );

            	
            } else {
          
            		$( 'header nav ul' ).slideDown();
            		$('.row').addClass('mobile-navbar');
            		$( 'header nav ul' ).addClass( 'nav-open' );
            		$('.navbar-nav-toggle').addClass('open');

            };
            
        
    } );    
    // Scroll  function
    //------------------------------------------------- 
    $(window).scroll(function(){

    if ($(window).width()<=675) {
        
    	if ( $(window).scrollTop()>$('.row').height() ) {
    		
    		if (count==0) {
    			$('.row').fadeOut(function(){    				
    				$('.row a img').addClass('logo-sm');    				  		   		
    				$('header .row').css('position','fixed');
    				$('header .row').addClass('mobile-navbar');    		
    			} );
    		};
    		$('.row').fadeIn('fast');    		
    		count = 1;
    		return (count);
    		   
    	} else {
    		$('header .row').css('position','inherit');
    		if(!$('.navbar-nav-toggle').hasClass('open')) {
    			$('header .row').removeClass('mobile-navbar');	
    		}    		
    		$('.row a img').removeClass('logo-sm'); 
    		count = 0;
    		return(count);
    	}

    } 
} );
    //Resize scroll
    //-------------------------------------------------
    $(window).resize(function() {

        if ($(window).width()>675) {

           // $('header .row').css('position','inherit');
            $('header .row').removeAttr('style');
            $('.row a img').removeClass('logo-sm');
            $('nav ul').removeAttr('style');  
        }
    } );

} );
