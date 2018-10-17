import Omi from 'omi'
import './index.css'

import style from './_index.css'

class Hello extends Omi.Component{

    staticStyle(){
        return style
    }

    render(){
        return(
            <div class="hello">
               <div> I am admin page.</div>
               <div class="omi"></div>
            </div> 
        )
    }
}

export default Hello