const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var Schema = mongoose.Schema;

var UserData = new Schema ({

	name:{
		First:{type:String,
			required:true},
		Last:{type:String,
			required:true}
	},

	email:{
		type:String,
		required:false
	},

	password:{
		type: String,
		required:true
	},
	google: {
		googleId: { type: String, required: false }
	}

});


UserData.method= {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

UserData.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
})

var User = mongoose.model("Users", UserData);

// Export the Headline model
module.exports = User;