import React, { Component } from 'react'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import { slide as Menu } from 'react-burger-menu'
import scrollToComponent from 'react-scroll-to-component'
//
import './style.scss'
import Header from '../Header'
import BioCard from '../BioCard'
import AboutCard from '../AboutCard'
import ProjectsSection from '../ProjectsSection'
import BlogSection from '../BlogSection'
import ContactCard from '../ContactCard'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.bioRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.blogRef = React.createRef();
    this.contactRef = React.createRef();

    this.state ={
      isOpen: false
    }
  }

  navigateTo(navAlign, ref, offset) {
    scrollToComponent(ref.current, {align: navAlign, duration: 750, offset});
    this.setState({
      isOpen: false
    })
  }
  
  render () {
    return (
      <div className="HomePage">
        <div className='menu-drawer'>
          <Menu isOpen={this.state.isOpen}>
            <button type='button' className='nav-item' onClick={() => this.navigateTo('top', this.bioRef)} >home</button>
            <button type='button' className='nav-item' onClick={() => this.navigateTo('top', this.aboutRef)} >about</button>
            <button type='button' className='nav-item' onClick={() => this.navigateTo('top', this.projectsRef)} >projects</button>
            <button type='button' className='nav-item' onClick={() => this.navigateTo('top', this.blogRef)} >blog</button>
            <button type='button' className='nav-item' onClick={() => this.navigateTo('top', this.contactRef)} >contact</button>
          </Menu>
        </div>

        <StickyHeader header={<Header bioRef={this.bioRef} aboutRef={this.aboutRef} projectsRef={this.projectsRef} blogRef={this.blogRef} contactRef={this.contactRef}/>} headerOnly/>
        <div className='background-pink' data-aos='fade-down' />
        <div className='bio-ref' ref={this.bioRef}/>
        <BioCard/>
        <div className='about-ref' ref={this.aboutRef}/>
        <AboutCard/>
        <div className='projects-ref' ref={this.projectsRef}/>
        <ProjectsSection/>
        <BlogSection ref={this.blogRef}/>
        <ContactCard ref={this.contactRef} />
      </div>
    )
  }
}

export default HomePage
