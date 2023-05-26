import React from 'react'
import "../main.css"
import {links} from "../assets/constants/constants"
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  // return (
  //   <div className="sidebar-component" >
  //       Home button
  //   </div>
  // )

  return (
    <>
      <div className="sidebar-cont" >
        {links.map((link)=>(
          <NavLink
            key={link.name}
            to={link.to}
            className="sidebar-component"
          >
            <btn className="link-name-cont" >
              {link.name}
            </btn>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Sidebar