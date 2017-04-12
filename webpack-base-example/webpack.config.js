var path = require('path');

module.exports = {
    context: path.resolve("./"),
    entry: "./src/app.js",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js"
    }
};