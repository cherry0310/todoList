const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

let app = new express();
let port = 3000;

let complier = webpack(config);
app.use(webpackDevMiddleware(complier, { noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(complier));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, function(error){
    if(error){
        console.error(error);
    }else{
        console.info('listening on port %s', port);
    }
})
