import React from 'react'

export default({isLoggedIn}) => {
    var innerText = isLoggedIn ? "I'm looking for a buddy in: " : "I'm looking for a buddy!"
    return <div style={{textAlign: "center", fontFamily: "Roboto", fontSize: "50"}}>
        {innerText}
    </div>
}