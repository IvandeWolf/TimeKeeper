const mix = require('laravel-mix');
/*
 | Disable success build notifications so we don't get disturbed.
 */
mix.disableSuccessNotifications()

const webpack = require('./webpack.config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/home.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {
        includePaths: [path.resolve(__dirname, 'node_modules')]
    })
    .webpackConfig(Object.assign(webpack));

mix.browserSync('localhost:4000');
