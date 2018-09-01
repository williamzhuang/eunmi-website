import React, { Component } from 'react'

import './style.scss'

class ContactCard extends Component {
    render() {
        return (
            <div className='contact-card' data-aos='fade-up' data-aos-delay={100}>
                <div className='info'>
                    <h1 data-aos='fade-right' data-aos-delay={150}> contact me </h1>
                    <h2 data-aos='fade-right' data-aos-delay={200}> Eunmi Kim </h2>
                    <h2 data-aos='fade-right' data-aos-delay={250}> Dongjakgu Sangdodong </h2>
                    <h2 data-aos='fade-right' data-aos-delay={300}> Seoul, South Korea </h2>
                    <h2 data-aos='fade-right' data-aos-delay={350}> +82 10 - 7488 - 3223 </h2>
                    <h2 data-aos='fade-right' data-aos-delay={400}> em7488@naver.com </h2>
                </div>
                <div className='social'>
                    <h1 data-aos='fade-left' data-aos-delay={150}> social </h1>
                    <h2 data-aos='fade-left' data-aos-delay={200}> <a className='facebook' href='https://www.facebook.com/kem3223'>facebook</a> </h2>
                    <h2 data-aos='fade-left' data-aos-delay={250}> <a className='instagram' href='https://www.instagram.com/you_myday/'>instagram</a> </h2>
                    <h2 data-aos='fade-left' data-aos-delay={300}> <a className='linkedin' href='https://www.linkedin.com/in/eunmi-kim-6a936514a/'>linkedin</a> </h2>
                    <h2 data-aos='fade-left' data-aos-delay={350}> <a className='naver' href='https://blog.naver.com/PostList.nhn?blogId=em7488'>naver</a> </h2>
                </div>
                
            </div>
        )
    }
}

export default ContactCard