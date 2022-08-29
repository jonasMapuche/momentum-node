const mongoose = require('mongoose');
const document = "malware";
const database = "letterDB";

let list = new mongoose.Schema(
	{
	name: String,
	rank: String,
	check: Boolean,
	description: String
	}
);

let activity = new mongoose.Schema(
	{
		name: String,
		malware: 
		{
			name: String,
			export: Date,
			framework: String,
			list: [list]
		}
	},
	{ collection: document }
);

module.exports = mongoose.model(database, activity);;