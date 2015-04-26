(function (){
	
	angular.module('wipModal')
		.config(function($provide) {
    		$provide.decorator('$modal', ['$delegate', 'wipStashServ', '$rootScope', '$q', function ($delegate, wipStashServ, $rootScope, $q) {
      		// make my changes to $delegate, or replace entirely
      		var service = {};
      		var open = $delegate.open;

      		$delegate.open = function(modalSettings){

      			//get the stored scope and extend it with modalSettings
  				var storedScope = {
  					somebody:'fiGaaro'
  				};

  				var modalScope = $rootScope.$new();
  				angular.extend(modalScope, storedScope);

  				modalSettings.scope = modalScope;
      			
      			var modalInstance = open(modalSettings);

      			modalInstance.result.then(function(res){
      				console.log('decorator promise resolving ' + res);
  					return $q.when(res);
      			}, function(res){
      				console.log('decorator promise rejecting ' + res);
      				return $q.reject(res);
      			});

      			return modalInstance;
      		};

      		return $delegate;
      		//return angular.extend($delegate, service);
    	}]);
  	});

}());