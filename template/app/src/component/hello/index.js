import logo from './logo.svg'
import './index.css'
import Intro from '../intro/index.js'

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
      this.$store.rename('Hello Omi !')

      import("./a.js").then(function(moduleA) {
          let img = document.createElement('img')
          img.src = moduleA.getSrc()
          document.body.appendChild(img)
      });
  }

  style(){
    return require('./_hello.css')
  }

  render() {

    return <div class="app">
                <div class="app-header">
                  <img src={logo} onclick={this.handleClick} class="app-logo" alt="logo" />
                  <h2>Welcome to Omi</h2>
                </div>
                <Intro></Intro>
                <p>
                  {this.$store.name}
                </p>
            </div>
  }
}

export default Hello
