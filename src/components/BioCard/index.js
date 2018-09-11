import React, { Component } from 'react'
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";

import globalTranslations from'../../translations/global.json'

import './style.scss'

class BioCard extends Component {
    constructor(props) {
        super(props);
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
            <div className='bio-card' >
                <div className='left-column'>
                    <div className='name-card' data-aos='fade-right'>
                        <div className='career-title'>
                            <Translate id='marketerProfile'/>
                        </div>
                        <div className='giant-name'>
                            Eunmi<br/>
                            Kim
                        </div>
                    </div>
                    <div className='biography' data-aos='fade-up'>
                        <h1>biography</h1>
                        <p>
                            <Translate id='biography'/>
                        </p>
                    </div>
                </div>
                <div className='right-column'>
                    <div className='photo' data-aos='fade-left'>
                        <img className='profile-photo' alt='eunmikim' src={require('../../../public/eunmi.jpg')}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withLocalize(BioCard)