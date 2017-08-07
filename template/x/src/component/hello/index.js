import logo from './logo.svg'
import './index.css'
import '../intro/index.js'

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  handleClick(){
      alert('Hello Omix !')
  }

  style(){
    return require('./_hello.css')
  }

  render() {

    return <div class="app">
                <div class="app-header">
                  <img src={logo} onclick={this.handleClick.bind(this)} class="app-logo" alt="logo" />
                  <h2>Welcome to Omix</h2>
                </div>
                <intro></intro>
                <p>
                  {this.data.name}
                </p>
            </div>
  }
}

export default Hello
