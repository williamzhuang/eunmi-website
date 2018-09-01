import React, { Component } from 'react'
import Slider from 'react-slick'
// import Slideshow from 'react-slidez';

import './style.scss'

class ProjectCard extends Component {
    constructor(props) {
        super(props);

        const settings = {
            infinite: true,
            autoplaySpeed: 3000,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            
        }

        this.state = {
            settings
        }
    }

    render() {
        return (
            <div className={this.props.reverse && 'project-card reverse' || 'project-card'}>
                <div className='images-container' data-aos={this.props.reverse && 'fade-left' || 'fade-right'} data-aos-delay={150}>
                    <Slider {...this.state.settings}>
                        {this.props.images.map((obj, key) => (<img alt={obj.alt} src={obj.link} key={key}/>))}
                    </Slider>
                </div>
                <div className='text-container' data-aos={this.props.reverse && 'fade-right' || 'fade-left'} data-aos-delay={150}>
                    {this.props.children}
                </div> 
            </div>
        )
    }
}

export default ProjectCard