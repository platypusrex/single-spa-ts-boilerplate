const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`app is listening on port ${port}`));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

let compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));

app.use(webpackHotMiddleware(compiler));

