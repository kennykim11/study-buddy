import React from 'react'
import "./MainSearchButton.scss"

export default ({callback, disabled}) => {
    return <div onClick={callback} id='MainSearchButton' className={disabled ? 'notReady' : 'ready'}>
        Find classmates!
    </div>
}