export default class AppUtils {

	constructor() {
		console.log('hello world');
	}

	formatAverage(x, y) {
		if ( x === 0 )
			return '.000'
		if ( x === y )
			return '1.000'

		return '.' + Math.round((x/y) * 1000,0)
	}

}
