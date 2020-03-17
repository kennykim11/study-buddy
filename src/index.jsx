import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './components/app'

window.onload = () => {ReactDom.render(<App/>, document.getElementById('app'))}