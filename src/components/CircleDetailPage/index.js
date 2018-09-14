import React, { Component } from 'react'
import DetailCard from '../DetailCard';

import './style.scss'

class CircleDetailPage extends Component {

    render() {
        return (
            <div className='circle-detail-page'>
                <div className='back-arrow-container'>
                    <a href='/'><div className='back-arrow'/></a>
                </div>
                <h1 className='larger'>Circle Connection Marketing Internship</h1>
                <DetailCard images={[{link: require('../../../public/camp/camp3.png'), alt: 'camp-1'}]}>
                    <h1>페이스북 콘텐츠 마케팅</h1>
                    <h2>콘텐츠 스토리보드 제작</h2>
                    <h3>배운점</h3>
                    <ol>
                        <li>콘텐츠 컨셉 및 구체적인 타겟 설정의 중요성</li>
                        <li>페이스북 마케팅 시 유입율이 높은 시간대에 업로드할 필요성</li>
                    </ol>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/camp/camp7.png'), alt: 'flex-2'}]}>
                    <h1>주도적인 광고 집행</h1>
                    <h3>결과</h3>
                    <p className='pink'>참가자 수 30% 증대</p>

                    <h3>문제</h3>
                    <p>목표 대비 모집한 참가자 수 저조, 행사는 2주도 채 남지 않은 상황, 고객사가 광고 예산 축소</p>

                    <h3>행동</h3>
                    <p>대학생 사이트에서 무료 광고 진행.</p>

                    <h3>배운 점</h3>
                    <p>커뮤니케이션 능력의 중요성</p>

                </DetailCard>
                <DetailCard images={[{link: require('../../../public/camp/camp6.png'), alt: 'flex-3'}]}>
                    <h1>기업 블로그 관리</h1>
                    <h2>행사, 기업 관련 콘텐츠 기획 및 제작</h2>
                    
                    <h3>결과</h3>
                    <p>인턴십이 끝난 후 지속적으로 관리해줄 것을 제안 받음</p>

                    <h3>배운 점</h3>
                    <ol>
                        <li>기업 블로그는 개인블로그와 달리 단어 선택, 말투, 사진 등</li>
                        <li>사소하게 신경 쓸 부분이 많다는 점</li>
                        <li>회사 이미지에 영향을 끼치기 때문</li>
                    </ol>
                </DetailCard>
            </div>
        )
    }
}

export default CircleDetailPage