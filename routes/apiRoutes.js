var passport = require('../passport');

module.exports = function(app){

//Handles User Login/ Auth
app.post("/createUser",function(req,res){

	//takes in username or email (Or both) AND password

	//save the username and email


});

app.post("/login", function(req,res){
	//takes in username or email and password. Hashes the password and checks if it matches the one on file
	var email = req.user.email;
	var password = req.user.password



	//returns athentication 

});

//google login


app.get('/google', passport.authenticate('google', { scope: ['profile'] }))
app.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)




//Discussion handling 
app.post("/newDiscussion",function(req,res){
	//needs to take in the title, create an ID, and save it to discussions
})

app.post("/newDiscussionPost",function(req,res){
	//needs to take in the discussion ID posting to, and append to array in Mongo
})


//Todo list Handling

app.post("/newTodoList",function(req,res){

	//takes in title the email and the 


})

app.post("/newTodoListPost",function(req,res){

	// takes in 

})




//this is for chat kit


	
}