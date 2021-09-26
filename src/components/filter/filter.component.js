import { useRef } from 'react'
import Input from '../UI/input'
import classes from './filter.module.scss'

const Filtering = ({onSubmit}) => {
    const filterVlue = useRef()

    const filterSubmit = event => {
        event.preventDefault()
        onSubmit(filterVlue.current.target())
    }
    return (
      <form className={classes.filterCountries__form} onSubmit={filterSubmit}> 
          <Input data={{type:'radio', htmlFor:'name', title:'name', position:'relative'}}/>
          <Input data={{type:'text',  position:'relative'}} ref={filterVlue} />
          <Input data={{type:'submit', position:'relative'}}/>
      </form>
    )
}

export default Filtering