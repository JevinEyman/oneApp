var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var discussion = new Schema ({

	title:{
		type:String,
		required:true
	},
	id:{
		type:Number,
		required:true
	},
	posts:{
		type:Array,
		required:false
	}
});


var discussions = mongoose.model("Discussions",discussion);

module.exports = discussions