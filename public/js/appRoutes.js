var route = angular.module('appRoutes', []);

route.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
               templateUrl: 'views/home.html',
                controller: 'MainController'
            })

            .when('/todos', {
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            });
        $locationProvider.html5Mode(true);
    }]);