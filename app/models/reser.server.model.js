// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
var ReserSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	type: {
		type: String
	},
	date: {
		type: Date
	},
	enddate: {
		type: Date
	},
	name: {
		type: String
	},
	phone: {
		type: String
	}
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Reser', ReserSchema);