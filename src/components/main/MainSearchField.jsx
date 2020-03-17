import React from 'react'

function userTyped(argument){
    console.log(argument)
}

export default ({isLoggedIn}) => {
    if (isLoggedIn) return <div>
        <input type="text" id="classSearch" onInput="userTyped"/>
    </div>
    else return <div></div>
}