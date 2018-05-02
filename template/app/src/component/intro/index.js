class Intro extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  style(){
    return require('./_index.less')
  }

  render() {
    return <p class="app-intro">
                To get started, edit <code>src/component/hello.js</code> and save to reload.
            </p>
  }
}


export default Intro
