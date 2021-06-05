let mix = require('laravel-mix');
const path = require("path");

mix.js('src/app.js', 'dist/js')
	.vue()
// 	.postCss('src/assets/css/app.css', 'css', [])
	.sass('src/assets/css/app.scss', 'css', [])
	.setPublicPath('dist');

// Copy index file
mix.copy('public/index.html', 'dist/index.html');

mix.browserSync({
  // Stop the browser from automatically opening
  open: false,
  // Serve files from the "dist" directory
  server: "dist"	
});


/*Production*/
/** 
let mix = require('laravel-mix');
const path = require("path");
const webpack = require('webpack');

mix.js('src/app.js', 'dist/js')
	.vue()
	.postCss('src/assets/css/app.css', 'css', [
    //
  ])
	.setPublicPath('dist');

// Copy index file
mix.copy('public/index.html', 'dist/index.html');


mix.webpackConfig ({
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
})

mix.browserSync({
  // Stop the browser from automatically opening
  open: false,
  // Serve files from the "dist" directory
  server: "dist"	
});

**/
