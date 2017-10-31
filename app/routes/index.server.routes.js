// Invoke 'strict' JavaScript mode
'use strict';

var index = require('../controllers/index.server.controller'),
	users = require('../../app/controllers/users.server.controller');
// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/', index.render);

	app.route('/api/reser')
	   .post(index.placeReser)
	   .get(index.list);

	// Set up the 'articles' parameterized routes
	app.route('/api/reser/:reserId')
	   .get(index.read)
	   .delete(users.requiresLogin, index.delete);

	// Set up the 'articleId' parameter middleware   
	app.param('reserId', index.reserByID);
};