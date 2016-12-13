const mongoose       = require('mongoose'),
      passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!\s){8,32}/,
      bcrypt         = require('bcryptjs'),
      salt           = 10;

let UserSchema = new mongoose.Schema({
  username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true
  },
  password: {
      type: String,
      required: [true, 'Password is required'],
      validate: {
          validator: function(password){
              return passwordRegex.test(password);
          },
          message: 'Passwords must contain at least one lowercase letter, one uppercase letter, and one number, and they cannot contain spaces. They must be at least 8 characters long and no more than 32 characters long.'
      }
  },
}, {timestamps: true});

UserSchema.pre('save', function(next){
    let user = this;
    bcrypt.hash(this.password, salt, function(err, hash){
        if(err){return next(err)};
	      user.password = hash;
	      next();
    });
});

UserSchema.methods.comparePassword = function(attempt, hash, callback){
    bcrypt.compare(attempt, hash, function(err, res){
        if(err){return callback(err)};
	      return callback(res);
    });
}

mongoose.model('User', UserSchema);
