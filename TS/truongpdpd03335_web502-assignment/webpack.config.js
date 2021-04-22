module.exports = {
	mode: "development",
	entry: {
		main: "./src/frontend/app.ts",
		user: "./src/frontend/userApp.ts"
	},

	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[name].chunk.js",
		path: __dirname + "/dist/frontend",
		publicPath: "/assets"
	},

	devtool: 'source-map',

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}]
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: "all"
		},
		usedExports: true
	}
}