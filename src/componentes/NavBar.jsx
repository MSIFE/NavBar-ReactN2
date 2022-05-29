import React from 'react'
import './NavBar.css';

const logoImg = require.context('./desafio',true);

export default function NavBar() {
  return (

    <div className='body'>
        <div className='logo'>
        <img src= {logoImg(`./raiz.png`)} 
         />
         </div>

    <nav>
        <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Productos</a></li>
            <li><a href='#'>Nosotros</a></li>
            <li><a href='#'>Contacto</a></li>
        </ul>
    </nav>
    </div>
  )
}
