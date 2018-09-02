import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import { ParallaxProvider } from 'react-scroll-parallax';
import { slide as Menu } from 'react-burger-menu'
import scrollToComponent from 'react-scroll-to-component'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MetaTags from 'react-meta-tags'
import Favicon from 'react-favicon';
//
import './app.scss'
import Header from './components/Header'
import BioCard from './components/BioCard'
import AboutCard from './components/AboutCard'
import ProjectsSection from './components/ProjectsSection'
import BlogSection from './components/BlogSection'
import ContactCard from './components/ContactCard'


if (typeof document !== 'undefined') {
  AOS.init({
    delay: 300
  })
}


class App extends Component {
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
      <ParallaxProvider>
        <div className="App">
          {typeof window !== 'undefined' && (
            <div>
              <Favicon url={window.location.href.substring(0, window.location.href.lastIndexOf('/')) + require('../public/moon.png')}/>
            </div>
          )}
          
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
          <BioCard ref={this.bioRef}/>
          <AboutCard ref={this.aboutRef}/>
          <ProjectsSection ref={this.projectsRef}/>
          <BlogSection ref={this.blogRef}/>
          <ContactCard ref={this.contactRef} />
        </div>
      </ParallaxProvider>
    )
  }
}

export default hot(module)(App)
