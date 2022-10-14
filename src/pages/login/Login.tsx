import React from 'react'
import './Login.scss'
import lendsqrLogo  from '../../assets/lendsqrLogo.svg'
import  pabloImg  from '../../assets/pabloImg.svg'
function Login() {
  return (
    <div className='login'>
        <section className='login-left'>
            <img src={lendsqrLogo} alt="Lendsqr Logo" className='logo'/>
            <div className='login-left-img'>
                <img src={pabloImg} alt="PabeloImg"/>
            </div>
        </section>
         <section className='login-form'> 
            <div className='form-container'>
                <h1 className="login-h1">Welcome!</h1>
                <p className='login-p'>Enter details to login</p>
                <form >
                    <div className='form-group'>
                        <input type='text' placeholder="Email" className='input-email'/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder="password" className='input-password'/>
                        <h6>SHOW</h6>
                    </div>
                    <button className='btn-password'>FORGOT PASSWORD</button>

                    <button className='btn-login'>LOG IN</button>
                </form>
                
            </div>
        </section> 
    </div>
  )
}

export default Login