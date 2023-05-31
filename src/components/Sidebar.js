import React from 'react'
import {links} from "../assets/constants/constants"
import { Link, Route, Switch } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
      <nav role="navigation" className="w-56 rounded-xl flex flex-col justify-between bg-gray-800" >
        <div className="py-6 px-4" >
          <ul className="space-y-2" >
            {links.map(link=>(
              <li >
                <Link className="font-mono text-white p-1 font-bold text-lg"
                key={link.name}
                to={link.to}
                >
                 {link.name}
                </Link></li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar