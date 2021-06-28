const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.module.rule('three').test(/\.js$/)
            .use('babel')
            .loader('babel-loader')
            .end()
            // GraphQL Loader
        config.module.rule('js').exclude.add(/\.worker\.js$/)
            // config.module.rule('stylus').use('stylus').loader('stylus').options({
            //     import: [
            //         "./src/main.styl", // 全局变量文件 文件后缀名为.styl
            //     ]
            // }).end()
        config.module
            .rule('worker-loader')
            .test(/\.worker\.js$/)
            .use('worker-loader')
            .loader('worker-loader')
            .options({
                inline: 'fallback',
                chunkFilename: 'workerName.[chunkhash].js'
            })
            .end()
    },
    pages: {
        // forgotpwd: {          
        //     entry: 'src/mima.js',          
        //     template: 'public/mima.html',        
        // },        
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
        },
    }, //配置多入口
    publicPath: './',
    integrity: true,
    configureWebpack: config => {
        config.entry.app = ["babel-polyfill", "./src/main.js"];
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'stylus',
            patterns: [
                // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
                path.resolve(__dirname, './src/main.styl')
            ]
        }
    },
}