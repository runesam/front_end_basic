process.env.NODE_ENV = 'production';
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var plugins = [];
var config = {
	// devtool: 'cheap-module-source-map',
	entry:{
		route_i:'./.components/js/Route_I.js',
	},
	externals:[{
  	xmlhttprequest:'{XMLHttpRequest:XMLHttpRequest}'
	}],
	output: {
		filename:'[name].js',
		path:'./js/'
	},
	module:{
	  loaders:[
	  	{/*test: /\.js$/,exclude: /node_modules/,*/loader: "babel-loader"},
	  ]
	},
	plugins:[
		new webpack.DefinePlugin({
	    'process.env':{
    		'NODE_ENV':JSON.stringify('production')
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
    	jQuery:'jquery',
    	$:'jquery',
    	jquery:'jquery',
      'window.jQuery':'jquery',
      'window.$':'jquery'
    })
 	]
}
module.exports = config;