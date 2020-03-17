import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import LoginSettings from '../../../loginSettings.json';
import UserContext from '../context/UserContext'


const responseGoogle = (response) => {
    console.log(response)
}

export default ({setLoggedIn, isLoggedIn}) => {
    const {userObjectProvider, userObjectConsumer} = useContext(UserContext)
    if (!isLoggedIn) return <GoogleLogin
        clientId={LoginSettings.clientId}
        buttonText="Sign in with your RIT Google account"
        render={renderProps => (
          <div 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}
            style={{marginTop: "70px", padding: "20px", backgroundColor: "orange", borderRadius: "10px", fontSize: 20, fontFamily: "Roboto"}}
            >Sign in with your RIT Google account</div>
        )}
        onSuccess={(response) => {setLoggedIn(true); responseGoogle(response); userObject=response.profileObj; console.log(userObject)}}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>
    else return <div></div>
}