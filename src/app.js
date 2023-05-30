import React from 'react'
import { } from "@mui/material"
import { Homepage, Searchpage } from "./pages/index.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Minibar, Sidebar } from './components/index.js'
import Footer from './components/Footer.js'

const App = () => {
    return (
        <>
            <div style={{display: "flex"}}  >
                <Router >
                    <div style={{display:"inline-block"}} >
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