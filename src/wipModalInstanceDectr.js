(function (){
	
	angular.module('wipModal')
		.config(function($provide) {
    		$provide.decorator('$modalStack', ['$delegate', 'wipStashServ', '$rootScope', '$q', function ($delegate, wipStashServ, $rootScope, $q) {
      		
      		var close = $delegate.close;
          var dismiss = $delegate.dismiss;

          $delegate.dismiss = function(modalInstance, reason){
            var modalScope = $delegate.getTop().value.modalScope;
            console.log(modalScope);
            dismiss(modalInstance, reason);
          };

      		return $delegate;
      		
    	}]);
  	});

}());