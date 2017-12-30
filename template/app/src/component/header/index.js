class Header extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  style(){
    return require('./_index.less')
  }

  render() {

    return <div class="app-header"  style={{"background-image": "url("+require('./bg.png')+")"}}>
                <div class="title">{this.$store.title}</div>
                <div class="detail">{this.$store.nick}发起 · {this.$store.total}人参与</div>
            </div>
  }
}


export default Header
