import logo from './logo.svg'
import './index.css'
import OmiRouter from 'omi-router'


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
    //  document.body.innerHTML+=`<img src="${moduleA.getSrc()}">`
    //});

    import("./a.js").then(function(moduleA) {
      //console.log(moduleA);
      document.body.innerHTML+=`<img src="${moduleA.getSrc()}">`
    });
  }

  style(){
    return require('./_hello.css')
  }

    install(){
        OmiRouter.init({
            routes: [
                {path: '/about', component: 'About', lazy: true}
            ],
            renderTo: "#view",
            defaultRoute: '/',
            root: this,
            beforeRoute:function(data){
                if(data.route.component === 'About'){
                    import("../intro/index.js").then(function(About) {
                            Omi.render(new About.default(), "#view")
                        })
                }
            }
        })
    }

  render() {

    return `
      <div class="app">
        <div class="app-header">
          <img src='${logo}' onclick="handleClick" class="app-logo" alt="logo" />
          <h2>Welcome to Omi</h2>
          <a omi-router to="/about">aaaaa </a>
        </div>
        <div id="view"></div>
        <p>
          {{name}}
        </p>
      </div>
    `
  }
}

export default Hello
