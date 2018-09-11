import React, { Component } from 'react'

import globalTranslations from'../../translations/global.json'
import { withLocalize, Translate } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";

import './style.scss'

class AboutCard extends Component {
    
    constructor(props) {
        super(props)
        this.props.initialize({
            languages: [
              { name: "Korean", code: "kr" },
              { name: "English", code: "en" }
              
            ],
            translation: globalTranslations,
            options: {
              renderToStaticMarkup,
              renderInnerHtml: true,
              defaultLanguage: "kr",
            }
          })

        this.props.addTranslation(globalTranslations)
    }
    render() {
        return (
            <div className='about-card'>
                <h1 data-aos='fade-up' > about me </h1>
                <div className='about-breakdown'>
                    <div className='about-cell' data-aos='fade-up' >
                        <h2>Awards</h2>
                        <div className='title'><Translate id='about.awards.award1.title'/></div>
                        <div className='subtitle'><Translate id='about.awards.award1.subtitle'/></div>
                    
                        <div className='title'><Translate id='about.awards.award2.title'/></div>
                        <div className='subtitle'><Translate id='about.awards.award2.subtitle'/></div>

                        <div className='title'><Translate id='about.awards.award3.title'/></div>
                        <div className='subtitle'><Translate id='about.awards.award3.subtitle'/></div>

                    </div>
                    <div className='about-cell' data-aos='fade-up'>
                        <h2>Education</h2>
                        <div className='title'><Translate id='about.education.education1.title'/></div>
                        <div className='subtitle'><Translate id='about.education.education1.subtitle'/></div>
                    </div>
                    <div className='about-cell' data-aos='fade-up' >
                        <h2>Experience</h2>
                        <div className='title'><Translate id='about.experience.experience1.title'/></div>
                        <div className='subtitle'><Translate id='about.experience.experience1.subtitle'/></div>

                        <div className='title'><Translate id='about.experience.experience2.title'/></div>
                        <div className='subtitle'><Translate id='about.experience.experience2.subtitle'/></div>
                    </div>
                    <div className='about-cell' data-aos='fade-up' >
                        <h2>Skills</h2>
                        <div className='title'><Translate id='about.skills.skill1.title'/></div>
                        <div className='subtitle'><Translate id='about.skills.skill1.subtitle'/></div>

                        <div className='title'><Translate id='about.skills.skill2.title'/></div>
                        <div className='subtitle'><Translate id='about.skills.skill2.subtitle'/></div>

                        <div className='title'><Translate id='about.skills.skill3.title'/></div>
                        <div className='subtitle'><Translate id='about.skills.skill3.subtitle'/></div>

                        <div className='title'><Translate id='about.skills.skill4.title'/></div>
                        <div className='subtitle'><Translate id='about.skills.skill4.subtitle'/></div>
                    </div>
                </div>
                <div className='resume-download-container' data-aos='fade-up' >
                    <div className='download-button'><a href={require('../../../public/resume.pdf')}>RESUME</a></div>
                </div>
                
            </div>
        )
    }
}

export default withLocalize(AboutCard);