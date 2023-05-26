import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className="search-component">
        <Link to="/search-component" style={{textDecoration: "none"}}>
            🔍Search
        </Link>
    </div>
  )
}

export default Search