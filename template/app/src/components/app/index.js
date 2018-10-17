import { tag, WeElement } from 'omi'
import logo from './logo.svg'
import style from './_index.css'
import '../hello'

@tag('my-app')
class MyApp extends WeElement {

  static get data() {
    return { name: '' }
  }

  clickHandler = () => {
    this.store.rename('Omi V4.0')
  }

  css() {
    return style + `
    code{
      color: ${Math.random() > 0.5 ? 'red' : 'blue'}
    }

    .app-logo{
      cursor: pointer; 
    }
  `
  }

  render(props, data) {
    return (
      <div class="app">
        <header class="app-header">
          <img src={logo} onClick={this.clickHandler} class="app-logo" alt="logo" />
          <h1 class="app-title">Welcome to {data.name}</h1>
        </header>
        <p class="app-intro">
          To get started, edit <code>src/components/index.js</code> and save to reload.
        </p>
        <hello-element></hello-element>
      </div>
    )
  }
}