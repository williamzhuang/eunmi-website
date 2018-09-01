import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos'
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
    delay: 250
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
  }
  
  render () {
    return (
      <ParallaxProvider>
        <div className="App">
          <StickyHeader header={<Header bioRef={this.bioRef} aboutRef={this.aboutRef} projectsRef={this.projectsRef} blogRef={this.blogRef} contactRef={this.contactRef}/>} headerOnly/>
          <div className='background-pink' data-aos='fade-down' data-aos-delay={450}/>
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
