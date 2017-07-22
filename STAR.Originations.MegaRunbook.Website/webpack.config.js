const path  = require('path');
const merge = require('webpack-merge');
const pkg   = require('./package.json');
const parts = require('./webpack.parts');

// Bundle dependencies in separate vendor bundle. Exclude font packages from vendor bundle

const vendorPackages = Object.keys(pkg.dependencies).filter(function (el) {
    return el.indexOf('font') === -1;
});

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
                  root:  __dirname,
                  app:   path.join(__dirname, 'app'),
                  build: path.join(__dirname, 'js'),
                  fonts: path.join(__dirname, 'app', 'fonts'),
                  test:  path.join(__dirname, 'tests'),
                  style: [
                             path.join(__dirname, 'app/styles', 'bootstrap.min.css')
                         ]
              };

process.env.BABEL_ENV = TARGET;

const common = merge(parts.common(PATHS, vendorPackages));
const config = merge(parts.clean(PATHS), common);

module.exports = config;
