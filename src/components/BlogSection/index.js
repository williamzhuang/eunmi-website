import React, {Component} from 'react'

import './style.scss'

class BlogSection extends Component {

    render() {
        return (
            <div className='blog-section'>
                <h1 data-aos='fade-up' data-aos-delay={100}> blog </h1>
                <div className='blogs-container'>
                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={150}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={250}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={350}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>

                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={200}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={300}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry' data-aos='fade-up' data-aos-delay={400}>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSection