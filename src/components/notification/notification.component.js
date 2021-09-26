import { Fragment } from "react"
import classes from './notification.module.scss'


const Notification = ({title, status, value}) => {

    let background 
    if(status===200){
        background=classes.success
    }else if(status===102){
        background=classes.proceeding
    }else if(status===404){
        background=classes.failed
    }
    return (
        <Fragment>
            <div className={`${classes.notification} ${background}`}>
                 <span>{title}</span>
                 <span>{value}</span>
            </div>
        </Fragment>
    )
}


export default Notification