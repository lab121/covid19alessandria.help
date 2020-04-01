const path = require('path');

module.exports = {
    entry: './source/js/fontawesome.js',
    output: {
            path: path.resolve(__dirname, 'assets/js'),
            filename: 'fontawesome.min.js'
          },
    mode: 'production'
};

module.exports = {
  entry: './source/js/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bootstrap.min.js'
  },
  mode: 'production'
};
