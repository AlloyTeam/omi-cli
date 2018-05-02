import './container';

if ("production" !== process.env.NODE_ENV) {

    // use it for hot reload
    module.hot.accept();

    // dispose handler
	module.hot.dispose(function() {
		// revoke the side effect
        document.querySelector('#pages').innerHTML = ' '
	});
}