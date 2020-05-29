const path = require('path');

module.exports = [{
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'fontawesome.min.js'
  },
  entry: './source/js/fontawesome.js',
  mode: 'production',
}, {
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bootstrap.min.js'
  },
  entry: './source/js/bootstrap.js',
  mode: 'production',
}, {
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'leaflet.min.js'
  },
  entry: './source/js/leaflet.js',
  mode: 'production',
}, {
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'algolia.min.js'
  },
  entry: './source/js/algolia.js',
  mode: 'production',
}, {
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'form.min.js'
  },
  entry: './source/js/form.js',
  mode: 'production',
}];
