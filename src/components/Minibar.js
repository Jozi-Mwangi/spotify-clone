import React from 'react'
import Playlists from './Playlists'

const Minibar = () => {
  return (
    <>
        {/* <div >
            <div style={{display: "block", margin:"0", padding:"0"}} >
                <h4>Your Library</h4>

                <div style={{display: "flex", gap: "10px"}} >
                    <btn type="button" id="playlists" >Playlists</btn>
                    <btn type="button" id="artists" >Artists</btn>
                    <btn type="button" id="albums" >Albums</btn>
                </div>
            </div>
            <div>
                <h4>Your Playlists</h4> 
                <Playlists/>
            </div>
      </div> */}
      <nav role="navigation" className="w-56 h-screen rounded-xl flex flex-col justify-between bg-gray-800" >
        <div className="text-white text-lg py-6 px-4" >
          <div id="Library holder" className="flex flex-row content-center space-y-2 gap-2 "  >
            <div>
              Your Library
            </div>
            <div>🔜</div>
          </div>

          <div id="playlist scroll button" className="flex flex-row overflow-auto" >
            <div className="border-solid border-2 border-indigo-200 mx-1 p-1 rounded-lg" >Playlists</div>
            <div className="border-solid border-2 border-indigo-200 mx-1 p-1 rounded-lg" >Artists</div>
            <div className="border-solid border-2 border-indigo-200 mx-1 p-1 rounded-lg" >Albums</div>
          </div>
          <div id="My Library" className="flex flex-row justify-around" >
            <div>🔍</div>
            <div>Recents</div>
          </div>

          
        </div>
      </nav>
    </>
  )
}

export default Minibar