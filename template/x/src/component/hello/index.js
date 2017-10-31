import logo from './logo.svg'
import './index.css'
import Intro from '../intro/index.js'

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  handleClick(){
      alert('Hello Omix !')
      import("./a.js").then(function(moduleA) {
          //console.log(moduleA);
          document.body.innerHTML+=`<img src="${moduleA.getSrc()}">`
      });
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
                <Intro></Intro>
                <p>
                  {this.data.name}
                </p>
            </div>
  }
}

export default Hello
