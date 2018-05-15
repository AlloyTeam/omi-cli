import Omi from 'omi'
import Hello from './components/hello'
import registerServiceWorker from './assets/register-service-worker'
import AdminStore from './store/admin-store'
  
const hello = new Hello()
const store = new AdminStore({ name: 'Omi' }, {
  onRename: () => {
    hello.update()
  }
})

Omi.render(hello, '#root', { store })
registerServiceWorker()
