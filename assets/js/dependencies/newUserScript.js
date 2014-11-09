(function($) {

	$('.newUserLink').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.formNewUser, h1, .form-inputNewUser').velocity('transition.bounceRightIn', {duration: 2000, display: 'block', stagger: 1000});
		$('.button_newUser').velocity('transition.bounceUpIn', {duration: 2000, display: 'block', stagger: 1000});
	});

	$('input[id=password]').keyup(function() {
	// keyup event code here
	var pwd = $(this).val();
		if (pwd.length < 5) {
			$('#length').removeClass('valid').addClass('invalid');
		} else{
			$('#length').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if ( pwd.match(/[A-z]/) ) {
			$('#letter').removeClass('invalid').addClass('valid');
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
		}

		//validate capital letter
		if ( pwd.match(/[A-Z]/) ) {
			$('#capital').removeClass('invalid').addClass('valid');
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
		}

		//validate number
		if ( pwd.match(/\d/) ) {
			$('#number').removeClass('invalid').addClass('valid');
		} else {
			$('#number').removeClass('valid').addClass('invalid');
		}
	}).focus(function() {
		// focus code here
		$('.pwdInfo').show();
	}).blur(function() {
		// blur code here
		$('.pwdInfo').hide();
	});

	$('input[id=confirmation]').keyup(function() {
	// keyup event code here
	var pwd = $(this).val();
		if (pwd.length < 5) {
			$('#length2').removeClass('valid').addClass('invalid');
		} else{
			$('#length2').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if ( pwd.match(/[A-z]/) ) {
			$('#letter2').removeClass('invalid').addClass('valid');
		} else {
			$('#letter2').removeClass('valid').addClass('invalid');
		}

		//validate capital letter
		if ( pwd.match(/[A-Z]/) ) {
			$('#capital2').removeClass('invalid').addClass('valid');
		} else {
			$('#capital2').removeClass('valid').addClass('invalid');
		}

		//validate number
		if ( pwd.match(/\d/) ) {
			$('#number2').removeClass('invalid').addClass('valid');
		} else {
			$('#number2').removeClass('valid').addClass('invalid');
		}

		//validate equal
		if ( pwd == $('input[id=password]').val() ) {
			$('#equal').removeClass('invalid').addClass('valid');
		} else {
			$('#equal').removeClass('valid').addClass('invalid');
		}
	}).focus(function() {
		// focus code here
		$('.pwdInfo2').show();
	}).blur(function() {
		// blur code here
		$('.pwdInfo2').hide();
	});

	$('input[id=username]').keyup(function() {
	// keyup event code here
	var pwd = $(this).val();
		if (pwd.length < 5) {
			$('#length3').removeClass('valid').addClass('invalid');
		} else{
			$('#length3').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if ( pwd.match(/[A-z]/) ) {
			$('#letter3').removeClass('invalid').addClass('valid');
		} else {
			$('#letter3').removeClass('valid').addClass('invalid');
		}

		//validate capital letter
		if ( pwd.match(/[A-Z]/) ) {
			$('#capital3').removeClass('invalid').addClass('valid');
		} else {
			$('#capital3').removeClass('valid').addClass('invalid');
		}

		//validate number
		if ( pwd.match(/\d/) ) {
			$('#number3').removeClass('invalid').addClass('valid');
		} else {
			$('#number3').removeClass('valid').addClass('invalid');
		}
	}).focus(function() {
		// focus code here
		$('.usrInfo').show();
	}).blur(function() {
		// blur code here
		$('.usrInfo').hide();
	});

	$('input[id=email]').keyup(function() {
	// keyup event code here
	var pwd = $(this).val();
		if ( pwd.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i) ) {
			$('#emailInfoText').removeClass('invalid').addClass('valid');	
		} else{
			$('#emailInfoText').removeClass('valid').addClass('invalid');
		}
	}).focus(function() {
		// focus code here
		$('.emailInfo').show();
	}).blur(function() {
		// blur code here
		$('.emailInfo').hide();
	});

})(jQuery);