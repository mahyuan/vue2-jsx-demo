const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.ts', '.css', '.vue', 'json'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                'assets': path.resolve(__dirname, './src/assets'),
                'views': path.resolve(__dirname, './src/views'),
                'components': path.resolve(__dirname, './src/components'),
            }
        }
    }
}
