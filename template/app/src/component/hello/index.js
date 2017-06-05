import logo from './logo.svg'
import './index.css'
import Intro from '../intro/index.js'

Omi.tag('intro',Intro)

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  handleClick(){
    //require.ensure(['./a.js'], function() {
    //  let moduleA = require("./a.js")
    //
    //  console.log(moduleA)
    //
    //  document.body.innerHTML+=`<img src="${moduleA.src}">`
    //});

    import("./a.js").then(function(moduleA) {
      console.log(moduleA);
      document.body.innerHTML+=`<img src="${moduleA.src}">`
    });
  }

  style(){
    return require('./_hello.css')
  }

  render() {

    return `
      <div class="app">
        <div class="app-header">
          <img src='${logo}' onclick="handleClick" class="app-logo" alt="logo" />
          <h2>Welcome to Omi</h2>
        </div>
        <intro></intro>
        <p>
          {{name}}
        </p>
      </div>
    `
  }
}

export default Hello
