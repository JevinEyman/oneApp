var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserData = new Schema ({

	username:{
		type:String,
		required:true
	},

	password:{
		type: String,
		required:true
	}

});

var User = mongoose.model("Users", UserData);

// Export the Headline model
module.exports = User;