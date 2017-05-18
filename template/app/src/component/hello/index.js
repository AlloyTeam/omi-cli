import logo from './logo.svg';
import './index.css';

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
    console.log(this.data)
  }

  render() {

    return `
      <div class="App">
        <div class="App-header">
          <img src=${logo} class="App-logo" alt="logo" />
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
