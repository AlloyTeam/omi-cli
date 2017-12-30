class Vote extends Omi.Component {
    constructor(data, option){
        super(data, option)
    }

    style(){
        return require('./_index.less')
    }

    render() {

        return <div class="vote">
            <div class="left">
                <div>{this.$store.option[0]}</div>
                <div class='percent'>{this.$store.pcA}%</div>
            </div>
            <div class="right">
                <div>{this.$store.option[1]}</div>
                <div  class='percent'>{this.$store.pcB}%</div>
            </div>
        </div>
    }
}


export default Vote
