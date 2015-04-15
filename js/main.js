$(document).ready(function(){
	$('.sticky').positionSticky();

	$('body').animatescroll();

	$( '#jump-to-education' ).on( 'click', function() {
		$('#section4').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});

	$( '.jump-to-section' ).on( 'click', function() {
		var section = $(this).attr('data-section');

		$( section ).animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
})
