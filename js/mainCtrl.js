angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
	$scope.myQuotes = function() {
		$scope.quotes = dataService.getData();
	}
	$scope.myQuotes();
	
	$scope.addQuote = function() {
		var newObj = {
			text: $scope.quoteToAdd,
			author: $scope.authorToAdd
		}
		dataService.addData(newObj);
	};
	
});