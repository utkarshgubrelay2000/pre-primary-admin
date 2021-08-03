import React from 'react'
import success from './success.gif';



function PaymentSuccessfull() {
    return (
        <div>
          <div className="container">
              <div className="row justify-content-md-center ">
                  <center><div className="col-8">
                  <img src={success} alt="loading..." />
                  <a className="btn btn-primary btn-hover-secondary" 
                  style={{color:'white' }}>Schedule The Classess</a>
                 
                  </div>
                  </center>
                 
              </div>
              
              
          </div>
        </div>
    ) 
}

export default PaymentSuccessfull
