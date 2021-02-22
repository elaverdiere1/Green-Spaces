import React, { Fragment } from 'react'
import '../../index.scss'

const ProjectInfo = () => (
  <Fragment>
    <header>
      <img src={require('./Img/trees.jpg')} style={{ height: 'auto', width: '100%' }}/>
    </header>
    <br/>
    <h2 style={{ fontSize: '24px' }}className="text-left">Plant-a-thon</h2>
    <br/>
    <div className="container">
      <p style={{ fontSize: '10px' }}>
        Adopting a tree in your backyard is a unique way to be involved in your community while helping to increase the city’s urban forest canopy.
        St. Mary’s Park is constantly working to make the park beautiful and lush green  for our community we dearly care about.
        This summer we are dedicated to grow 1000 more trees and with the help of generaous neighbors and donors like you, we almost meet our target.
        Become a part of a family by adopting aor donating a tree and bring home healthier air quality.
      </p>
    </div>
    <br/>
    <div className="icons">
      <table>
        <tbody>
          <tr>
            <td><img src={require('./Img/adopt.jpg')} style={{ height: 'auto', width: '80px' }}/></td>
            <td><img src={require('./Img/progress.jpg')} style={{ height: 'auto', width: '200px' }}/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <a href='#/screen4' className="payment"><button id="select" type="button">Select</button></a>
    </div>
    <br/>
    <body style={{ background: '#BEE3C9' }}>
      <h3 style={{ fontSize: '12px', marginLeft: '10px', paddingTop: '10px', fontWeight: 'bold' }} className="text-left">Other Ways to get involved</h3>
      <br/>
      <div className="icons">
        <table>
          <tbody>
            <tr>
              <td><img src={require('./Img/gardening.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
              <td style={{ paddingRight: '50px', paddingLeft: '50px' }}><img src={require('./Img/watering.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
              <td><img src={require('./Img/cleaning.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className="icons">
        <div className="bottom">
          <table>
            <tbody>
              <tr>
                <td><img src={require('./Img/maintenance.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
                <td style={{ paddingRight: '50px', paddingLeft: '50px' }}><img src={require('./Img/event.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
                <td><img src={require('./Img/donate.jpg')} style={{ height: 'auto', width: '35px', borderRadius: '50%' }}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
  </Fragment>
)

// <button type="button" className="btn btn-secondary">Back</button>

export default ProjectInfo
