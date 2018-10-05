// ts-nocheck
// ts-check
// ts-ignore


var someOtherLibrary = (function(){

	function log (message) {
		console.log(message);
	}
	
	// /**
	//  * @param {number} [a]
	//  * @param {number} [b]
	//  * @returns {number}
	//  */
	function divide(a, b) {
		return a / b;
	}

	function divideAndLog(a, b) {
		// /** @type {number} */
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

