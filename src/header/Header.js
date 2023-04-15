import React from 'react'
import './Header.css'

function Header() {
  let a = undefined
  a?console.log("heyy"):console.log("boo")
  return (
    <div id='nav-header'>
        <ul id='nav-bar'>
            <li className='nav-content'><a className='no-text-dec d-green' href='/home'>Home</a></li>
            <li className='nav-content'><a className='no-text-dec d-green' href='/getNewCard'>Get New Card</a></li>
            <li className='nav-content'><a className='no-text-dec d-green' href='/blog'>Blog</a></li>
            <li className='nav-content'><a className='no-text-dec d-green' href='/about'>About</a></li>
        </ul>
    </div>
  )
}

export default Header