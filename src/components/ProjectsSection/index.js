import React, { Component } from 'react'

import ProjectCard from '../ProjectCard'
import globalTranslations from'../../translations/global.json'
import { withLocalize, Translate } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";

import './style.scss'

class ProjectsSection extends Component {
    constructor(props) {
        super(props)

        this.props.initialize({
            languages: [
              { name: "Korean", code: "kr" },
              { name: "English", code: "en" }
              
            ],
            translation: globalTranslations,
            options: {
              renderToStaticMarkup,
              renderInnerHtml: true,
              defaultLanguage: "kr",
            }
          })

        this.props.addTranslation(globalTranslations)

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
            link: require('../../../public/camp/camp3.png'),
            alt: 'circle-3'
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
                <ProjectCard images={this.state.flexfitImages} href='/flexfit'>
                    <h2><Translate id='projects.project1.title'/></h2>
                    <h3><Translate id='projects.project1.subtitle'/></h3>
                    <p>
                        <Translate id='projects.project1.description'/>
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.circleImages} href='/circle-connection' reverse>
                    <h2><Translate id='projects.project2.title'/></h2>
                    <h3><Translate id='projects.project2.subtitle'/></h3>
                    <p>
                        <Translate id='projects.project2.description'/>
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.akmallImages}>
                    <h2><Translate id='projects.project3.title'/></h2>
                    <h3><Translate id='projects.project3.subtitle'/></h3>
                    <p>
                        <Translate id='projects.project3.description'/>
                    </p>
                </ProjectCard>
                <ProjectCard images={this.state.nubizioImages} reverse>
                    <h2><Translate id='projects.project4.title'/></h2>
                    <h3><Translate id='projects.project4.subtitle'/></h3>
                    <p>
                        <Translate id='projects.project4.description'/>
                    </p>
                </ProjectCard>
            </div>
            
        )
    }
}

export default withLocalize(ProjectsSection);