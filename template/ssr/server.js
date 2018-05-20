const fs = require('fs');
const express = require('express');
const { join, basename } = require('path');
const compression = require('compression')();
const {render} = require('omi-render-to-string');
const {app} = require('./build/ssr-build/ssr-bundle');

const { PORT=3000 } = process.env;

const bodyTag = '<body>'
const headTag = '</head>'

const assets = join(__dirname, 'build');
const template = fs.readFileSync('./build/tpl.html', 'utf8');
const favicon = require('serve-favicon')(join(assets, 'favicon.ico'));

function setHeaders(res, file) {
	let cache = basename(file) === 'sw.js' ? 'private,no-cache' : 'public,max-age=31536000,immutable';
	res.setHeader('Cache-Control', cache); // disable service worker cache
}

function requestData(callback){
	setTimeout(()=>{
		callback({name:'Omi SSR',age : 1})
	},100)
}

express()
	.use(favicon)
	.use(compression)
	.use(express.static(assets, { setHeaders }))
	.get('*', (req, res) => {
		requestData((data)=>{
			app.$store.ssrData = data;
			const result = render(app);
			res.send(template.replace(headTag, result.css+headTag).replace(bodyTag, bodyTag + result.html));
		})	
	})
	.listen(PORT, err => {
		if (err) throw err;
		console.log(`> Running on localhost:${PORT}`);
	});
