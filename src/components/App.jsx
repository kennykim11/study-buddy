import MainLogo from './main/MainLogo'
import React, { useState } from 'react'
import MainSearch from './main/MainSearch'
import UserContext from './context/UserContext'


export default () => {    
    const [currentUser, setCurrentUser] = useState({}) //useState provides stateful object and setter to pass down as props
    const [currentClass, setCurrentClass] = useState(null) //useState provides stateful object and setter to pass down as props
    return (
        <div style={{position: "relative", overflow: "auto", height: "100%"}}>
            <MainLogo/>
            <div style={{height: "200px"}}></div>
            <UserContext.Provider value={currentUser}>
                <MainSearch setCurrentUser={setCurrentUser} setCurrentClass={setCurrentClass}/>
            </UserContext.Provider>
        </div>)
}