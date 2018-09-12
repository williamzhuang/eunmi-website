import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import 'react-sticky-header/styles.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos'
import { Helmet } from 'react-helmet'
import { LocalizeProvider } from "react-localize-redux";
import { Router, Route, Switch, Link } from 'react-static'


import 'aos/dist/aos.css'
//
import './app.scss'
import HomePage from './components/HomePage'
import FlexfitDetailPage from './components/FlexfitDetailPage'
import CircleDetailPage from './components/CircleDetailPage'


if (typeof document !== 'undefined') {
  AOS.init({
    delay: 300
  })
}


class App extends Component {

  render () {
    return (
      <ParallaxProvider>
        <Helmet>
          <title>Selena Kim</title>
          <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <LocalizeProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/flexfit" component={FlexfitDetailPage}/>
              <Route exact path="/circle-connection" component={CircleDetailPage}/>
            </Switch>
          </Router>
        </LocalizeProvider>
      </ParallaxProvider>
    )
  }
}

export default hot(module)(App)
