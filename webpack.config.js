module.exports = {
    entry: './src/main/resources/static/js/main.js',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
