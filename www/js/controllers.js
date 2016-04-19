(function() {
'use strict';
angular.module('yulpApp')
.controller('FeedCtrl', ['YelpAPI', FeedCtrl])
.controller('FeedDetailsCtrl', ['$stateParams', 'YelpAPI', FeedDetailsCtrl])
.controller('SearchCtrl', ['YelpAPI', '$scope', SearchCtrl]);
function FeedCtrl(YelpAPI) {
var vm = this; // view model (vm)
// YelpAPI.getData().then(function(res) {
// vm.total = res.data.total;
// vm.businesses = res.data.businesses;
YelpAPI.getData(function(data) {
vm.total = data.total;
vm.businesses = data.businesses;
console.log(vm.businesses);
});
}

function SearchCtrl(YelpAPI, $scope){
	var vm = this;
	vm.toSearch = '';
	vm. search = function(){
		YelpAPI.searchData(vm.toSearch, function(data) {
			vm.businesses =  data.businesses;
		});
	}
}

function FeedDetailsCtrl($stateParams, YelpAPI) {
	var vm = this;
	vm.businessId = $stateParams.businessId;
	console.log(vm.businessId);
// 	YelpAPI.getData().then(function(res) {
// vm.businesses = res.data.businesses;

YelpAPI.searchBusiness($stateParams.businessId,function(data) {
vm.business = data; 
// YelpAPI.getData(function(data) {
// vm.businesses = data.businesses;
// vm.business = vm.businesses[0]; // temporary
});
}
})();