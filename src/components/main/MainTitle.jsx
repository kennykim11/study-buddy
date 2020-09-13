import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import './MainTitle.scss'

export default() => {
    const user = useContext(UserContext)
    return <div id='MainTitle'>
        {user ? "I'm looking for a buddy in: " : "I'm looking for a buddy!"}
    </div>
}