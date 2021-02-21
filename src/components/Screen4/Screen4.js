import React, { Fragment } from 'react'
// import '../../index.scss'

const PaymentPage = () => (
  <Fragment>
    <body style={{ backgroundColor: '#b7f1ab' }}>
      <br>
      </br>
      <button type="button" className="btn btn-secondary">Back</button>
      <br>
      </br>
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-center">Pledge Amount</h2>
        <br>
        </br>
        <div className="container">
          <button type="button" className="btn btn-success" style={{ margin: '10px' }}>$1</button>
          <button type="button" className="btn btn-success" style={{ margin: '10px' }}>$5</button>
          <button type="button" className="btn btn-success" style={{ margin: '10px' }}>$10</button>
          <button type="button" className="btn btn-success" style={{ margin: '10px' }}>Other</button>
        </div>
        <br>
        </br>
        <div className="container">
          <a href='#/screen5' className="payment"><button type="button" className="btn btn-success">one time payment</button></a>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button" className="btn btn-success">recurring for 6 months</button>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button" className="btn btn-success">recurring for 12 months</button>
        </div>
        <br>
        </br>
        <div className="container">
          <button type="button" className="btn btn-success">continue with Paypal</button>
        </div>
      </div>
    </body>
  </Fragment>
)
export default PaymentPage
