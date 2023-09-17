import React from 'react'
import './login.css'

import im1 from './Images/im1.png'

import 'boxicons';

const Login = () => {
  return (
  
    <section className='mg-5' >


      <div className=''>
        
        <h1 style={{ fontWeight: "700" }}>LOGIN FORM</h1>

        
          <h4 style={{ fontWeight: "500", marginTop: "2px" }}>Welcome back! <br />
            <span style={{ fontSize: '13px', fontWeight: "400", color: 'grey' }}>Enter your Credentials Details
              to access your account</span></h4>

          <form action="#" className='col'>
            <div className='form login'>
              <div className='field input-field' id='contact-form' style={{ marginTop: "2px" }}>
                <label for="fname" style={{ fontSize: '13px', fontWeight: "500" }}>Email address</label>
                <span className='required'>   *</span>
                <br />
                <input style={{
                  fontSize: '10px', fontWeight: "200", padding: "8px ", width: "30%",
                  marginBottom: "8px"
                }}
                  type="email" className='input'
                  placeholder='Enter your email' required />
                <br />

              </div>
              <div className='field input-field '>
                <label for="fname" style={{ fontSize: '13px', fontWeight: "500" }}>Password</label>
                <span className='required'>   *</span>
                <br />

                <input style={{
                  fontSize: '10px', fontWeight: "200", padding: "8px ", width: "30%",
                  marginBottom: "8px"
                }}
                  type="email" className='password' placeholder='Enter your password' required
                />
                <i class='bx bx-hide eye-icon'></i>


              </div>


              <div className='form-link'>
                <a href="#" className='forgot-pass'>Forgot password!</a>
              </div>
              <div className='form-group'>

                <label className='form-remember'>
                  <input type="checkbox" className='check' />
                  Reminder me

                </label>
              </div>


              <div className='field button-field '>
                <button>LOGIN</button>
              </div> 
              <div className='line'>
                
           </div>
          
               <div className='spans'>
                <p className='or'>or</p>

               </div>
               


<div className='mid'>
           <div className='media-options'>
              <a href="#" className='field google'>
                <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt=""
                  className='google-img' />
                <span>sign in with google</span>
              </a>
            
 
              <a href="#" className='field apple
               '>
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png" alt=""
                  className='apple-img' />
                <span >sign in with apple</span>
              </a>
              </div>
              </div>
           <br /> br
<div className='form-li'>
              <span>Don't have an account?
                <a href="#" className='signup-link'>  Sign up</a>
              </span>

            </div> 
            <div className='image' >

<img src={im1} alt="" />
</div>
    
            
             </div>
          </form>
         
           </div>
           </section>
    )
}

export default Login