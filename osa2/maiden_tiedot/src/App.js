import { useEffect, useState } from 'react'
import axios from 'axios'
import WhatToShow from './components/WhatToShow'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtercountries, setFiltercountries] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
      setCountries(response.data)
      })
  }, [])
  
  const handleletter = (i) => {
    setFiltercountries(countries.filter(x => x.name.common.toLowerCase().includes(i.target.value) === true))
  }

  return (
    <div>
      <form>
        find countries <input onChange={handleletter}/>
      </form>
      {filtercountries.length > 10 
      ? <p>Too many matches, specify another filter</p>
      : <WhatToShow filtercountries={filtercountries} setFiltercountries={setFiltercountries}/>}
    </div>
  )
}

export default App