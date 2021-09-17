import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

type Props = {
  navLinks: Array<{ name: string, url: string, exact: boolean }>
}

const Nav: React.FC<Props> = ({ navLinks }) => {
  const navLinkComponents = navLinks.map((link, index) => {
    return (
      <NavLink
        activeClassName="active-nav-link"
        key={index}
        to={link.url}
        exact={link.exact}
      >{link.name}</NavLink>
    )
  })
  
  return (
    <nav className="flex-col">
      {navLinkComponents}
    </nav>
  )
}

export default Nav