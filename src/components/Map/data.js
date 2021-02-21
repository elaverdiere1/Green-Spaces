import React, { useState, useEffect } from 'react'

function Data () {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/enfh-gkve.geojson')
      .then(
        (result) => {
          setIsLoaded(true)
          setParks(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {parks.map(park => (
          <li key={park.id}>
            {park.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default Data
