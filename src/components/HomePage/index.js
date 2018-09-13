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

    this.bioRef = null;
    this.aboutRef = null;
    this.projectsRef = null;
    this.blogRef = null;
    this.contactRef = null;

    this.state ={
      isOpen: false
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  navigateTo(navAlign, ref, offset) {
    scrollToComponent(ref, {align: navAlign, duration: 750, offset});
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

        <div className='background-pink' data-aos='fade-down' />
        <BioCard ref={el => this.bioRef = el}/>
        <AboutCard ref={el => this.aboutRef = el}/>
        <ProjectsSection ref={el => this.projectsRef = el}/>
        <BlogSection ref={el => this.blogRef = el}/>
        <ContactCard ref={el => this.contactRef = el} />
        <StickyHeader header={<Header bioRef={this.bioRef} aboutRef={this.aboutRef} projectsRef={this.projectsRef} blogRef={this.blogRef} contactRef={this.contactRef}/>} headerOnly/>

      </div>
    )
  }
}

export default HomePage
