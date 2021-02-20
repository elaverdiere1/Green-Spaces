import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, InfoWindow } from 'react-google-maps'

function Map (props) {
  const [parks, setParks] = useState(null)

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
    >
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
        contacts={props.contacts}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}
