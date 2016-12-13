app.factory('userFactory', function($http){
		let user = {};

    class UserFactory{
      constructor(){}

      register(newUser){
        return $http.post('/register', newUser).then(function(ret){
						if(ret.errors){
								return ret;
						}
						else{
								user = ret.data;
								return user;
						}
				});
      }
      checkUser(callback){
        callback(user);
      }
      login(attempt){
        return $http.post('/login', attempt).then(function(ret){
						if(ret.errors || ret.data.pwmatch === false){
								return ret;
						}
						else{
								user = ret.data;
								return user;
						}
				});
      }
      logout(callback){
        user = {};
				callback();
      }
    }
    return new UserFactory();
});
