var path = require('path');

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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["latest"]
                    }
                }
            }
        ]
    }
};