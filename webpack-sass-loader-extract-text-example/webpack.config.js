var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); 
module.exports = {
    context: path.resolve("./"),
    entry: "./src/app.js",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 5000
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve("./src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["latest"]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                include: path.resolve("./styles"),
                use: ExtractTextPlugin.extract({
                    use: [ 
                        {
                            loader: "css-loader",
                            options: { sourceMap: true }
                        }, 
                        {
                            loader: "sass-loader",
                            options: { sourceMap: true}
                        } 
                    ]
                }) 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};