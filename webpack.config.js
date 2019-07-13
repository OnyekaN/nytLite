const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './app/app.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
			}
		]
	},
	output: {
		path: path.join(__dirname, '/app/assets/js/'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
}
