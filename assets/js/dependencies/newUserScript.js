(function($) {
	var validUsername = 0, 
	validPassword = 0,
	compteurEmail = 0,
	validCPassword = 0;

	$('.newUserLink').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.formNewUser, h1, .form-inputNewUser').velocity('transition.bounceRightIn', {duration: 2000, display: 'block', stagger: 1000});
		$('.button_newUser').velocity('transition.bounceUpIn', {duration: 2000, display: 'block', stagger: 1000});
	});

	$('input[id=username]').keyup(function() {
		var pwd = $(this).val();
		var array = {
			length: 'length3',
			letter: 'letter3', 
			capital: 'capital3',
			number: 'number3'
		};
		var numU = validation( pwd, 'username', array);
		validUsername = numU;
	}).focus(function() {
		$('.usrInfo').velocity('transition.flipXIn', {duration: 1000, display: 'block'});
	}).blur(function() {
		$('.usrInfo').velocity('transition.flipXOut', {duration: 1000});
	});

	$('input[id=email]').keyup(function() {
		var pwd = $(this).val();
		if ( pwd.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i) ) {
			$('#emailInfoText').removeClass('invalid').addClass('valid');
			compteurEmail++;
		} else{
			$('#emailInfoText').removeClass('valid').addClass('invalid');
		}
	}).focus(function() {
		$('.emailInfo').velocity('transition.flipXIn', {duration: 1000, display: 'block'});
	}).blur(function() {
		$('.emailInfo').velocity('transition.flipXOut', {duration: 1000});
	});

	$('input[id=password]').keyup(function() {
		var pwd = $(this).val();
		var array = {
			length: 'length',
			letter: 'letter', 
			capital: 'capital',
			number: 'number'
		};
		var numP = validation( pwd, 'password', array);
		validPassword = numP;
	}).focus(function() {
		$('.pwdInfo').velocity('transition.flipXIn', {duration: 1000, display: 'block'});
	}).blur(function() {
		$('.pwdInfo').velocity('transition.flipXOut', {duration: 1000});
	});

	$('input[id=confirmation]').keyup(function() {
		var pwd = $(this).val();
		var array = {
			length: 'length2',
			letter: 'letter2', 
			capital: 'capital2',
			number: 'number2'
		};
		var numCP = validation( pwd, 'confirmation', array);
		validCPassword = numCP;
	}).focus(function() {
		$('.pwdInfo2').velocity('transition.flipXIn', {duration: 1000, display: 'block'});
	}).blur(function() {
		$('.pwdInfo2').velocity('transition.flipXOut', {duration: 1000});
	});

	$(document).on('submit', '#formNew', function(event) {
		var	validEmail = 0;
		if ($('#emailInfoText').attr('class') == 'valid' && compteurEmail > 0) {
			validEmail++;
		};
		var inputVal = {
			firstname: $('#firstname').val(),
			lastname: $('#lastname').val(),
			email: $('#email').val(),
			username: $('#username').val(),
			password: $('#password').val(),
			confirmation: $('#confirmation').val(),
			_csrf: $('#csrfInput').val(),
			vUsername: validUsername,
			vEmail: validEmail,
			vPassword: validPassword,
			vCPassword: validCPassword
		};
		jQuery.post($(this).attr('action'), inputVal, function(data, textStatus, xhr) {
			$('#errorMessageBox').empty().append(data.errorMessage)
			.velocity('callout.shake', {duration: 1000, display: 'block'});
			if (data.url.length > 0) {
				window.location.href = data.url;
			} else{
				return false;
			};
		});	

		return	false;
	});

	function validation ( pwd, id, array) {
		var valid = 0;

		if (pwd.length < 5) {
			$('#' + array['length']).removeClass('valid').addClass('invalid');
		} else{
			$('#' + array['length']).removeClass('invalid').addClass('valid');
			valid++;
		}

		if ( pwd.match(/[A-z]/) ) {
			$('#' + array['letter']).removeClass('invalid').addClass('valid');
			valid++;
		} else {
			$('#' + array['letter']).removeClass('valid').addClass('invalid');
		}

		if ( pwd.match(/[A-Z]/) ) {
			$('#' + array['capital']).removeClass('invalid').addClass('valid');
			valid++;
		} else {
			$('#' + array['capital']).removeClass('valid').addClass('invalid');
		}

		if ( pwd.match(/\d/) ) {
			$('#' + array['number']).removeClass('invalid').addClass('valid');
			valid++;
		} else {
			$('#' + array['number']).removeClass('valid').addClass('invalid');
		}

		if (id == 'confirmation') {
			if ( pwd == $('input[id=password]').val() ) {
				$('#equal').removeClass('invalid').addClass('valid');
				valid++;
			} else {
				$('#equal').removeClass('valid').addClass('invalid');
			}
		};

		return valid;
	}

})(jQuery);