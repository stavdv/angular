(function() {
    var app = angular.module('appli', ['ngRoute']);

    app.controller('take1Controller', function($scope) {
		$scope.imgae = "1.png";
		$scope.msg = 'hello world';
		$scope.msg2 = 'another msg :)';
       
    });
    app.controller('take2Controller', function($scope) {
		
			this.user ={};
			this.submitForm = function(data){
			users.push(this.user);
			this.user = {};
        }

    });
    
  
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/take1', {
            templateUrl: 'take1.html',
            controller: 'take1Controller',
            controllerAs:'take1'
        })
            .when('/take2', {
            templateUrl: 'take2.html',
            controller: 'take2Controller',
            controllerAs: 'take2'
        })
            .otherwise({
            redirectTo: '/'
        });

    });
})();