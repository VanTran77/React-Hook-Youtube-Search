import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="topnav">
      <NavLink activeClassName="active1" to="/" exact>Home</NavLink>
      <NavLink activeClassName="active1" to="/timer">Timer</NavLink>
      <NavLink activeClassName="active1" to="/todo">Todo App</NavLink>
      <NavLink activeClassName="active1" to="/blog">Blog</NavLink>
      <NavLink activeClassName="active1" to="/youtube">Youtube</NavLink>
  </div>
  )
}