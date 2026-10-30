import React from 'react'
import { href, Link } from 'react-router-dom'
import "./button.css"
const Button = ({text, hover, to}) => {
  return 
    href ? (  
    <a href= {href} className= {`btn ${hover}`}>{text}</a>
    ) :(
    <Link to={to} className= {`btn ${hover}`}> {text}</Link>
  )
}

export default Button



