$(document).ready(function(){
	$('.sticky').positionSticky();

	$('body').animatescroll();

	$( '#jump-to-education' ).on( 'click', function() {
		$('#section4').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
})
