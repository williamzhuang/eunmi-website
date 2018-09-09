import React, {Component} from 'react'

import './style.scss'

class BlogSection extends Component {

    render() {
        return (
            <div className='blog-section'>
                <h1 data-aos='fade-up' > blog </h1>
                <div className='blogs-container'>
                    <div className='blog-entry' data-aos='fade-up' >
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up' >
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up'>
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>

                    <div className='blog-entry secondary' data-aos='fade-up' >
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up' >
                        <div className='image-container'>
                            <img alt='blog-1' src={require('../../../public/blossom.jpg')}/>
                        </div>
                        <h4>travelling / information</h4>
                        <h3>what you should know about couchsurfing</h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up' >
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