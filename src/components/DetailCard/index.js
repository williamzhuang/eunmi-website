import React, { Component } from 'react'
import Slider from 'react-slick'

import './style.scss'


class DetailCard extends Component {
    constructor(props) {
        super(props);

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        this.state = {
            settings
        }
    }
    
    render() {
        let props = this.props;
        return (
            <div className={this.props.reverse && 'detail-card reverse' || 'detail-card'}>
                <div className='images-container' data-aos={this.props.reverse && 'fade-left' || 'fade-right'} >
                    <Slider {...this.state.settings}>
                        {this.props.images.map((obj, key) => (<img alt={obj.alt} src={obj.link} key={key}/>))}
                    </Slider>
                </div>
                <div className='text-container' data-aos={this.props.reverse && 'fade-right' || 'fade-left'} >
                    {this.props.children}
                </div> 
            </div>
        )
    }
}

export default DetailCard