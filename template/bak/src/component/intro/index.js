import tpl from './index.html'

class Intro extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  style(){
    return require('./_index.less')
  }

  render() {
    return tpl
  }
}

export default Intro
