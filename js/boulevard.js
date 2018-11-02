$(document).ready(function() {

	$(".hamburger").on('click', function() {
		
		let $nav = $('nav');		

		$(this).toggleClass("open");
		if ($nav.hasClass('open-menu')) {
			$nav.removeClass('open-menu');
		} else {
			$nav.addClass('open-menu');
		}
	 });

	$(window).scroll(function() {
		if($(document).scrollTop() > 300) {
			$("#main .photo img").fadeIn(800);
		}
		if($(document).scrollTop() > 800) {
			$("#last-main div").fadeIn(5000);
		}
		if($(document).scrollTop() > 600) {
			$(".hamburger span").addClass('scroll');
		} else {
			$(".hamburger span").removeClass('scroll');
		}
		if($(document).scrollTop() > 800) {
			(function () {
				$('#under-main .awards h2').fadeIn(500, function () {
					$('#under-main .awards ul').delay(1000).fadeIn(500);
				});
			})();
		}		
	});

	$.getJSON('js/boulevard.json', function (data) {

		let haircut = data.images;

		let newContent;

		for (var i = 0; i < haircut.length; i++) {

		}

	});
	
});