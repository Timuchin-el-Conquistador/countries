
import {Fragment, useState} from 'react'
import classes from './mainpage.module.scss'
import Countries from '../countries/directory/countriespreview.component'
import Notification from '../notification/notification.component'
import {useSelector} from 'react-redux'
import Filtering from '../filter/filter.component'

const MainPage = () => {
  const notification = useSelector(state=> state.notification.notification)
  const [filterValue, setFilterValue] = useState()

  const filterFn = value => {
    setFilterValue(value)
  }
  return (
      <Fragment>
          <header>
           {notification &&<Notification title={notification.title} 
                        status={notification.status}
                        value={notification.value}/>}
          
              <div className={classes.filterCountries}>
                    <Filtering onSubmit={filterFn}/>
              </div>
          </header>
          <main>
            {notification.title==='success' && <Countries filterData={filterValue}/>}
          </main>
      </Fragment>
  )
}

export default MainPage