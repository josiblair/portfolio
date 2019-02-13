import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../utils/JM.png';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink to='/' className='nav-item'><img src={logo} alt='logo' className='logo'/></NavLink>
        <NavLink to='/' className='nav-item'>HOME</NavLink>
        <NavLink to='/projects' className='nav-item'>PROJECTS</NavLink>
        <a href='#about' className='nav-item'>ABOUT</a>
        <a href='#skills' className='nav-item'>SKILLS</a>
        <a href='#education' className='nav-item'>EDUCATION / EXPERIENCE</a>
        <a href='#contact' className='nav-item'>CONTACT</a>
      </div>
    );
  }
}

export default Nav;