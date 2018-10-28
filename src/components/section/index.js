

import React from 'react';

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const References = require('./references');
const Footer = require('./footer');

export default class Section  extends React.Component {

    render() {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
};


Section.propTypes = {
    basics: ResumePropTypes.basics,
    work: ResumePropTypes.workSet,
    education: ResumePropTypes.educationSet,
    skills: ResumePropTypes.skillsSet,
    languages: ResumePropTypes.languagesSet,
    portfolio: ResumePropTypes.publicationsSet,
    references: ResumePropTypes.referencesSet
}
