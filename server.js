require('babel-register')({
	presets: ['react', 'es2015', 'stage-0']
});

const express = require('express');
const favicon = require('serve-favicon');
const path    = require('path');
const router  = require('./server/routes/index.js');

const sassMiddleware = require('node-sass-middleware');
const srcPath = path.join(__dirname, 'sass');
const destPath = path.join(__dirname, 'public');

//app setup
const app = express();
const port = process.env.PORT || 4300;
app.listen(port, () => {
	console.log('server listening on port', port)
});

//for sass
app.use(sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'compressed'
}));

//static files
app.use(express.static('public'));
app.use(router);
//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
