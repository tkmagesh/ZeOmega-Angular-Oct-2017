var utils = angular.module('utils', []);

utils.value('defaultTrimLength', 30);

utils.filter('trimText', function(defaultTrimLength){
	return function(data, trimLength){
		trimLength = trimLength || 30;
		return data.length <= trimLength ? data : data.substr(0,trimLength) + '...';
	}
});
utils.filter('elapsed', function(){
	return function(data){
		return moment(data).fromNow();
	}
});