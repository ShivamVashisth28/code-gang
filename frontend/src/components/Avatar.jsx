import React from 'react'

function Avatar({userName, color}) {
    
    
 
    return (
        <div className={`rounded-full h-10 w-10 ${color} flex justify-center items-center text-2xl border-2 border-black`} >
            {userName[0].toUpperCase()}
        </div>
  )
}

export default Avatar