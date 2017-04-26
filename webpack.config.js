var webpack = require('webpack');

module.exports = {
    entry: {
        index : './browser_index.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    modules: {
        loaders: [
            
        ]
    }
}