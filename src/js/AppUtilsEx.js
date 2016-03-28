var AppUtilsEx = {

	formatAverage(x, y) {
		if ( x === 0 )
			return '.000'
		if ( x === y )
			return '1.000'

		return '.' + Math.round((x/y) * 1000,0)
	}
}

module.exports = AppUtilsEx;
