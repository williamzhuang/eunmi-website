import React, { Component } from 'react'

import './style.scss'

class BioCard extends Component {
    render() {
        return (
            <div className='bio-card' >
                <div className='left-column'>
                    <div className='name-card' data-aos='fade-right'>
                        <div className='career-title'>
                            marketer profile
                        </div>
                        <div className='giant-name'>
                            Eunmi<br/>
                            Kim
                        </div>
                    </div>
                    <div className='biography' data-aos='fade-up' data-aos-delay={450}>
                        <h1>biography</h1>
                        <p>
                            Hello, I’m Eunmi, a creative marketer based in Seoul, South Korea.
                            I've interned at a headwear company in LA and an events management startup in Seoul.
                            I've been maintaining my own blog for 3 years, pulling in over 1,000 readers a day while leveraging Google Adwords.
                            My specialty is online marketing.
                        </p>
                    </div>
                </div>
                <div className='right-column'>
                    <div className='photo' data-aos='fade-left' data-aos-delay={350}>
                        <img className='profile-photo' alt='eunmikim' src={require('../../../public/eunmi.jpg')}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BioCard