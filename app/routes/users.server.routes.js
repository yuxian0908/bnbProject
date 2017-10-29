// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signin' routes 
	app.route('/api/signin')
	   .post(passport.authenticate('local', {
			successRedirect: '/_admin',
			failureRedirect: '/api/signin',
			failureFlash: true
	   }));

	// // 管理者登入後的頁面
	// app.get('/_admin', users.renderAdmin);
	app.route('/_admin')
	   .get(users.renderAdmin)

	// Set up the 'signout' route
	app.post('/api/signout', users.signout);
};