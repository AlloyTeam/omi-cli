import Omi from 'omi'
import './assets/index.css'
import App from './components/app'
import registerServiceWorker from './assets/register-service-worker'
import AppStore from './store/app-store'
  
const app = new App()
const appStore = new AppStore({ name: 'Omi' }, {
  onRename: () => {
    app.update()
  }
})


Omi.render(app, '#root', appStore)
registerServiceWorker()
