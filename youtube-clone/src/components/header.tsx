import React from 'react';
import '../utils/header.css';
import img from '@src/img/logo.png'

function Header() {
  return (
    <div className='header'>
      <h3>Header</h3>
      <img src={img} alt="" />
    </div>
  )
}

export default Header
