import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import "../Styling/home.css"

const Hompage = () => {

    const dispatch = useDispatch();
    const login = (response) =>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ?
            <div className="login__message">
                <h2>🧾</h2>
                <h1>DataScience Blog</h1>
                <p style={{ "display": "flex", "alignItems": "center"}}>
                First Blog project. Write Blogs. Make 💰
                </p>
                <GoogleLogin 
                    clientId="287865871848-g6v15mjnv6v17qodv1ltchpsjbecu3tk.apps.googleusercontent.com"
                    render={(renderProps)=> (
                        <button 
                            className="offset"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            Login with Google
                        </button>                      
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>:""}
        </div>
    )
}

export default Hompage
