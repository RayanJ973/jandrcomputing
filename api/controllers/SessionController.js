/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	login: function(req, res) {

		res.view('jandrSession/login');
	},

	create: function(req, res, next) {
		if (!req.param('emailLogin') || !req.param('pwdLogin')) {
			var messageRequired = [{name: 'requiredMessage', message: 'You must enter both a username and password'}];
			req.session.flash = {
				error: messageRequired
			}

			res.redirect('/session/login');
			return;
		};

		User.findOneByEmail(req.param('emailLogin')).done(function(error, user) {
			if (error) return next(error);

			if (!user) {
				var noUserError = [{name: 'noUser', message: 'The email address ' + req.param('emailLogin') + ' not found.'}];
				req.session.flash = {
					error: noUserError
				}
				res.redirect('/session/login');
				return;
			};
		});
	}
};

