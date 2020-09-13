import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import LoginSettings from '../../../loginSettings.json';
import UserContext from '../context/UserContext'
import './MainSigninButton.scss'

const responseGoogle = (response) => {
    console.log(response)
}

export default ({setCurrentUser}) => {
    const user = useContext(UserContext)

    if (!user) return <GoogleLogin
        clientId={LoginSettings.clientId}
        buttonText="Sign in with your RIT Google account"
        render={renderProps => (
          <div 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}
            id="main-signin-button"
            >Sign in with your RIT Google account</div>
        )}
        onSuccess={(response) => {setCurrentUser(response.profileObj); responseGoogle(response);}}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>
    else return <div></div>
}