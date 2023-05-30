import React from 'react'
import "../main.css"
import {links} from "../assets/constants/constants"
import { Link, Route, Switch } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
      <div className="sidebar-cont" >
        {links.map((link)=>(
          <Link
            key={link.name}
            to={link.to}
            className="sidebar-component"
          >
            <btn className="link-name-cont" >
              {link.name}
            </btn>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Sidebar