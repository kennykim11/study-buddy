import React, { Profiler } from 'react'
import MainTitle from './MainTitle'
import MainSigninButton from './MainSigninButton'

export default ({setLoggedIn, isLoggedIn}) => {
    return <div style={{width: "60%", margin: "150px auto 0", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <MainTitle isLoggedIn={isLoggedIn}/>
        <MainSigninButton setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>
    </div>
}