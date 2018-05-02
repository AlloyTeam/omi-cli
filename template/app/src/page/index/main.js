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


 

import AppStore from './store.js'
import App from './container'
let app = new App()

let store =  new AppStore({
    onInit:()=>{
        app.update()
    },
    onLoadMore:()=>{
        app.update()
    },
    onListInit:()=>{
        app.update()
    }
})

Omi.render(app, document.querySelector('#pages'),store)


store.init()
