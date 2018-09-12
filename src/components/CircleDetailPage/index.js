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
                    <h1>페이스북 광고 마케팅</h1>
                    <h2>기업가 정신 함양 캠프 참가자 모집 위해 광고 에이전시와 페이스북 콘텐츠 마케팅 </h2>
                    <h3>시장조사 리포트 다른 인턴에게 리소스로 주어짐</h3>

                    <h3>업무</h3>
                    <p>주 참가자는 대학생 / 대학교 방학 시즌인 것을 고려하여 ‘방학’에 집에만 있는 사람 손! 카피로 시작되는 콘텐츠 스토리보드 기획. </p>

                    <h3>배운 점</h3>
                    <p>콘텐츠 컨셉 및 구체적인 타겟 설정의 중요성 페이스북 마케팅 시 유입율이 높은 시간대에 업로드할 필요성 </p>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/camp/camp7.png'), alt: 'flex-2'}]}>
                    <h1>대학생 커뮤니티 무료 광고 집행 </h1>
                    <h2>기업가 정신 함양 캠프 참가자 모집 위한 광고 집행</h2>

                    <h3>참가자 수 30% 증대</h3>

                    <h3>문제</h3>
                    <p>행사 참여 신청 기간 내 설 연휴가 끼는 바람에 진행 중인 광고만으로 목표했던 참가자 모집 수 달성이 어려워짐. 행사는 2주도 채 남지 않은 상황, 고객사가 광고 예산 축소</p>

                    <h3>행동</h3>
                    <p>주어진 예산이 부족했기 때문에, 무료 광고 집행 가능한 대학교 커뮤니티를 찾아서 컨펌 받은 후 광고 진행.</p>

                    <h3>배운 점</h3>
                    <p>커뮤니티 관리자와 광고 시간/위치/포스터 규격 등 광고 집행을 위한 커뮤니케이션 능력의 중요성</p>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/camp/camp6.png'), alt: 'flex-3'}]}>
                    <h1>기업 블로그 관리</h1>
                    <h2>회사/직원/직무 소개 및 행사 홍보 콘텐츠 제작 (지난 행사 후기, 이전 참가자 후기, 행사 일정 등)</h2>
                    
                    <h3>인턴쉽 이후 디지털 노마드로서 지속적으로 관리해줄 것을 제안 받음</h3>
                    <p>센스있는 말투를 바탕으로 ‘인턴일기- 우리회사 식구들을 소개합니다’ 콘텐츠 제작하여 조회수 600 이상 달성</p>

                    <h3>배운 점</h3>
                    <p>기업 블로그는 개인블로그와 달리 워딩 하나, 사진 셀렉 하나하나 신경 쓸 부분이 많다는 점. 마이너한 요소에서 회사 이미지가 결정될 수 있기 때문.</p>
                </DetailCard>
            </div>
        )
    }
}

export default CircleDetailPage