import Country from './Country'

const WhatToShow = ({filtercountries, setFiltercountries}) => {
    return (
        <div>
          {filtercountries.length === 1 ? (
          <Country country={filtercountries[0]}/> 
          ) : ( 
          filtercountries.map(country => 
            <li key={country.name.official}> {country.name.common} <button onClick={() => setFiltercountries([country])}>show</button> </li>
          ))}
        </div>
      )
  }

export default WhatToShow