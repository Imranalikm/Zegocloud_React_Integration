import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [roomID,setRoomID]=useState()
    const navigate=useNavigate()
    const handleJoin =()=>{
         navigate(`room/${roomID}`)
    }
  return (
    <div className="App" style={{display:'flex',justifyItems:'center',alignItems:'center'}}>
        
        <input type="text" placeholder='Enter Room ID' value={roomID}  onChange={(e)=>{
            setRoomID(e.target.value)
        }} />
        <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default Home