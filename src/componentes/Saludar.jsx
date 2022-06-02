import React from 'react'

export default function Saludar( msg, quien) {
  return 
    <div onClick={() => hacerUnAlert()}>{msg + " " + quien}</div>;
  
}
