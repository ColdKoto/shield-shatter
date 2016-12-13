const mongoose = require('mongoose'),
	    User     = mongoose.model('User');

function UsersController(){
    this.register = function(req, res){
        if(req.body.password != req.body.passwordconfirm){
            res.json({errors: {password: {message: 'Passwords must match!'}}});
        }
        else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            newUser.save(function(err, user){
                if(err){
                		res.json(err);
                }
                else{
                    returnedUser = {
											username: req.body.username,
			                password: req.body.password
                    }
                    res.json(returnedUser);
                }
            });
        }
    }

    this.login = function(req, res){
        User.find({username: req.body.username}, function(err, user){
            if(err){
                res.json(err);
            }
            else if(user[0]){
                user = user[0];
                user.comparePassword(req.body.password, user.password, function(ret){
                    if(ret){
                        returnedUser = {
													username: req.body.username,
													password: req.body.password
                        }
                        res.json(returnedUser);
                    }
                    else{
                        res.json({errors: {UserSchema: {message: 'Wrong password.'}}});
                    }
                });
            }
            else{
                res.json({errors: {UserSchema: {message: 'User does not exist.'}}})
            }
        });
    }
}

module.exports = new UsersController;
