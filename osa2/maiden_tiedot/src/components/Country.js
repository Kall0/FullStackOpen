import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({country: {name, capital, population, languages, flags, latlng}}) => {
    //console.log('Country', latlng)
    const [weather, setWeather] = useState([])
    const langArr = Object.entries(languages)

    useEffect(() => {
      const access_key = '40ec69dd263050d671889c57bdc5d397'//process.env.REACT_APP_API_KEY
      const test = 'https://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=' + access_key
      console.log('effect')
      axios
      .get(test)
      .then(response =>{
        console.log('promise fulfille')
        setWeather(response.data)
      })
    }, [])

    console.log('render', weather, "weather")


    return (
      <>
         <h1>{name.common}</h1>
          <p>capital {capital}</p>
          <p>population {population}</p>
          <h3>languages:</h3>
            {langArr.map( language => 
              <li key={language[0]}>{language[1]}</li>)}
          <img src={flags.png}/>
          <h2>Weather in {capital}</h2>
          {weather.length == 0
          ? <p></p>
          : <><><p>Temperature {Math.round(weather.main.temp - 273.15)}</p>
            <img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} /></>
            <p>Wind {weather.wind.speed} m/s</p></>}
      </>
    )
  }
export default Country