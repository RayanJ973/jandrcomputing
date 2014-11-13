/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

	//affichage de la page s'enregistrer
	new: function (req, res) {
		res.view('jandrUser/new.ejs');
	},

	create: function (req, res, next) {
		if (req.body.username && req.body.email && req.body.password && req.body.password == req.body.confirmation) {
			if ( req.body.vUsername == 4 && req.body.vEmail > 0 && req.body.vPassword == 4 && req.body.vCPassword == 5) {
				User.create( req.params.all(), function userCreated (error, user) {
					if (error) {
						return res.json({url: '', errorMessage: error});
					};
					
					return res.json({ url: '/user/show/'+ user.id });
				});
			} else{
				return res.json({ url: '', errorMessage: 'Please respect field validation informations.'});
			}
		} else{
			return res.json({url: '', errorMessage: 'Please fill all required fields.'});
		};
	},

	show: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser (error, user) {
			if (error) return next(error);
			if (!user) return next();
			return res.view('jandrUser/show.ejs', {
				user: user
			});
		});
	},

	index: function(req, res, next) {
		User.find(function foundUsers (error, users) {
			return res.view('jandrUser/list.ejs', {
				users: users
			});
		});
	},

	edit: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser (error, user) {
			if (error) return next(error);
			if (!user) return next('User doesn\'t exist.');
			return res.view('jandrUser/edit.ejs', {
				user: user
			});
		});
	},

	update: function (req, res, next) {
		User.update(req.param('id'), req.params.all(), function userUpdated (error) {
			if (error) {
				return res.redirect('/user/edit/' + req.param('id'));
			}

			return res.redirect('/user/show/' + req.param('id'));
		});
	},

	delete: function (req, res, next) {
		User.findOne(req.param('id'), function foundUser (error, user) {
			if (error) return next(error);
			if(!user) return next('User doesn\'t exist.');

			User.destroy(req.param('id'), function userDestroyed(error) {
				if (error) return next(error);
			});

			return res.redirect('/user/list');
		})
	}

};

