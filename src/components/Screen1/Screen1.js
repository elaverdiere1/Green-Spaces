import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import '../../index.scss'

const ScreenOne = () => (
  <Fragment>
    <header>
      <img src={require('./Img/map.png')} style={{ height: 'auto', width: '100%' }}/>
    </header>
    <h1 className="near" style={{ fontSize: '24px' }}>Green Spaces Near You</h1>
    <hr />
    <Card.Link href='#/screen2'>
      <Card style={{ padding: '10px', marginLeft: '10px', marginRight: '10px' }}>
        <table>
          <tbody>
            <tr>
              <td><img className="img" src={require('./Img/park.png')} style={{ height: '90%', width: 'auto' }}/></td>
              <td style={{ fontSize: '10px' }}>Adopting a tree in your backyard parks is a unique way to be involved in your community while helping to increase the city’s urban forest canopy.</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Card.Link>
  </Fragment>
)

export default ScreenOne

// <Card style={{ width: '100%', position: 'bottom' }} text="white">
//   <Card.Img variant="top" src="https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?k=6&m=1021170914&s=612x612&w=0&h=MbXPjMmkFVWiRYShvEaQ1ZWLoCw55f1mFu3p6fdZqhE=" />
//   <Card.ImgOverlay>
//     <Card.Title>Liz Christy Community Garden</Card.Title>
//   </Card.ImgOverlay>
// </Card>
// <Card>
//   <Card.Body>
//     <Card.Text id="icons">
//       <Card.Img className="float-right" style={{ width: '20px', height: '20px' }} src={require('./Img/contact.png')} />
//       <Card.Img className="float-center" style={{ width: '20px', height: '20px' }} src={require('./Img/website.png')} />
//       <Card.Img className="float-left" style={{ width: '20px', height: '20px' }} src={require('./Img/map.png')} />
//     </Card.Text>
//     <Card.Text>
//       The Liz Christy Bowery Houston Garden, started in 1973, is the first and oldest community garden in New York City. It is now a part of New York City Parks Department.
//     </Card.Text>
//   </Card.Body>
// </Card>
// <Card style={{ width: '100%', background: '#b7f1ab' }}>
//   <Card.Body className="row no-gutters">
//     <Card.Text>
//       <Card.Img className="float-center" style={{ width: '60px', height: '60px' }} src={require('./Img/sol_ring.png')} alt={'not working'}/>
//     </Card.Text>
//     <Card.Link href="#screen2">
//       <Card.Text>
//       Adopting a tree in your backyard parks is a unique way to be involved in your community while helping to increase the city’s urban forest canopy.
//       </Card.Text>
//     </Card.Link>
//   </Card.Body>
// </Card>
