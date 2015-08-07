angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			update : function(todoData) {
				return $http.post('/api/todos/update',todoData);
			}
		}
	}])
	.factory('Todos1', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos1');
			},
			create : function(todoData) {
				return $http.post('/api/todos1', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos1/' + id);
			},
			update : function(todoData) {
				return $http.post('/api/todos1/update',todoData);
			}
		}
	}]);