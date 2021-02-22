import React, { Fragment } from 'react'
// import '../../index.scss'

const PaymentPage = () => (
  <Fragment>
    <body style={{ backgroundColor: '#BEE3C9' }}>
      <br>
      </br>
      <button type="button" c>Back</button>
      <br>
      </br>
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-center">Pledge Amount</h2>
        <br>
        </br>
        <div className="container">
          <button type="button" style={{ margin: '10px' }}>$1</button>
          <button type="button" style={{ margin: '10px' }}>$5</button>
          <button type="button" style={{ margin: '10px' }}>$10</button>
          <button type="button" style={{ margin: '10px' }}>Other</button>
        </div>
        <br>
        </br>
        <div className="container">
          <a href='#/screen5' className="payment"><button type="button">one time payment</button></a>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button">recurring for 6 months</button>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button">recurring for 12 months</button>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button">continue with Paypal</button>
        </div>
      </div>
    </body>
  </Fragment>
)
export default PaymentPage
