import React from 'react'
import './styles/Navbar.css'
import currExLogo from '../images/curr-exLogo.png'

export default function Navbar() {
    return (
        <>
            <div className='navbar flex'>
                <a href='/'>
                <img src={currExLogo} className='navbarLogo w-36' />
                </a>
                <div className='navbarText flex mt-1'>
                    <a className='aboutText text-2xl font-inter font-bold ml-4 hover:text-grey' href='/about'>About</a>
                    <a className='contactText text-2xl font-inter font-bold ml-4 hover:text-grey' href='/contact'>Contact</a>
                </div>
            </div>
        </>
    )
}
