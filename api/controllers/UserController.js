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
		//creation de l'utilisateur
		User.create( req.params.all(), function userCreated (error, user) {
			//s'il y a une erreur
			if (error) {
				console.log(error);
				return res.redirect('/user/new');
			};
			
			//en cas de réussite, affichage de user en json
			res.redirect('/user/show/'+ user.id);
		});
	},

	show: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser (error, user) {
			if (error) return next(error);
			if (!user) return next();
			res.view('jandrUser/show.ejs', {
				user: user
			});
		});
	}

};

