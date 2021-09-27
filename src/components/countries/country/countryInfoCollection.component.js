import classes from './countryInfoCollection.module.scss'

const Country = ({img, id,name,languages,borders,region,subregion}) => {
       const languagesList = Object.values(languages)

    return(
       
          <div className={classes.countries__collection__country}>
                <div className={classes.countries__collection__country__img} 
                     style={{'backgroundImage': `url(${img})`}}/>
                <div className={classes.countries__collection__country__info}>
                  <div>Name: {name}</div>
                  <div>Region: {region}</div>
                  <div>Subregion: {subregion}</div>
                  
                  <div className={classes.countries__collection__country__info__language}>Languages:{<ul>{languagesList.map((language,index)=><li key={index}>{language}</li>)}</ul>}</div>
                  <div className={classes.countries__collection__country__info__border}>Borders:{<ul>{borders&&borders.map((border,index)=><li key={index}>{border}</li>)}</ul>}</div>
                </div>
          </div>
    )
}


export default Country
