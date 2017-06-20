if ("production" !== process.env.NODE_ENV) {
	// use it for hot reload
	module.exports = require('./root/Root.dev');
}
else {
	module.exports = require('./root/Root.prod');
}
