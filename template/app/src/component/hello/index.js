import logo from './logo.svg';
import './index.css';

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)


  }

  handleClick(){
    require.ensure(['./a.js'], function() {
      var a = require("./a.js");
      // ...

      console.log(a)

      document.body.innerHTML+=`<img src="${a.src}">`
    });

  }

  render() {

    return `
      <div class="App">
        <div class="App-header">
          <img src='${logo}' onclick="handleClick" class="App-logo" alt="logo" />
          <h2>Welcome to Omi</h2>
        </div>
        <p class="App-intro">
          To get started, edit <code>src/component/hello.js</code> and save to reload.
        </p>
         <p class="App-intro">
          {{name}}
        </p>
      </div>
    `;
  }
}

export default Hello;
