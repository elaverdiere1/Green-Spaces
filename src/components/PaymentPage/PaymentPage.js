import React, { Fragment } from 'react'

const PaymentPage = () => (
  <Fragment>
    
    <h2 class="text-center">Pledge Amount</h2>

    <br>
    </br>

    <div class="container">
      <button type="button" class="btn btn-success">$1</button>
      <button type="button" class="btn btn-success">$5</button>
      <button type="button" class="btn btn-success">$10</button>
      <button type="button" class="btn btn-success">Other</button>
    </div>

    <br>
    </br>

    <div class="container">
      <button type="button" class="btn btn-success">one time payment</button>
    </div>

    <br>
    </br>

    <div class="container">
      <button type="button" class="btn btn-success">recurring for 6 months</button>
    </div>

    <br>
    </br>

    <div class="container">
      <button type="button" class="btn btn-success">recurring for 12 months</button>
    </div>

    <br>
    </br>

    <div class="container">
      <button type="button" class="btn btn-success">continue with Paypal</button>
    </div>

  </Fragment>
)

export default PaymentPage
