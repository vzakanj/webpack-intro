var path = require('path');

module.exports = {
    context: path.resolve("./"),
    entry: "./src/app.js",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 5000
    }
};