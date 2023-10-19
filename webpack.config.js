const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development' for source maps
  entry: './src/index.js', // Adjust the entry point to your main JavaScript file
  output: {
    filename: 'main.js', // Name of the bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devtool: 'source-map', // Generate source maps

};
