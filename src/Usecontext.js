import React, { useState } from 'react';
import { createContext,useContext } from 'react';
const AppContext=createContext(null)
function Usecontext() {
    const[username,setUsername]=useState('')
  return (
    <div>
<h2>useContext Example</h2>
<AppContext.Provider value={{username,setUsername}}>
<Usecontext2/>
<Usecontext3/>
</AppContext.Provider>
    </div>
  )
}

export default Usecontext


function Usecontext2() {
    const{setUsername}=useContext(AppContext)
  return (
    <div>
        <input type="text" placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        
    </div>
  )
}


function Usecontext3() {
    const{username}=useContext(AppContext)
  return (
    <div><h3>UserName:{username}</h3></div>
  )
}

