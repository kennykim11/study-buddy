import React, { useState, useContext } from 'react'
import MainTitle from './MainTitle'
import MainSigninButton from './MainSigninButton'
import "./MainSearch.scss"
import MainSearchField from './MainSearchField'
import MainSearchButton from './MainSearchButton'
import UserContext from '../context/UserContext'


export default ({setCurrentUser, setCurrentClass}) => {
    const [tempClass, setTempClass] = useState(null) //useState provides stateful object and setter to pass down as props
    const [tempSection, setTempSection] = useState(null)
    function sendCurrentClass(){
        console.log(tempSection)
        setCurrentClass ({
            'class': tempClass,
            'section': tempSection
        })
    }

    const user = useContext(UserContext)
    if (user) return <div id="main-search">
        <MainTitle/>
        <MainSearchField parentCallback={setTempClass} data='class'/>
        <MainSearchField parentCallback={setTempSection} data='section' disabled={tempClass == null}/>
        <MainSearchButton callback={sendCurrentClass} disabled={tempClass == null || tempSection == null}/>
    </div>
    else return <div id="main-search">
        <MainTitle/>
        <MainSigninButton setCurrentUser={setCurrentUser}/>
    </div>
}