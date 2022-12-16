import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    const history = createHistory({
        basename: process.env.PUBLIC_URL,
      });
      const store = configureStore({ history });
    return (
       
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">Check out Contacts List Available</p>
            <div className="buttons text-center">
            <ConnectedRouter history={history}>
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
                </ConnectedRouter>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "60vh",
   
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}