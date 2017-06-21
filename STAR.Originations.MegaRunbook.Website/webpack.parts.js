const path               = require('path');
const webpack            = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');      // 
const HtmlWebpackPlugin  = require('html-webpack-plugin');              // 
const NpmInstallPlugin   = require('npm-install-webpack-plugin');

exports.common = function (paths, vendorPackages) {
    return {

               devtool:       'source-map',

               cache:         true,

               entry:         {
                                  main:              path.join(paths.root, 'app', 'app.js'),
                                  vendor:            vendorPackages
                              },

               output:        {
                                  path:              path.join(paths.root, 'js'),
                                  filename:          '[name].js',
                                  sourceMapFilename: '[file].map'
                              },

               resolve:       {
                                  extensions:        ['.json', '.jsx', '.js'], 
                                  modules:           ['node_modules']
                              },

               // OldWatchingPlugin needed to make watch work. see http://stackoverflow.com/a/29292578/1434764
               // CommonsChunkPlugin(chunkName='vendor', filename='vendor.js')

               plugins:       [
                                  new webpack.optimize.CommonsChunkPlugin('vendor')
                              ],

               resolveLoader: {
                                  modules:           ['node_modules']
                              },

               module:        {
                                  loaders: [
                                               {
                                                   include: /\.json$/,
                                                   loader:  'json-loader'
                                               }, 
                                               {
                                                   test:    /\.js$/,
                                                   exclude: /node_modules/,
                                                   loader:  'babel-loader',
                                                   query:   {
                                                                presets: ['es2015', 'react']
                                                            }
                                               }, 
                                               {
                                                   test:    /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,         // WOFF FONTS
                                                   loader:  'url-loader',
                                                   options: {
                                                                limit:      50000,
                                                                mimetype:   'application/font-woff',
                                                                name:       './fonts/[hash].[ext]',          // Output below the fonts directory
                                                                publicPath: '../'                            // Tweak publicPath to fix CSS lookups to take the directory into account.
                                                            }
                                               }, 
                                               {
                                                   test:    /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    // TTF-SVG FONTS
                                                   loader:  'file-loader',
                                                   options: {
                                                                limit:      50000,
                                                                name:       './fonts/[hash].[ext]',          // Output below the fonts directory
                                                                publicPath: '../'                            // Tweak publicPath to fix CSS lookups to take the directory into account.
                                                            }
                                               }, 
                                               {
                                                   test:    /\.(jpe?g|png|gif)$/i,                           // IMAGES 
                                                   loader:  'url-loader',
                                                   options: {
                                                                limit:      50000,
                                                                name:       './images/[hash].[ext]',         // Output below the images directory
                                                                publicPath: '../'                            // Tweak publicPath to fix CSS lookups to take the directory into account.
                                                            }
                                               }
                                           ]
                              }
           }
}

exports.clean = function (paths) {
    return {
        plugins: [
                     new CleanWebpackPlugin([paths.build], { root: paths.root })
        ]
    };
}

exports.indexTemplate = function (options) {
    return {
               plugins: [
                         new HtmlWebpackPlugin({
                                                   template:   require('html-webpack-template'),
                                                   title:      options.title,
                                                   appMountId: options.appMountId,
                                                   inject:     false
                                               })
                        ]
           };
}

exports.loadJSX = function(include) {
    return {
               module: {
                           loaders: [
                                        {
                                            test:    /\.(js|jsx)$/,
                                            loaders: ['babel?cacheDirectory'],                // Enable caching for extra performance
                                            include: include
                                        }
                                    ]
                       }
           };
}

exports.loadFonts = function(include) {
    return {
               module: {
                           loaders: [
                                        {
                                            test:    /\.(woff|woff2)$/,
                                            loader:  'url',
                                            query:   {
                                                         name:     'font/[hash].[ext]',           // Inline small woff files and output them to font folder. Set mimetype just in case.
                                                         limit:    5000,
                                                         mimetype: 'application/font-woff'
                                                     },
                                            include: include
                                        },
                                        {
                                            test:    /\.(ttf|eot|svg)$/,
                                            loader:  'file',
                                            query:   {
                                                       name: 'font/[hash].[ext]'
                                                     },
                                            include: include
                                        }
                                    ]
                       }
           };
}

exports.loadIsparta = function(include) {
    return {
               module: {
                           preLoaders: [
                                           {
                                               test:    /\.(js|jsx)$/,
                                               loaders: ['isparta'],
                                               include: include
                                           }
                                       ]
                       }
           };
}

exports.lintJSX = function(include) {
    return {
               module: {
                           preLoaders: [
                                           {
                                               test:    /\.(js|jsx)$/,
                                               loaders: ['eslint'],
                                               include: include
                                           }
                                       ]
                       }
           };
}

exports.enableReactPerformanceTools = function() {
    return {
               module: {
                           loaders: [
                                        {
                                            test:   require.resolve('react'),
                                            loader: 'expose?React'
                                        }
                                    ]
                       }
           };
}

exports.devServer = function(options) {
  const ret = {
                  devServer: {
                                 historyApiFallback: true,               // Enable history API fallback so HTML5 History API based routing works. This is a good default that will come in handy in more complicated setups.
                                 hot:                true,               // Unlike the cli flag, this doesn't set HotModuleReplacementPlugin!
                                 inline:             true,
                                 stats:              'errors-only',      // Display only errors to reduce the amount of output.
                                 host:               options.host,       // Defaults to 'localhost'
                                 port:               options.port        // Defaults to 8080
                             },
                  plugins:   [new webpack.HotModuleReplacementPlugin({ multiStep: true })]
              };

  if (options.poll) {
      ret.watchOptions = {
                             aggregateTimeout:  300,        // Delay the rebuild after the first change
                             poll:             1000         // Poll using interval (in ms, accepts boolean too)
                         };
  }

  return ret;
}

exports.setupCSS = function(paths) {
  return {
             module: {
                       loaders: [
                                    {
                                        test:    /\.css$/,
                                        loaders: ['style', 'css'],
                                        include: paths
                                    }
                                ]
                     }
         };
}

exports.minify = function() {
  return {
             plugins: [
                          new webpack.optimize.UglifyJsPlugin({
                                                                  compress: { 
                                                                                warnings: false
                                                                            }
                                                              })
                      ]
         };
}

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
             plugins: [new webpack.DefinePlugin(env)]
         };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    
             // Define an entry point needed for splitting. Extract bundle and manifest files. Manifest is needed for reliable caching.

             entry:   entry, 
             plugins: [
                          new webpack.optimize.CommonsChunkPlugin({
                                                                      names:     [options.name, 'manifest'],
                                                                      minChunks: Infinity                             // options.name modules only
                                                                  })
                      ]
         };
}

exports.extractCSS = function(paths) {
  return {
           module:  {
                        loaders: [
                                     {
                                         test:    /\.css$/,
                                         loader:  ExtractTextPlugin.extract('style', 'css'),                         // Extract CSS during build
                                         include: paths
                                     }
                                 ]
                    },
           plugins: [new ExtractTextPlugin('[name].[chunkhash].css')]                                               // Output extracted CSS to a file
         };
}

exports.npmInstall = function(options) {
  options = options || {};

  return {
           plugins: [new NpmInstallPlugin(options)]
         };
}
