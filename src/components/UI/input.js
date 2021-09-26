
import classes from './input.module.scss'
import React, { useRef , useImperativeHandle} from 'react'


const Input = React.forwardRef((props,ref) => {
    const {data} = props
    const inputValue = useRef()
    
    let position

    const target = () => {
        return inputValue.current.value
    }

    useImperativeHandle(ref,()=>{
        return {target:target}
    })

    if(data.position==='fixed'){
        position=classes.fixed
    }else{
        position=classes.relative
    }
    return (
       <div className={`${classes.ui__input} ${position}`}>
           <label htmlFor={data.htmlFor}>{data.title}</label>
           <input className={classes.ui__input__button}
                  type={data.type} value={data.value} 
                  id={data.htmlFor} 
                  ref={inputValue}
                  onClick={props.onClick}/>
       </div>
    )
})


export default Input