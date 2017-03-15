/*eslint no-mixed-spaces-and-tabs: "off"*/
// eslint-disable-next-line no-unused-vars
const path = require('path');
const webpack = require('webpack');
// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
process.env.NODE_ENV = 'production';
const config = {
	// devtool: 'cheap-module-source-map',
	entry: {
		bundle: './.components/js/app.jsx',
	},
	externals: [{
		xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
	}],
	output: { path: __dirname, filename: '/js/bundle.js' },
	module: {
		loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
	},
  devServer: {
    compress: true,
    port: 9000,
    inline: false,
    historyApiFallback: true,
  },
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
		}
		}),
    // new webpack.optimize.UglifyJsPlugin({
    // 	minimize:true,
    //  	sourceMap:false,
    //    	mangle:{
    //   		except:['$','jquery']
		// },
		// output:{comments:false},
		// compress:{
				// screw_ie8:true,
    // 		warnings:true
		// },
		// beautify:false,
		// drop_console:true
    // }),
		new webpack.IgnorePlugin(/jsdom$/),
    new webpack.IgnorePlugin(/navigator$/),
    new webpack.IgnorePlugin(/location$/),
    new webpack.ProvidePlugin({
  		jQuery: 'jquery',
    	$: 'jquery',
    	jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
 	]
};
module.exports = config;
