import React, { useState } from 'react'
import fechtData from '../../services/api'

function Card({dados}) {
    
    const {location , 
       current
    } = dados

  return (
    <div className='bg-white p-6 mt-10 rounded-lg text-black shadow-xl'>
            <div className='text-center'>
            <span className='block text-xl font-bold text-slate-700'>{location.name}</span>
            <span className='text-slate-500 text-sm font-medium'>{`${location.region} , ${location.country}`}</span>
            
            </div>
       
             <div className='flex mt-5 text-center items-center justify-center'>
            <span className='text-7xl font-bold text-slate-800'>{current.temp_c}</span>
            <span className='text-2xl font-bold text-slate-800'>°C</span>
            </div>

            <div className='text-center mt-2 justify-center flex flex-col'>
            <img className='block' src={current.condition.icon}/>
            <span className='text-slate-800 font-medium'>{current.condition.text}</span>
            </div>
        
      

    </div>
  )
}

export default Card