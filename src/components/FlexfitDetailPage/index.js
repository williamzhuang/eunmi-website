import React, { Component } from 'react'
import DetailCard from '../DetailCard';

import './style.scss'

class FlexfitDetailPage extends Component {

    render() {
        return (
            <div className='flexfit-detail-page'>
                <div className='back-arrow-container'>
                    <a href='/'><div className='back-arrow'/></a>
                </div>
                <h1 className='larger'>Flexfit Marketing Internship</h1>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-1.png'), alt: 'flex-1'}]}>
                    <h1>소셜미디어 채널을 통한 B2B 마케팅</h1>
                    <h2>대표 5대 SNS 채널 분석 및 B2B 마케팅 전략 제안</h2>
                    <h3>결과</h3>
                    <p>‘팔아도 될 만큼 완성도 높은 보고서’ 라는 평가 받음. 실제로 인스타그램 마케팅 전략은 다가오는 트레이드 쇼 업무 시작 전 홍보 방안으로 사용됨.</p>

                    <h3>어려웠던 점</h3>
                    <p>늘 소비자로서 소셜미디어 채널을 이용해왔기에 B2B 전략 세우기가 낯설었음.</p>

                    <h3>해결방안</h3>
                    <ol>
                        <li>기업의 입장에서 WHY, HOW 채널을 이용해야 하는지 피력하고자 노력함. </li>
                        <li>채널 별 특성을 간단히 언급,</li>
                        <li>채널 운영의 필요성과 방식 설명</li>
                        <li>이를 통해 얻을 수 있는 이익을 제시.</li>
                        <li>주장을 뒷받침하기 위한 근거로서 성공 사례 </li>
                        <li>채널 별 마케팅 전략을 정리함으로써 보고서의 전개방식을 구성함. </li>
                    </ol>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-2.png'), alt: 'flex-2'}]}>
                    <h1>착한 마케팅</h1>
                    <h2>착한 마케팅의 필요성, 참신한 사례, 기대효과를 스토리텔링 형식으로 작성</h2>
                    <h3>결과</h3>
                    <p>중장기 마케팅 전략 서포트 자료로 활용됨</p>

                    <h3>배운 점</h3>
                    <p>객관화된 수치 자료를 통한 근거 제시의 중요성, 논리적인 스토리 흐름의 중요성 </p>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-3.png'), alt: 'flex-3'}]}>
                    <h1>중장기 마케팅 전략 : Giving Back To Community Campaign</h1>
                    <h2>얼바인 스펙트럼 센터 시장조사를 통해 스토어별 트렌드 및 마케팅 전략 파악, 벤치마킹 전략 세움</h2>
                    
                    <h3>결과</h3>
                    <p>중장기 마케팅 전략 실행에 기여 ‘회사에서 번역을 가장 잘한다’ 는 평가를 받음</p>

                    <h3>배운 점</h3>
                    <p>번역이란 내용을 완벽하게 이해하고 나만의 언어로 재창조하여 의미를 전달하는 것.참고자료나 사전 지식없이 번역된 내용만 보고도  100% 이해할 수 있도록, 작성자의 의도에 맞춘 설득력 있는 번역의 중요성</p>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-4.png'), alt: 'flex-4'}]}>
                    <h1>오프라인 시장조사</h1>
                    <h2>얼바인 스펙트럼 센터 시장조사를 통해 스토어별 트렌드 및 마케팅 전략 파악, 벤치마킹 전략 세움</h2>
                    
                    <h3>시장조사 리포트 다른 인턴에게 리소스로 주어짐</h3>
                    <h3>문제</h3>
                    <p>첫 오프라인 시장조사인데 명확한 가이드라인이 없어서 어려웠음.</p>

                    <h3>해결방안</h3>
                    <ol>
                        <li>조사 시작 전, 회사 인트라넷에 업로드 된 자료나, 동료들에게 부탁하여 이전의 시장조사 보고서를 읽으며 전체적인 구성 방식의 흐름을 익힘.</li>
                        <li>전체적인 제품의 공통된 특징을 파악한 후 세부 기준을 정함. (예를 들어 남녀의 경계가 허물어지는 디자인이 많이 보인다면, 패턴, 재질, 컬러, Trim을 기준으로 제품을 상세히 살펴봄.)</li>
                        <li>조사한 내용을 기억하기 위해 매장 별 특징을 노트에 기록</li>
                        <li>덕분에 세부 기준에 맞게 필요한 정도로만 사진을 찍으면 되었고, 이는 보고서를 작성할 때도 효율적이었음.</li>
                    </ol>

                    <h3>배운 점</h3>
                    <p>자체 가이드라인 설정하고 기록하는 습관을 통해 업무의 효율성 증대, 오프라인 시장조사의 중요성</p>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-5.png'), alt: 'flex-5'}]}>
                    <h1>오프라인 시장조사</h1>
                    <h2>LA BREA 지역 시장조사를 통해 신제품 개발 및 Trim을 활용한 브랜드 인지도 제고 전략의 참고 자료 제공</h2>
                    <h3>회사 인트라넷에서 회장님으로부터 공개적으로 인정받음</h3>
                    
                    <h3>문제</h3>
                    <p>주어진 시간 내 조사해야 할 스토어와 항목이 많았음 (ex. 제품, 프로모션, 패션 트렌드)</p>

                    <h3>행동</h3>
                    <ol>
                        <li>각자 시장조사 경험을 고려하여 파트를 나누어 진행</li>
                        <li>본인– 제품 / 동기1 – 스토어 Display / 동기2 – 스트릿 패션 트렌드</li>
                        <li>세부기준 설정(본인) – 모자 트렌드, 특성, Hangtag, 전시 상태, 기타 특이 제품</li>
                        <li>하나의 매장 조사할 때마다 노트에 기록</li>
                        <li>서로 피드백을 하며 완성도를 높임</li>
                    </ol>

                    <h3>배운 점</h3>
                    <p>능력에 따른 업무의 분담, 기록하는 습관의 중요성, 오프라인 시장조사의 중요성</p>
                </DetailCard>
            </div>
        )
    }
}

export default FlexfitDetailPage