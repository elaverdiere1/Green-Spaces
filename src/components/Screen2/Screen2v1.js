import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
// import Data from './data'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

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
    <div style={{ width: '85vw', height: '40vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=AIzaSyAfNSw-ajKMqtUoBG5Vu-ftKKFyqiOqwks`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the cards content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>

  )
}
