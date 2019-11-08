import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import AddSkills from './AddSkills.jsx';
import EditSkills from './EditSkills.jsx';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about : []
        }
    }
    UNSAFE_componentWillReceiveProps(newProps){
        if(this.state.about !== newProps.about){
            this.setState({about : newProps.about})
        }
    }
    render() {
        const result = this.state.about;
        return (
            <div>
                <section className="mh-about" id="mh-about">
                    <div className="container">
                        <div className="row section-separator">
                            <div className="col-sm-12 col-md-6">
                                <Animated isVisible={true} animationInDuration={800} animationInDelay={400} animationIn="fadeInUp">
                                    <div className="mh-about-img shadow-2 wow fadeInUp">
                                        <img src="../images/ab-img.png" alt="About image" className="img-fluid"/>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="mh-about-inner">
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={100} animationIn="fadeInUp">
                                        <h2 className="wow fadeInUp" >Skills</h2>
                                    </Animated>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={200} animationIn="fadeInUp">
                                        <p className="wow fadeInUp">Hello, I’m a Patrick, web-developer based on Paris.
                                         I have rich experience in web site design &amp; building
                                         and customization. Also I am good at</p>
                                    </Animated>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={300} animationIn="fadeInUp">
                                      
                                        <div className="mh-about-tag wow fadeInUp">
                                            <ul>
                                                {
                                                //   skillResults[1]
                                                <div> 
                                                       { result.skills !==undefined ?
                                                           result.skills.map((skills, id) => {
                                                               return (
                                                                   <li key={id}><span>{skills}</span></li>
                                                               )
                                                           }) : null
                                                       }
                                                </div>
                                                }
                                                
                                            </ul>
                                        </div> 
                                    </Animated>
                                    
                                    <AddSkills skillId={this.props.skill}/>
                                    <EditSkills list={this.state.about} editId = {this.state.about._id}/>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={400} animationIn="fadeInUp">
                                    <br/><br/> <a href="#" className="btn btn-fill wow fadeInUp">Download CV <i className="fa fa-download"></i></a>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;