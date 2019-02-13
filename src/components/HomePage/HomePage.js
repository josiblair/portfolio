import React, { Component } from 'react';
// import './HomePage.css';
import Nav from '../Nav/Nav'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Nav />
        <section className='home-header'>I'M JOSI MOORE.</section>
        <section id='about' className='about'></section>
        <section id='skills' className='skills'></section>
        <section id='education' className='education'></section>
        <section id='contact' className='contact'></section>
      </div>
    );
  }
}

export default HomePage;