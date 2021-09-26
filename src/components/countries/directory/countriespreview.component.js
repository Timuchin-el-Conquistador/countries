
import { Fragment } from "react"
import Country from '../country/countryInfoCollection.component'
import {useSelector} from 'react-redux'
import classes from './countriespreview.module.scss'

const CountriesPreview = ({filterData}) => {
    let countries = useSelector(state=> state.countries.countries)
    if(countries && filterData){
        countries = countries.filter(country => country.name.official.includes(`${filterData}`))
    }
    return (
        <Fragment>
              <div className={classes.countries__collection}>
                {countries&& countries.map((country,index) => 
                <Country key={index} name={country.name.official} capital={country.capital[0]} id={index}
                            img={country.flags[0]} region={country.region} subregion={country.subregion}
                            population={country.population} languages={country.languages} borders={country.borders}/>)}
              </div>
        </Fragment>
    )
}

export default CountriesPreview