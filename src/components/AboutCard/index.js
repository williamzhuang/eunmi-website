import React, { Component } from 'react'

import './style.scss'

class AboutCard extends Component {
    render() {
        return (
            <div className='about-card'>
                <h1 data-aos='fade-up' data-aos-delay={250}> about me </h1>
                <div className='about-breakdown'>
                    <div className='about-cell' data-aos='fade-up' data-aos-delay={350}>
                        <h2>Awards</h2>
                        <div className='title'>Seoul Women's Univ. Essay Contest</div>
                        <div className='subtitle'>1st Place</div>
                    
                        <div className='title'>AK Mall Shopping Blogger</div>
                        <div className='subtitle'>Special Award</div>

                        <div className='title'>Nubizio Marketing &amp; MD</div>
                        <div className='subtitle'>Top Marketing Award</div>
                    </div>
                    <div className='about-cell' data-aos='fade-up' data-aos-delay={450}>
                        <h2>Education</h2>
                        <div className='title'>Bachelor's Degree</div>
                        <div className='subtitle'>English Language and Literature</div>
                    </div>
                    <div className='about-cell' data-aos='fade-up' data-aos-delay={550}>
                        <h2>Experience</h2>
                        <div className='title'>Marketing Intern (USA)</div>
                        <div className='subtitle'>Flexfit LLC</div>

                        <div className='title'>Marketing Intern (Seoul)</div>
                        <div className='subtitle'>Circle Connection</div>
                    </div>
                    <div className='about-cell' data-aos='fade-up' data-aos-delay={650}>
                        <h2>Skills</h2>
                        <div className='title'>Microsoft Power Point</div>
                        <div className='subtitle'>Excellent</div>
                        <div className='title'>Microsoft Excel</div>
                        <div className='subtitle'>Proficient</div>
                        <div className='title'>Microsoft Word</div>
                        <div className='subtitle'>Excellent</div>
                    </div>
                </div>
                <div className='resume-download-container' data-aos='fade-up' data-aos-delay={250}>
                    <div className='download-button'><a href={require('../../../public/resume.pdf')}>RESUME</a></div>
                </div>
                
            </div>
        )
    }
}

export default AboutCard;