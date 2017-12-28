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






//{"retcode":0,"result":{"errCode":0,"poll_list":[{"poll_result":[1,0],"errno":0,"poll_user_list":[{"uid":3701278653,"portrait_url":"http://thirdqq.qlogo.cn/g?b=sdk\u0026k=ExMibJCNGibKcYlYAJ1K7mtA\u0026s=140\u0026t=1513147957","source":1,"open_id":""}],"vid":"AECC7756F5A1BBA436B2056DFB38B212"}]}}
//function is_weixn(){
//    var ua = navigator.userAgent.toLowerCase();
//    if(ua.match(/MicroMessenger/i)=="micromessenger") {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//var $ ={}
//
//$.http = {
//    ajax: function (url, para, cb, method) {
//        var xhr = new XMLHttpRequest();
//
//        xhr.open(method, url);
//        xhr.onreadystatechange = function () {
//            var ret;
//            if (xhr.readyState == 4) {
//                console.log( xhr.responseText)
//
//                //ie error with 1223 and opera with 304 or 0
//                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || xhr.status === 1223 || xhr.status === 0) {
//                    if (xhr.responseText) {
//                        console.log(1)
//                        ret = eval("(" + xhr.responseText + ")");
//                        cb(ret); //不容错，以便于排查json错误
//                    } else {
//                        console.log(2)
//                        ret = { ec: xhr.responseText };
//                        cb(ret);
//                    }
//
//                } else {
//                    console.log(3)
//                    ret = { ec: xhr.status };
//                    cb(ret);//5XX错误等没有返回的情况下处理。
//
//
//                }
//                xhr = null;
//
//            }
//        };
//        if(method == 'GET'){
//            xhr.send();
//        }else{
//            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//            xhr.send(para);
//        }
//
//        return xhr;
//    }
//}
//
//$.post = function (url, para, cb, type) {
//    var arr = [];
//    for (var i in para) {
//        arr.push(i + "=" + encodeURIComponent(para[i]));
//    }
//
//    //arr.push('bkn=' + $.bkn());
//
//
//    var s = arr.join('&');
//    return $.http.ajax(url, s, cb, "POST");
//};
//
//$.get = function (url, para, cb, type) {
//    var arr = [];
//    for (var i in para) {
//        arr.push(i + "=" + encodeURIComponent(para[i]));
//    }
//
//    //arr.push('bkn=' + $.bkn());
//    //arr.push('sid=' + $.bom.query('sid'));
//    // arr.push('src=3');
//
//    var s = arr.join('&');
//    return $.http.ajax(url+"?"+s, s, cb, "GET");
//};
//
//
//function query(n) {
//    var m = window.location.search.match(new RegExp("(/?|&)" + n + "=([^&]*)(&|$)"));
//    return !m ? "" : decodeURIComponent(m[2]);
//}
//
//
//function login() {
//    //encodeURI
//    if (!query('code')) {
//        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx655b8a6c37c4d30b&redirect_uri=http://story.now.qq.com/m/vote/index.html&response_type=code&scope=snsapi_login&state=123&connect_redirect=1#wechat_redirect'
//    } else {
//        alert(query('code'))
//        console.log(query('code'))
//
//
//        setTimeout(function(){
//            getTokenHttps(query('code'))
//        },1000)
//    }
//}
//
//
//if(is_weixn()){
//    login()
//}
//
//http://story.now.qq.com/m/vote/index.html?code=0710O7Wd2Xep7E0srKWd2V3cWd20O7Wt&state=123
//
//
//function getTokenHttps(code) {
//    //app secret :  e8ed513c05a8606fc70118b04dddc2e4
//    $.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
//        appid: "wx655b8a6c37c4d30b",
//        secret: "e8ed513c05a8606fc70118b04dddc2e4",
//        code: code,
//        grant_type: 'authorization_code'
//    }, function (data) {
//
//        alert(JSON.stringify(data))
//        console.log(data)
//        $.get('https://api.weixin.qq.com/sns/userinfo', {
//            access_token: data.access_token,
//            openid: data.openid
//        }, function (user) {
//
//            alert(JSON.stringify(user))
//            console.log(user)
//        })
//    })
//}

