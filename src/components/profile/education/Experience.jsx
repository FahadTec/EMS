import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

class Experience extends Component {
    render() {
        var styles = {
            padding: '26px 30px',
            marginBottom: '30px'
        }
        return (
            <div>
              
                    <div className="mh-work">
                        <h3>Work Experience</h3>
                        <div className="mh-experience-details">

                            <Animated isVisible={true} animationInDuration={1000} animationInDelay={200} animationIn="fadeInUp">
                                <div className="mh-work-item dark-bg wow fadeInUp" style={styles}>
                                    <h4>FrontEnd Developer <a href="#">DevBatch</a></h4>
                                    <div className="mh-eduyear">2019-2020</div>
                                    <span>Responsibility :</span>
                                    <ul className="work-responsibility">
                                        <li><i className="fa fa-circle"></i>FrontEnd Developer</li>
                                        <li><i className="fa fa-circle"></i>Project Management</li>
                                    </ul>
                                </div>
                            </Animated>

                            <Animated isVisible={true} animationInDuration={1000} animationInDelay={300} animationIn="fadeInUp">
                                <div className="mh-work-item dark-bg wow fadeInUp" style={styles}>
                                <h4>FrontEnd Developer <a href="#">DevBatch</a></h4>
                                    <div className="mh-eduyear">2019-2020</div>
                                    <span>Responsibility :</span>
                                    <ul className="work-responsibility">
                                        <li><i className="fa fa-circle"></i>FrontEnd Developer</li>
                                        <li><i className="fa fa-circle"></i>Project Management</li>
                                    </ul>
                                </div>
                            </Animated>

                            <Animated isVisible={true} animationInDuration={1000} animationInDelay={400} animationIn="fadeInUp">
                                <div className="mh-work-item dark-bg wow fadeInUp" style={styles}>
                                <h4>ReactJs Developer <a href="#">DevBatch</a></h4>
                                    <div className="mh-eduyear">2019-2020</div>
                                    <span>Responsibility :</span>
                                    <ul className="work-responsibility">
                                        <li><i className="fa fa-circle"></i>FrontEnd Developer</li>
                                        <li><i className="fa fa-circle"></i>Project Management</li>
                                    </ul>
                                </div>
                            </Animated>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Experience;