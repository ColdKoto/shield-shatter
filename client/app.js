const app = angular.module('loginApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'loginController',
            controllerAs: 'lC'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController',
            controllerAs: 'hC'
        })
        .otherwise({
            redirectTo: '/'
        })
});
