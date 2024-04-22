const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "webpackScript.js"
    },
    devServer:{
        static:{
            directory: path.join(__dirname,"dist"),
        },
        compress:true,
        port:3001,
    }
}