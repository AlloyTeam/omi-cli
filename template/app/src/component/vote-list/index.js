// import 'omi-tap'

class VoteList extends Omi.Component {
    constructor(data, option){
        super(data, option)
        this.clickHandler = this.clickHandler.bind(this)
    }

    
    clickHandler(name){
        alert(name)
    }

    style(){
        return require('./_index.less')
    }

    showProfile(user) {
        alert(user.nick)
    }


    render() {

        
        let list = this.props.left?this.$store.listA:this.$store.listB

        return (
            <div class="vote-list" style={"left:"+(this.props.left?"3%":"53%")}>
                <div>
                    {
                        list.map(item =>
                                <div omi-tap  onclick={()=>{
                                    this.clickHandler(item.user_info.nick)
                                }} class="vote-item" tap={()=>{this.showProfile(item.user_info)}}>
                                    <img src={item.user_info.portrait} />
                                    <div class={item.source==1?'right single':'right'}>
                                        <div class="l1">{item.user_info.nick}</div>
                                        <div class='l2'>{this.getTextBySource(item.source)}</div>
                                    </div>
                                </div>
                        )
                    }

                </div>
            </div>
        )
    }

    getTextBySource(source) {
        return ['来自手机QQ','','来自微信'][source]
    }
}

export default VoteList
