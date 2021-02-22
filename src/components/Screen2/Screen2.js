import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
// import { Route } from 'react-router-dom'
// import ScreenThree from '../Screen3/Screen3'

const ScreenTwo = () => (
  <Fragment>
    <header>
      <img src={require('./Img/header.jpg')} style={{ height: 'auto', width: '100%' }}/>
    </header>
    <br />
    <table>
      <tbody>
        <tr>
          <td style={{ paddingLeft: '70px' }}><img src={require('./Img/map.png')} style={{ height: 'auto', width: '35px' }}/></td>
          <td style={{ paddingRight: '50px', paddingLeft: '50px' }}><img src={require('./Img/website.png')} style={{ height: 'auto', width: '35px' }}/></td>
          <td style={{ paddingleft: '0px' }}><img src={require('./Img/contact.png')} style={{ height: 'auto', width: '35px' }}/></td>
        </tr>
      </tbody>
    </table>
    <br />
    <p style={{ fontSize: '12px', textAlign: 'center' }}>
      As the largest park in the south Bronx, St. Mary Park gets plenty of love from those living in the area. And who could blame them? This park offers an oasis of fun and relaxation in a busy area.
    </p>
    <body style={{ background: '#BEE3C9' }}>
      <br />
      <h1 style={{ fontSize: '16px' }}>Get Involved with our current projects!</h1>
      <Card.Link href='#/screen3' style={{ textDecoration: 'none' }}>
        <Card style={{ padding: '10px', marginLeft: '10px', marginRight: '10px' }}>
          <table>
            <tbody>
              <tr>
                <td><img src={require('./Img/planting.jpeg')} style={{ height: 'auto', width: '100%' }}/></td>
                <td style={{ fontSize: '10px', color: 'black' }}>Adopting a tree in your backyard parks is a unique way to be involved in your community while helping to increase the city’s urban forest canopy.</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Card.Link>
      <br />
      <Card style={{ padding: '10px', marginLeft: '10px', marginRight: '10px' }}>
        <table>
          <tbody>
            <tr>
              <td><img src={require('./Img/trash.jpg')} style={{ height: 'auto', width: '70%' }}/></td>
              <td style={{ fontSize: '10px' }}>Join our volunteers in a community-wide park cleanup initiative. Help reduce litter to make our parks cleaner.</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <br />
      <Card style={{ padding: '10px', marginLeft: '10px', marginRight: '10px' }}>
        <table>
          <tbody>
            <tr>
              <td><img src={require('./Img/compost.jpg')} style={{ height: 'auto', width: '70%' }}/></td>
              <td style={{ fontSize: '10px' }}>Adopting a tree in your backyard parks is a unique way to be involved in your community while helping to increase the city’s urban forest canopy.</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <br />
    </body>
  </Fragment>
)

export default ScreenTwo
