const path = require("path")

module.exports = {
    entry: path.resolve("./client/main.js"),
    output: {
        path: path.resolve("./client"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "cheap-module-eval-source-map",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    module: {
        rules: [
           { test: /\.js$/, loader:"babel-loader", exclude: /node_modules/, options: { presets: ['react','es2015'] } },
           { test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/ }
        ]
    }
}
