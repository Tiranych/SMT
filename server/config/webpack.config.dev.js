const path = require('path');

module.exports = {
	entry: path.resolve('./src/index.tsx'),
	plugins: [
	],
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
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		open: true,
		hot: true,
	},
	devtool: 'eval',
	watch: true,
	watchOptions: {
		ignored: ['/node_modules/', '/public/'],
	},
};
