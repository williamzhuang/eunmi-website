import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'


import './style.scss'

class Header extends Component {
    render() {
        return (
            <div className='header' data-aos='zoom-out' data-aos-delay={100}>
                <button type='button' 
                    className='logo-container' 
                    data-aos='fade-right' 
                    data-aos-delay={150} 
                    onClick={() => scrollToComponent(this.props.bioRef.current, {align: 'top', duration: 750})}>
                    <img className='moon-logo' alt='moon-logo' src={require('../../../public/moon.png')} />
                </button>
                
                <div className='nav-bar'>
                    <button type='button' className='nav-item' onClick={() => scrollToComponent(this.props.aboutRef.current, {align: 'middle', duration: 750})} data-aos='fade-left' data-aos-delay={150} >about</button>
                    <button type='button' className='nav-item' onClick={() => scrollToComponent(this.props.projectsRef.current, {align: 'top', offset: -100, duration: 750})} data-aos='fade-left' data-aos-delay={250}>projects</button>
                    <button type='button' className='nav-item' onClick={() => scrollToComponent(this.props.blogRef.current, {align: 'top', offset: -100, duration: 750})} data-aos='fade-left' data-aos-delay={350}>blog</button>
                    <button type='button' className='nav-item' onClick={() => scrollToComponent(this.props.contactRef.current, {align: 'middle', offset: 100, duration: 750})} data-aos='fade-left' data-aos-delay={450}>contact</button>
                </div>
            </div>
        )
    }
}

export default Header;