

//  Scribol Hider 20140112.1510

//  Our objective here is not to prevent viewer tracking
//  because that is an entirely different animal.
//  This simply hides the “More from around the Web” adverts
//  that I find such a rude assault on my attention. 
//  <div data-yab-app=​"scribol-widget" 
//    class=​"scribol-widget widget hideOnMobile">​




//  SOURCE CODE FOR BOOKMARKLET

javascript: (function(){

	var f = function(){

		Array.prototype.slice.call(
			
			document.querySelectorAll( '.scribol-widget' ), 0
		
		).forEach( function( e ){

			e.style.display  = 'none'
			e.style.width    = '0'
			e.style.height   = '0'
			e.style.overflow = 'hidden'
			e.style.opacity  = '0'
		})
	}
	f()
	console.log( 'Ok. That should have hidden Scribol.' )	
	if( window.hideScribolLoop !== undefined ){

		window.clearInterval( window.hideScribolLoop )
	}
	window.hideScribolLoop = window.setInterval( f, 100 )

})()




//  COMPILED CODE FOR BOOKMARKLET

//  Create a new bookmark in your browser.
//  Name it whatever you want.
//  Copy and paste this in instead of a URL:

javascript:(function(){var f=function(){Array.prototype.slice.call(document.querySelectorAll('.scribol-widget'),0).forEach(function(e){e.style.display='none';e.style.width='0';e.style.height='0';e.style.overflow='hidden';e.style.opacity='0';})};f();console.log('Ok. That should have hidden Scribol.');if(window.hideScribolLoop!==undefined){window.clearInterval(window.hideScribolLoop)};window.hideScribolLoop=window.setInterval(f,100);})();




//  I’m busy. 
//  Who’s going to make this a browser extension? 
//  ;)



