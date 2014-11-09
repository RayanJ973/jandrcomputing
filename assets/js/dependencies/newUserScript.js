(function($) {

	$('.newUserLink').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.formNewUser, h1, .form-inputNewUser').velocity('transition.bounceRightIn', {duration: 2000, display: 'block', stagger: 1000});
	$('.button_newUser').velocity('transition.bounceUpIn', {duration: 2000, display: 'block', stagger: 1000});
	});

})(jQuery);