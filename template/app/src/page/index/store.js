import util from '../../js/utils.js'

export default class AppStore {
    constructor(data) {
        this.info = data.info||{}
        this.total = 0
        this.option = []
        this.nick = ''
        this.listA = []
        this.listB = []
        this.pcA = 0
        this.pcB = 0
        this.onInit= data.onInit
        this.onListInit = data.onListInit

        this.isEnd = false
        this.start = 0
        this.size = 20
    }

    requestData() {

        let data = {
            result: {
                vote_title: 'Do you like Omi?',
                option: ['Sure', 'No'],
                vote_result: [2, 1],
                user_info: {
                    nick: 'dntzhang'
                }
            }

        }
        this.info = data.result

        this.total = this.info.vote_result[0] + this.info.vote_result[1]
        this.pcA = Math.round(this.info.vote_result[0] / this.total * 100)
        this.pcB = 100 - this.pcA
        this.title = this.info.vote_title || ''
        this.option = this.info.option || []
        this.nick = this.info.user_info.nick
        this.onInit()

        //util.post('//story.now.qq.com/cgi-bin/story/content/get_poll_info', {
        //    vid: util.query('vid')
        //}, (data)=> {
        //
        //})
    }

    requestList(callback){


       let data = {
           result:{
               vote_list:{
                   list_A:[{
                       user_info:{
                           portrait:'https://q.qlogo.cn/g?b=qq&k=FxSSRmic8S0cLvgfniaOuiaoQ&s=0',
                           nick:'Tomi'
                       },
                       source:0
                   },{
                       user_info:{
                           portrait:'https://q.qlogo.cn/g?b=qq&k=FxSSRmic8S0cLvgfniaOuiaoQ&s=0',
                           nick:'Xiyou'
                       },
                       source:2
                   }
                   ],
                   list_B:[
                       {
                           user_info:{
                               portrait:'http://thirdqq.qlogo.cn/g?b=sdk\u0026k=ExMibJCNGibKcYlYAJ1K7mtA\u0026s=140\u0026t=1513147957',
                               nick:'Tom'
                           },
                           source:1
                       }
                   ]
               },
               is_end:1
           }
       }
        this.listA = this.listA.concat(data.result.vote_list.list_A||[])
        this.listB = this.listB.concat(data.result.vote_list.list_B||[])
        this.onListInit()

        callback&&callback()

        this.start+= this.size
        if(data.result.is_end === 1){
            this.isEnd = true
        }
        //util.post('//story.now.qq.com/cgi-bin/story/content/get_poll_list',{
        //    vid: util.query('vid'),
        //    start:this.start,
        //    num:this.size
        //},(data)=>{
        //    //console.log(data.result.poll_list)
        //
        //})

    }

    loadMore(callback){
        console.log('load more')
        if(!this.isEnd) {
            this.requestList(callback)
        }
    }

    init(){
        this.requestData()
        this.requestList()
    }
}
