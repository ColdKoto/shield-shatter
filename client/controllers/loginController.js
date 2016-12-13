app.controller('loginController', function($scope, userFactory, $location){

    let self = this;
    this.newUser = {};
    this.loginAttempt = {};
    this.loginErrors = [];
    this.registerErrors = [];

    this.register = function(){
        self.registerErrors = [];
        userFactory.register(self.newUser)
            .then(function(data){
                if(data.username){
                    $location.url('/home');
                }
                else{
                    let errors = data.errors;
                    for (key in errors){
                        self.registerErrors[key] = errors[key].message
                    }
                }
            });
    }

    this.login = function(){
        this.loginErrors = [];
        userFactory.login(self.loginAttempt)
            .then(function(data){
                if(data.username){
                    $location.url('/home');
                }
                else{
                    self.loginErrors.push(data.errors.UserSchema.message);
                }
            })
    }
});
