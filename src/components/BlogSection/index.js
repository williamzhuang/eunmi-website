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
                            <a href='https://blog.naver.com/em7488/221355436745'>
                                <img alt='blog-1' src={require('../../../public/blog/blog1.png')}/>
                            </a>
                        </div>
                        
                        <h4><a href='https://blog.naver.com/em7488/221355436745'>technology</a></h4>
                        <h3><a href='https://blog.naver.com/em7488/221355436745'>카카오톡 8.0 업데이트 리뷰 &amp; 이것도 개선 해주세용</a></h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up' >
                        <div className='image-container'>
                            <a href='https://blog.naver.com/em7488/221342004951'>
                                <img alt='blog-1' src={require('../../../public/blog/blog2.png')}/>
                            </a>
                        </div>
                        <h4><a href='https://blog.naver.com/em7488/221342004951'>travel / lifestyle</a></h4>
                        <h3><a href='https://blog.naver.com/em7488/221342004951'>문과생의 미국 인턴쉽 후기</a></h3>
                    </div>
                    <div className='blog-entry secondary' data-aos='fade-up'>
                        <div className='image-container'>
                            <a href='https://blog.naver.com/em7488/221357913676'>
                                <img alt='blog-1' src={require('../../../public/blog/blog3.png')}/>
                            </a>
                        </div>
                        <h4><a href='https://blog.naver.com/em7488/221357913676'>technology / food</a></h4>
                        <h3><a href='https://blog.naver.com/em7488/221357913676'>카카오톡 주문하기 시도 했으나 실패</a></h3>
                    </div>

                    <div className='blog-entry secondary' data-aos='fade-up' >
                        <div className='image-container'>
                            <a href='https://blog.naver.com/em7488/220964278017'>
                                <img alt='blog-1' src={require('../../../public/blog/blog4.png')}/>
                            </a>
                        </div>
                        <h4><a href='https://blog.naver.com/em7488/220964278017'>technology</a></h4>
                        <h3><a href='https://blog.naver.com/em7488/220964278017'>브런치 :: 나만 알고 싶은 아이폰 어플 추천</a></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSection