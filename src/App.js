
import { Fragment, useEffect,useState } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import MainPage from './components/layout/mainpage.component'
import {notificationActions} from './components/store/notification'
import { countriesActions } from './components/store/countriespreview';
import Input from './components/UI/input'

function App() {
  const notificationDispatch = useDispatch()
  const countriesDispatch = useDispatch()
  const [toggle,setToggle] = useState(true)


  useEffect(()=>{
    const fetchingData = async () => {
      notificationDispatch(notificationActions.notificate({title:'proceeding', 
                                                           status:102, 
                                                           value:'sent reuest to the server'}))
      const response = await fetch('https://restcountries.com/v3/region/asia')
      if(response.status!==200){
        throw new Error('request is failed')
      }
      const data = await response.json()
      notificationDispatch(notificationActions.notificate({title:'success', 
                                                           status:200, 
                                                           value:'recieved successfully response from the server'}))
      return await data
    }
    fetchingData()
    .then((data)=> {countriesDispatch(countriesActions.fetched(data))})
    .catch((err) => {
      notificationDispatch(notificationActions.notificate({title:'failed', 
                                                           status:404, 
                                                           value:err.message}))
    })
  },[toggle])
  
  const toggleFn= () => {
      setToggle(state=>!state)
  }


  return (
    <Fragment>
          <MainPage/>
         <Input data={{type:'button', value:'toggle', position:'fixed'}} onClick={toggleFn}/>
    </Fragment>
  );
}

export default App;
