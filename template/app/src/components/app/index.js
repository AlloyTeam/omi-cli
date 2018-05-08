import Omi from 'omi'
import logo from './logo.svg'
import style from './_index.css'


class App extends Omi.Component {

  install(){
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.$store.rename('Omi CLI')
  }

  staticStyle() {
    return style
  }

  style() {
    return `
      code{
        color: ${Math.random() > 0.5 ? 'red' : 'blue'}
      }

      .app-logo{
        cursor: pointer; 
      }
    `
  }

  render() {
    return (
      <div class="app">
        <header class="app-header">
          <img src={logo} onClick={this.clickHandler} class="app-logo" alt="logo" />
          <h1 class="app-title">Welcome to {this.$store.name}</h1>
        </header>
        <p class="app-intro">
          To get started, edit <code>src/components/index.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
