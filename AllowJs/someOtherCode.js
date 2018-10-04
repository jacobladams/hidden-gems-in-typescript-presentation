var someOtherLibrary = (function(){

	function log (message) {
		console.log(message);
	}
	
	function divide(a, b) {
		return a / b;
	}

	function divideAndLog(a, b) {
		var answer = divid(a,b);
		this.log(' ' + a + 'divided by ' + b + ' is ' + answer);
	}

	return {
		version: '1.0.0',
		log: log,
		divide: divide,
		divideAndLog : divideAndLog
	};
})();