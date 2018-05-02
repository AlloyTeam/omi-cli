import   './index.css'
import Header from '../../../component/header'
import Vote from '../../../component/vote'
import VoteList from '../../../component/vote-list'

export default class App extends Omi.Component {
    constructor(data, option){
        super(data, option)
    }

    installed(){
        window.onscroll = () => this.loadMore()
    }

    loadMore() {
        const body = document.body,
            html = document.documentElement,
            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
            vp_height = window.innerHeight

        //pc上调试使用document.documentElement.scrollTop
        if (height - document.body.scrollTop - vp_height < 200&&!this.loading) {
            this.loading = true

            this.$store.loadMore(()=>{
                this.loading = false
            })
        }
    }

    render() {
        let height =Math.max(window.innerHeight-300, Math.max(this.$store.listA.length,this.$store.listB.length)*60)
        return (
            <div>
                <Header></Header>
                <Vote></Vote>
                <div style="position:relative;">
                    <VoteList left={true} ></VoteList>
                    <div class="split b1 br" style={"height:"+height+"px;width:1px;position:absolute;left:50%;top:0;"}></div>
                    <VoteList></VoteList>
                </div>
            </div>
        )
    }
}
