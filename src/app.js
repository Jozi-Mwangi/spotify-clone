import React from 'react'
import { } from "@mui/material"
import { Homepage, Searchpage } from "./pages/index.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Minibar, Sidebar } from './components/index.js'
import Footer from './components/Footer.js'

const App = () => {
    return (
        <>
            <div className="flex">
                <Router >
                    <div className="flex flex-col mx-2 my-2 h-screen gap-2">
                        <Sidebar/>
                        <Minibar/>
                    </div>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/search-page" element={<Searchpage/>}/>
                    </Routes>
                </Router>
                <div className="footer-container" >
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App