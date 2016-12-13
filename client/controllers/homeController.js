app.controller('homeController', function($scope, userFactory, $location){

    userFactory.checkUser(function(user){
  	    if(user.username){
  			    $scope.user = user;
  		  }
        else{
  		      $location.url('/');
  		  }
  	});

  	$scope.logout = function(){
  		  userFactory.logout(function(){
  			    $location.url('/');
  		  });
  	}

});
