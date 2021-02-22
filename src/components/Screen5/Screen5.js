import React, { Fragment } from 'react'
import '../../index.scss'

const TYPage = () => (
  <Fragment>
    <br/>
    <a href='#/screen4' className="button"><button type="button" className="btn btn-secondary">Back</button></a>
    <br/>
    <h1 className="text-center">THANK YOU!</h1>
    <br/>
    <div className="parent">
      <img src={require('./Img/tree.png')}/>
    </div>
    <div className="text">
      <h2 className="text-center">In one year...</h2>
      <br>
      </br>
      <p>
        Your tree will have absorbed more than 48 pounds of carbon dioxide from the earths atmosphere.
      </p>
      <p>
        Whoa.
      </p>
    </div>
    <br/>
    <div className="icons">
      <table>
        <tbody>
          <tr>
            <td><img src={require('./Img/facebook.png')} style={{ height: 'auto', width: '30px' }}/></td>
            <td style={{ paddingRight: '25px', paddingLeft: '25px' }}><img src={require('./Img/twitter.png')} style={{ height: 'auto', width: '45px' }}/></td>
            <td style={{ paddingRight: '25px' }}><img src={require('./Img/instagram.png')} style={{ height: 'auto', width: '30px' }}/></td>
            <td><img src={require('./Img/vimeo.png')} style={{ height: 'auto', width: '45px' }}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
)

export default TYPage
