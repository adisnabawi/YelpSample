// (function() {
// 'use strict';
// angular.module('yulpApp')
// .factory('YelpAPI', ['$http', YelpAPI]);
// //.factory('anotherService', [anotherService])
// function YelpAPI($http) {
// function getData() {
// return $http.get('/js/data.json');
// }
// return {
// getData: getData
// };
// }
// })();

(function() {
'use strict';
angular.module('yulpApp')
.factory('YelpAPI', ['$http','$ionicLoading', YelpAPI]);
//.factory('anotherService', [anotherService])
function YelpAPI($http, $ionicLoading) {
	function randomString(length, chars){
		var result = '';
		for(var i = length; i>0; --i){
			result += chars[Math.round(Math.random() * (chars.length -1))];
		}
		return result;
	}
	function searchAPI(location, limit, callback) {
		var method = 'GET';
		var url = 'http://api.yelp.com/v2/search';
		var params = {
			location: location,
			oauth_consumer_key: 'zUUv2AiQVTEMOxycV7gPtA',
			oauth_token: 'XvijwN_OX7CY60tVb_Q-K19X8hwmkqdx',
			oauth_signature_method: 'HMAC-SHA1',
			oauth_timestamp: new Date().getTime(),
			oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
			limit: limit,
			cc: 'MY'
		};
		var consumerSecret = 'OOmOHdgXxPpe56WjSDn1kAl7iJw';
		var tokenSecret = 'kkK3v70885ojtaiFM48pEsZfS6o';
		var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {encodeSignature:false});
		params['oauth_signature'] = signature;
		$ionicLoading.show( {template: 'Loading...'});
		$http.get(url, { params: params}).then(function (res){
			$ionicLoading.hide();
			callback(res.data);
		});
	}


	function businessAPI(id, callback) {
		var method = 'GET';
		var url = 'http://api.yelp.com/v2/business/' + id;
		var params = {
			oauth_consumer_key: 'zUUv2AiQVTEMOxycV7gPtA',
			oauth_token: 'XvijwN_OX7CY60tVb_Q-K19X8hwmkqdx',
			oauth_signature_method: 'HMAC-SHA1',
			oauth_timestamp: new Date().getTime(),
			oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
			cc: 'MY'
		};
		var consumerSecret = 'OOmOHdgXxPpe56WjSDn1kAl7iJw';
		var tokenSecret = 'kkK3v70885ojtaiFM48pEsZfS6o';
		var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {encodeSignature:false});
		params['oauth_signature'] = signature;
		$ionicLoading.show( {template: 'Loading...'});
		$http.get(url, { params: params}).then(function (res){
			$ionicLoading.hide();
			callback(res.data);
		});
	}



function getData(callback) {
	return searchAPI('Kuala Lumpur', 10, callback);
}
function searchData(toSearch, callback) {
		return searchAPI(toSearch,10,callback);
	}

	function searchBusiness(id, callback) {
		return businessAPI(id,callback);
	}
return {
getData: getData,
searchData: searchData,
searchBusiness: searchBusiness
};
}
})();