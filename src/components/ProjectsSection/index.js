import React, { Component } from 'react'

import ProjectCard from '../ProjectCard'

import './style.scss'

class ProjectsSection extends Component {
    constructor(props) {
        super(props)

        const flexfitImages = [{
            link: require('../../../public/flexfit/flexfit-1.png'),
            alt: 'flexfit-1'
        },
        {
            link: require('../../../public/flexfit/flexfit-2.png'),
            alt: 'flexfit-2'
        },
        {
            link: require('../../../public/flexfit/flexfit-4.png'),
            alt: 'flexfit-3'
        },
        {
            link: require('../../../public/flexfit/flexfit-5.png'),
            alt: 'flexfit-4'
        },
        {
            link: require('../../../public/flexfit/flexfit-6.png'),
            alt: 'flexfit-5'
        },
        {
            link: require('../../../public/flexfit/flexfit-7.png'),
            alt: 'flexfit-6'
        },
        {
            link: require('../../../public/flexfit/flexfit-11.png'),
            alt: 'flexfit-7'
        }];

        const circleImages = [{
            link: require('../../../public/camp/camp1.jpg'),
            alt: 'circle-1'
        },
        {
            link: require('../../../public/camp/camp2.JPG'),
            alt: 'circle-2'
        },
        {
            link: require('../../../public/camp/camp4.jpg'),
            alt: 'circle-4'
        },
        {
            link: require('../../../public/camp/camp5.jpg'),
            alt: 'circle-5'
        }] 

        const akmallImages = [{
            link: require('../../../public/akmall/ak1.png'),
            alt: 'akmall-1'
        },
        {
            link: require('../../../public/akmall/ak3.png'),
            alt: 'akmall-2'
        },
        {
            link: require('../../../public/akmall/ak4.png'),
            alt: 'akmall-3'
        }]

        const nubizioImages = [{
            link: require('../../../public/nubizio/nub4.png'),
            alt: 'nubizio-1'
        },
        {
            link: require('../../../public/nubizio/nub5.jpg'),
            alt: 'nubizio-2'
        },
        {
            link: require('../../../public/nubizio/nub1.png'),
            alt: 'nubizio-3'
        },
        {
            link: require('../../../public/nubizio/nub3.png'),
            alt: 'nubizio-4'
        }]

        this.state = {
            flexfitImages,
            circleImages,
            akmallImages,
            nubizioImages
        }
    }
    
    render() {
        return (
            <div className='projects-section' >
                <h1 data-aos='fade-up' >projects</h1>
                <ProjectCard images={this.state.flexfitImages}>
                    <h2>Global Communication</h2>
                    <h3>Internship at Flexfit LLC (Jan - June 2018)</h3>
                    <p>
                        Made 12 reports on market research, marketing strategy, trend issue.
                        Reported daily sales, amazon sell-through. Translated long-term marketing strategies
                        and created trade show and sell-through reports.
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.circleImages} reverse>
                    <h2>SNS Blog and Facebook Marketing</h2>
                    <h3>Internship at Circle Connection Event Management (Dec - Feb 2017)</h3>
                    <p>
                        Prepared the entrepreneur camp event for over 130 attendees. Managed company's
                        blog by organizing advertising events. Made drafts for advertising materials and
                        advertised the company through storytelling on Facebook.
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.akmallImages}>
                    <h2>Online Blog Marketing</h2>
                    <h3>University Students Marketing Support, AK Mall (Apr - Dec 2016)</h3>
                    <p>
                        Uploaded 66 reviews &#38; promotions which result over 460,000 views 
                        and won second MVP prize. putting links on the images of products with specific keywords based on SEO  
                        to induce people to buy them. Spread content to related websites to get more attention
                        and pull in more visitors.
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.nubizioImages} reverse>
                    <h2>Content Marketing</h2>
                    <h3>Marketing Support Team Leader, Nubizio (Feb - Mar 2015)</h3>
                    <p>
                        Filmed and edited UCC for company’s products and brand image, which resulted in over 26,000 views.
                        Proposed events targetting seasonal trends.
                    </p>
                </ProjectCard>
            </div>
            
        )
    }
}

export default ProjectsSection;