var path = require("path");

module.exports = {
	entry: "./app/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/"
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-1"]
			}
		}]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devtool: "cheap-eval-source-map"
};
