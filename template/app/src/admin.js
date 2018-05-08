import Omi from 'omi'
import Nav from './components/hello'
import registerServiceWorker from './assets/register-service-worker'


import AdminStore from './store/admin-store'
  
const nav = new Nav()
const adminStore = new AdminStore({ name: 'Omi' }, {
  onRename: () => {
    nav.update()
  }
})


Omi.render(nav,'#root',adminStore)
registerServiceWorker()
