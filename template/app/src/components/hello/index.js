import { tag, WeElement } from 'omi'
import style from './_index.css'

@tag('hello-element')
class HelloElement extends WeElement{

    css(){
        return style
    }

    render(){
        return(
            <div class="hello">
               <div> I am hello element.</div>
               <div class="omi"></div>
            </div> 
        )
    }
}