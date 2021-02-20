import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

function Map (props) {
  const [parks, setParks] = useState(null)
  // const centralPark = { lat: 40.785091, lng: -73.968285 }

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
    >
      <Marker
        position={{ lat: 40.785091, lng: -73.968285 }}
      />
      )

      {parks && (
        <InfoWindow
          position={{
            lat: parks.latitude,
            lng: parks.longitude
          }}
          onCloseClick={() => {
            setParks(null)
          }}
        >
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function ContactMap (props) {
  return (
    <div style={{ width: '85vw', height: '85vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=AIzaSyAfNSw-ajKMqtUoBG5Vu-ftKKFyqiOqwks`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}
