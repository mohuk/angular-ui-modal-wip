(function(){
	
	angular.module('wiplash',['ui.bootstrap','wipModal'])
		.controller('wiplashCtrl', wiplashCtrl);

		function wiplashCtrl($scope, $modal){

			$scope.openModal = openModal;

			function openModal(){

				var modalInstance = $modal.open({
					template: 	'<div class="modal-header">Heading</div><div class="modal-body">{{somebody}} - {{bumbody}}</div>'+
								'<div class="modal-footer" ng-click="dismiss()">Footer</div>',
					controller: function modalCtrl($scope, $modalInstance){
						$scope.bumbody = 'Mohammad Umair Khan is Genius';
						$scope.dismiss = function(){
							$modalInstance.dismiss('raison d`etre');
						};
					}
				});

				modalInstance.result.then(function(){
				}, function(res){
					var reason = res || 'rejected';
				});
			}
		}

}());
