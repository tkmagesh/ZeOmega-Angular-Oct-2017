var pgm = (function(){
	function addSync(x,y){
		console.log('	[@addSync] processing ', x , ' and ', y);
		var result = x + y;
		console.log('	[@addSync] returning result');
		return result; 
	}

	function addSyncClient(x,y){
		console.log('[@addSyncClient] triggering addSync');
		var result = addSync(x,y);
		console.log('[@addSyncClient] result = ', result);
	}

	function addAsync(x,y){
		console.log('	[@addAsync] processing ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('	[@addAsync] returning result');
			return result;
		}, 4000); 
	}

	function addAsyncClient(x,y){
		console.log('[@addAsyncClient] triggering addAsync');
		var result = addAsync(x,y);
		console.log('[@addAsyncClient] result = ', result);
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient
	};
})();