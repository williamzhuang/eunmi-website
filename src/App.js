import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import { ParallaxProvider } from 'react-scroll-parallax';
import { slide as Menu } from 'react-burger-menu'
import scrollToComponent from 'react-scroll-to-component'
import AOS from 'aos'
import { Helmet } from 'react-helmet'
import { LocalizeProvider } from "react-localize-redux";

import 'aos/dist/aos.css'
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
        <Helmet>
          <title>Selena Kim</title>
          <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <LocalizeProvider>
          <div className="App">
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
        </LocalizeProvider>
      </ParallaxProvider>
    )
  }
}

export default hot(module)(App)
