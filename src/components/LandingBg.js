import React from 'react'
import currExBg from '../images/curr-exBG.jpg'
import './styles/LandingBg.css'

export default function LandingBg() {
  return (
    <>
    <div className="flex bg-contain bg-no-repeat h-screen w-screen -mt-11" style={{ backgroundImage: `url(${currExBg})`, backgroundSize: '1280px' }}>
    </div>
    </>
  )
}