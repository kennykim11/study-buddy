import MainLogo from './main/MainLogo'
import React, { useState } from 'react'
import MainSearch from './main/MainSearch'

export default () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    return <div style={{position: "relative", overflow: "auto", height: "100%"}}>
        <MainLogo/>
        <div style={{height: "200px"}}></div>
        <MainSearch setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>
    </div>
}