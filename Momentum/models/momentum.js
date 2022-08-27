const mongoose = require('mongoose');
const document = "malware";

const momentum = new mongoose.Schema(
	{
		name: String,
		malware: 
		{
			name: String,
			export: Date,
			framework: String,
			list: [
				{
					name: String,
					rank: String,
					check: Boolean,
					description: String
				}
			]
		}
	},
	{ collection: document }
);

module.exports = momentum;