// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Reser = mongoose.model('Reser');

// Create a new error handling controller method
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

// Create a new 'render' controller method
exports.render = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' and a stringified 'user' properties
	res.render('index', {
		title: 'yuxian-demo',
		user: JSON.stringify(req.user)
	});
};

// Create a new controller method that creates new reser
exports.placeReser = function(req, res) {
	// Create a new reser object
	var reser = new Reser(req.body);

	// Try saving the reser
	reser.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the reser 
			res.json(reser);
		}
	});
	console.log(reser);
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
	// Use the model 'find' method to get a list of articles
	Reser.find().sort('-created').exec(function(err, resers) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resers);
		}
	});
};

// Create a new controller method that returns an existing article
exports.read = function(req, res) {
	res.json(req.reser);
};

// Create a new controller method that delete an existing article
exports.delete = function(req, res) {
	// Get the article from the 'request' object
	var reser = req.reser;

	// Use the model 'remove' method to delete the article
	reser.remove(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(reser);
		}
	});
};

// Create a new controller middleware that is used to authorize an article operation 
exports.hasAuthorization = function(req, res, next) {
	// If the current user is not the creator of the article send the appropriate error message
	if (req.article.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}

	// Call the next middleware
	next();
};

exports.reserByID = function(req, res, next, id) {
	// Use the model 'findById' method to find a single reser 
	Reser.findById(id).exec(function(err, reser) {
		if (err) return next(err);
		if (!reser) return next(new Error('Failed to load reser ' + id));

		// If an reser is found use the 'request' object to pass it to the next middleware
		req.reser = reser;

		// Call the next middleware
		next();
	});
};

exports.visitorsreser = function(req, res){
	var name = req.query.name;
	var phone = req.query.phone;
	Reser.find({'name':name,'phone':phone}).sort('-created').exec(function(err,resers){
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resers);
		}
	})
};
exports.typesreser = function(req, res){
	var type = req.query.type;
	Reser.find({'type':type}).select('date enddate').sort('date').exec(function(err,resers){
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			console.log(resers);
			res.json(resers);
		}
	})
};