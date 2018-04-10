var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChatData = new Schema({
	users:{
		type:Array,
		required:true
	},
	messages:{
		type:Array,
		required:false
	},
	userID:{
		type:Integer,
		required:true
	}
})

var Chat = mongoose.model("Chats",ChatData);

module.exports = Chat;