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
                <div>
                    <img src={require('./omix.png')} />
                </div>
            </p>
  }
}

Omi.tag('intro',Intro)

export default Intro
