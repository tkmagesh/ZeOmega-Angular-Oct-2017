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

	function addAsync(x,y, onResult){
		console.log('	[@addAsync] processing ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('	[@addAsync] returning result');
			if (typeof onResult === 'function')
				onResult(result);
		}, 4000); 
	}

	function addAsyncClient(x,y){
		console.log('[@addAsyncClient] triggering addAsync');
		addAsync(x,y, function(result){
			console.log('[@addAsyncClient] result = ', result);
		});
	}

	function addAsyncPromise(x,y){
		console.log('	[@addAsync] processing ', x , ' and ', y);

		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log('	[@addAsync] returning result');
				resolveFn(result);
			}, 4000); 
		});

		return p;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncPromise : addAsyncPromise
	};
})();






