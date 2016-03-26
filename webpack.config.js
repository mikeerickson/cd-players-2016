var path    = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/js/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [

	],
	module: {
		preLoaders: [
			{test: /\.js$/, loaders: ['eslint'], exclude: /node_modules/},
		],
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
			{test: /\.jsx?$/, loaders: ["eslint-loader"], exclude: /node_modules/},
		]
	}
};

