import React from 'react'
import { Link } from 'react-router-dom'

import {Minibar, Sidebar} from "../components"
import "../main.css"
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <div className="flex flex-col container mx-5 max-w-screen my-5" >
        <div className="flex flex-row p-1 justify-between" >

          <div className="flex flex-row gap-4">
            <button  type="submit" className="border-solid bg-sky-500 p-2 rounded-lg cursor-pointer" >Back</button>
            <button type="submit" className="border-solid bg-sky-500 p-2 rounded-lg cursor-pointer" >Next</button>
          </div>

          <button type="button" className="border-solid bg-sky-500 p-2 rounded-lg cursor-pointer" >Install App</button>


        </div>
        
        <div className="my-3 px-1 py1" >
          <h1 className="text-lg " >Good Morning</h1>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage