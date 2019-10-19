module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? './dist/'
        : 'http://localhost:8080/',
    outputDir: './dist',
    configureWebpack: {
        externals: {
            jquery: 'jQuery'
        },
        output: {
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
        },
    },
    css: {
        extract: {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }
    },
};