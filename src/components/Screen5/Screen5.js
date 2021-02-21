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
      <div className="inner"><img src={require('./Img/check.png')}/></div>
    </div>
    <br/>
    <div className="text">
      <h2 className="text-center">In one year...</h2>
      <br>
      </br>
      <p>
        Your tree will have absorbed more than 48 pounds of carbon dioxide from the earths atmosphere.
      </p>
      <br/>
      <p>
        Whoa.
      </p>
    </div>
    <br/>
    {/* Social Media Icons */}
  </Fragment>
)

export default TYPage
