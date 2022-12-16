import React from 'react'
import { Link } from 'react-router-dom'

import '../../style.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <div className="overlay">
         
            <form action="https://Swathipbhat.github.io/my-project/home">
            <div className="con">
    
            <header className="head-form">
            <h2>Log In</h2>
            
            <p>login here using your username and password</p>
            </header>
        
         <br/>
    <div  className="field-set">
      <input  className="form-input" id="txt-input" type="text" placeholder="UserName" required/>
      <br/>

      <input  className="form-input" type="password" placeholder="Password" id="pwd" name="password" required/>
      
      <button  className="log-in"> Log In </button>
    </div>

    
    <div  className="other">
     
      <button  className="btn submits frgt-pass">Forgot Password</button>
    
      <button  className="btn submits sign-up">Sign Up
      
      
      </button>
    
    </div>

  </div>

 
</form>
</div>

        </div>
        
    )
}
