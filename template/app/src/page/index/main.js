import './container';

if ("production" !== process.env.NODE_ENV) {

   // require('vconsole/dist/vconsole.min.js');
    // use it for hot reload
    module.hot.accept();
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
