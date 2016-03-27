var path                  = require('path');
var webpack               = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');


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
		new WebpackNotifierPlugin({
			title:           'Webpack',
			contentImage:    './node_modules/cd-utils/assets/test-pass.png',
			excludeWarnings: true
		}),
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


