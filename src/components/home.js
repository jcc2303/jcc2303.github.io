

import React from 'react';
import PropTypes from 'prop-types';

import Loading from './loading';

import request from 'superagent';

import Header from './header';
import Navigation from './navigation';
import Banner from './banner';
import ScrollDown from './scrolldown';
import Section from './section';

export default class Home  extends React.Component{

    constructor(props) {
        super(props);        
        console.log('home',props)
        this.state = {
            resume: false
        };
    }

    componentDidMount() {
        return request
            .get(this.props.config.resumePath)
            .end(function (error, response) {
                console.log(response.body)
                return error ? error : this.setState({
                    resume: response.body
                });
            }.bind(this));
    }

    onLoad() {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.config.navigation}/>
                    <Banner basics={this.state.resume.basics}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    work={this.state.resume.work}
                    education={this.state.resume.education}
                    skills={this.state.resume.skills}
                    languages={this.state.resume.languages}
                    portfolio={this.state.resume.projects}
                    references={this.state.resume.references}/>
            </div>
        );
    }

    beforeLoad() {
        return (
            <Loading/>
        );
    }
//             {/* <Loading/> */}

    render() {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
};


Home.propTypes = {
    config: PropTypes.shape({
        resumePath: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired
    }).isRequired
}
