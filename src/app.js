import React from 'react'
import { } from "@mui/material"
import { Homepage, Searchpage } from "./pages/index.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/search-page" element={<Searchpage/>}/>
            </Routes>
        </Router>
    )
}

export default App