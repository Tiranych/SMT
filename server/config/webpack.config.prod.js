const path = require('path');

module.exports = {
	entry: path.resolve('./src/server.ts'),
	output: {
		path: path.resolve(__dirname, '../public/build'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			'@utils': path.resolve('./src/utils'),
			'@assets': path.resolve('./src/assets'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
};