import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    
  <div>
    
   
  <nav>
      <input type="checkbox" id='check'/>
      <label for="check" className='checkbtn'>
          <i className='fas fa-bars'></i>
      </label>
       <label className='logo'>RaiZ.</label>
      
    <ul>
        <li><a className='active' href='#'>Inicio</a> </li>
        <li><a href='#'>Productos</a> </li>
        <li><a href='#'>Servivios</a> </li>
        <li><a href='#'>Nosotros</a> </li>
        <li><a href='#'>Contacto</a> </li>
    </ul>

   </nav>

<section className='section'>

</section>;

   </div>
  )
}
