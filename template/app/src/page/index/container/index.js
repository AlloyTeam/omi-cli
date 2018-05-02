import Hello from '../../../component/hello/index.js'
import HelloStore from '../hello-store'
import "./index.css"


let hello = new Hello()
let store = new HelloStore({ name : 'Omi' } ,{
    onRename :()=>{
        hello.update()
    }
})



Omi.render(hello, '#pages', store)