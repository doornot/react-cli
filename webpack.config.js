const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimise: true }
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: !isProduction
						}
					},
					{
						loader: 'postcss-loader',
						// If you don't want to add another file, it's enough to add your options in your webpack config
						options: {
							// webpack requires an identifier (ident) in options when {Function}/require is used (Complex Options).
							ident: 'postcss',
							plugins: (loader) => [
								require('autoprefixer')({
									// https://github.com/browserslist/browserslist
									browsers: ['iOS 7', 'last 2 versions']
								})
							]
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		// Simplifies creation of HTML files to serve your webpack bundles
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				// 移除注释
				discardComments: { removeAll: true },
				// 避免 cssnano 重新计算 z-index
				safe: true,
			},
			canPrint: true
		}),
	]
};