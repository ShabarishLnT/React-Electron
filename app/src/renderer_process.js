import React from 'react'
import {render} from 'react-dom'
import Login from './components/Login/login.jsx'
import { BrowserRouter } from 'react-router-dom'
import './global.css'

render(
    <Login/>,
    document.getElementById('idLogin')
)
