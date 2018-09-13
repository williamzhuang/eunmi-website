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
                    <h2>5대 SNS 채널 분석 및 B2B 마케팅 전략 제안</h2>
                    <h3>결과</h3>
                    <p className='pink'>‘팔아도 될 만큼 완성도 높은 보고서’ 라는 평가 받음. 실제로 인스타그램 마케팅 전략은 트레이드 쇼 홍보 방안에 활용됨.</p>

                    <h3>배운점</h3>
                        1. B2C 마케팅 전략이 곧 B2B 마케팅 <br/>
                        &nbsp; &nbsp; - 소비자의 마음을 얻는 것이 그들을 타겟으로 한 브랜드를 사로잡는 일이기 때문<br/>
                        2. 소셜미디어 채널에 대한 지식<br/>
                        &nbsp; &nbsp; - 적극적인 광고 Tool 활용의 중요성<br/>
                        &nbsp; &nbsp; - 다양한 콘텐츠 개발을 위한 지속적인 투자의 필요성<br/>
                        &nbsp; &nbsp; - 소셜미디어 채널 변화 주시 및 소비자 반응에 현명한 대응 방안 모색의 중요성<br/>
                        3. 논리적인 리서치 단계 수립의 중요성

                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-4.png'), alt: 'flex-4'}]}>
                    <h1>트렌드 리포트</h1>
                    <h2>LA 시장조사를 통해 스토어별 트렌드 및 마케팅 전략 파악, 벤치마킹 전략 수립</h2>
                    
                    <h3>결과</h3>
                    <h3 className='pink'>시장조사 리포트 다른 인턴에게 리소스로 주어짐</h3>
                    
                    <h3>문제</h3>
                    <p>첫 오프라인 시장조사인데 명확한 가이드라인이 없어서 어려웠음.</p>

                    <h3>행동</h3>
                    <ol>
                        <li>이전의 시장조사 보고서를 통해 보고서의 전체적인 흐름을 익히고 조사 시작.</li>
                        <li>제품들의 공통된 특징을 파악한 후 세부 기준 설정. (예를 들어 남녀의 경계가 허물어지는 디자인이 많이 보인다면, 패턴, 재질, 컬러, Trim을 기준으로 제품을 상세히 살펴봄.)</li>
                        <li>조사한 내용을 기억하기 위해 매장 별 특징을 노트에 기록</li>
                        <li>덕분에 필요한 정도의 양만 사진을 찍으면 되었고, 보고서를 작성할 때도 효율적이었음.</li>
                    </ol>
                    
                    <h3>배운 점</h3>
                    <ol>
                        <li>자체 가이드라인 설정하고 기록하는 습관의 중요성</li>
                        <li>오프라인 시장조사의 중요성</li>
                    </ol>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-5.png'), alt: 'flex-5'}]}>
                    <h1>트렌드 리포트</h1>
                    <h2>LA 시장조사를 통해 신제품 개발을 위한 참고 자료 제공</h2>
                    
                    <h3>결과</h3>
                    <p className='pink'>회사 인트라넷에서 회장님으로부터 공개적으로 인정받음</p>

                    <h3>문제</h3>
                    <p>주어진 시간 내 조사해야 할 스토어와 항목이 많았음 (ex. 제품, 프로모션, 패션 트렌드)</p>

                    <h3>행동</h3>
                    <ol>
                        <li>각자의 경험에 맞춰 파트 분담</li>
                        <li>본인 – 제품 / 동기1 – 프로모션 전략 / 동기2 – 스트릿 패션 트렌드</li>
                        <li>세부기준 설정(본인) – 모자 트렌드, 특성, Hangtag, 전시 상태, 기타 특이 제품</li>
                        <li>매장 별 특징을 노트에 기록</li>
                        <li>피드백 공유를 통해 완성도 향상</li>
                    </ol>

                    <h3>배운 점</h3>
                    <ol>
                        <li>트렌디한 제품을 통해 미래 트렌드를 예측하고 선도할 필요성</li>
                        <li>능력에 따른 업무 분담의 중요성</li>
                        <li>오프라인 시장조사에서 기록하는 습관의 중요성</li>
                    </ol>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-2.png'), alt: 'flex-2'}]}>
                    <h1>착한 마케팅</h1>
                    <h2>착한 마케팅의 필요성, 참신한 사례, 기대효과를 스토리텔링 형식으로 작성</h2>
                    <h3>결과</h3>
                    <p className='pink'>중장기 마케팅 전략 서포트 자료로 활용됨</p>

                    <h3>배운 점</h3>
                    <ol>
                        <li>소비자는 더이상 성능과 기능만 보고 구매를 하지 않음</li>
                        <li>소비와 선행의 행복을 느낄 수 있는 ‘가치 소비’의 중요성</li>
                        <li>스토리텔링 전개 방식을 통한 설득력 향상</li>
                        <li>객관화된 수치 자료를 통한 근거 제시의 중요성</li>
                    </ol>
                </DetailCard>
                <DetailCard images={[{link: require('../../../public/flexfit/flexfit-3.png'), alt: 'flex-3'}]}>
                    <h1>중장기 마케팅 전략</h1>
                    <h2>스토리 흐름에 따른 영한번역</h2>
                    
                    <h3>결과</h3>
                    <p className='pink'>‘회사에서 번역을 가장 잘한다’ 는 평가를 받음중장기 마케팅 전략 실행에 기여 </p>

                    <h3>배운 점</h3>
                    <ol>
                        <li>번역이란 내용을 완벽하게 이해한 후 나의 언어로 재창조하여 의미를 전달하는 과정</li>
                        <li>참고자료나 사전 지식없이 번역된 내용만 보고도 100% 이해할 수 있도록, 작성자의 의도에 맞춘 설득력 있는 번역의 중요성</li>
                    </ol>
                </DetailCard>
            </div>
        )
    }
}

export default FlexfitDetailPage