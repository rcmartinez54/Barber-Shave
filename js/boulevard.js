$(document).ready(function() {

	// (function () {
	// 	$('#hero img').fadeIn(500, function () {
	// 		$('#hero img').delay(1000).fadeIn(500);
	// 	});
	// })();

	$(window).scroll(function() {
		if($(document).scrollTop() > 300) {
			$("#main .photo img").fadeIn(800);
		}
		if($(document).scrollTop() > 800) {
			$("#last-main div").fadeIn(5000);
		}
		// if($(document).scrollTop() > 800) {
			
		// }		
	});

	(function () {
		$('#under-main .awards h2').fadeIn(500, function () {
			$('#under-main .awards ul').delay(1000).fadeIn(500);
		});
	})();
});