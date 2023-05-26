import React from 'react'
import { Link } from 'react-router-dom'

import {Minibar, Sidebar} from "../components"
import "../main.css"

const Homepage = () => {
  return (
    <div className="homepage-main-container">
      <h1 style={{fontWeight: "bold"}} >Home</h1>
      <div className="main-sidebar-container" >
        <Sidebar/>
        <Minibar/>
      </div>

    </div>
  )
}

export default Homepage