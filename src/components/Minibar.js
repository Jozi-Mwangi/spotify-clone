import React from 'react'
import Playlists from './Playlists'

const Minibar = () => {
  return (
    <>
        <div className="second-divholder" >
            <div style={{display: "block", margin:"0", padding:"0"}} >
                <h4>Your Library</h4>

                <div style={{display: "flex", gap: "10px"}} >
                    <btn type="button" id="playlists" className="btn">Playlists</btn>
                    <btn type="button" id="artists" className="btn">Artists</btn>
                    <btn type="button" id="albums" className="btn">Albums</btn>
                </div>
            </div>
            <div>
                <h4>Your Playlists</h4> 
                <Playlists/>
            </div>
      </div>
    </>
  )
}

export default Minibar