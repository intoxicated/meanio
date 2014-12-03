/**
 * Created by R3alFr3e on 12/2/14.
 */
var service = angular.module('TodoService', []);
service.factory('Todo', ['$http', function($http){
    return {
        get : function() {
            return $http.get('/api/todos');
        },

        create : function(todoData) {
            return $http.post('/api/todos', todoData);
        },

        delete : function(id) {
            return $http.delete('/api/todos/' + id);
        }
    }
}]);