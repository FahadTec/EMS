import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

class Services extends Component {
    render() {
        return (
            <div>

                <section className="mh-service" id="mh-services">
                    <div className="container">
                        <div className="row section-separator">
                            <div className="col-sm-12 text-center section-title wow fadeInUp">
                                <Animated isVisible={true} animationInDuration={1000} animationInDelay={200} animationIn="fadeInUp">

                                    <h2>What I do</h2>

                                </Animated>
                            </div>
                            <div className="col-sm-4">
                                <Animated isVisible={true} animationInDuration={1000} animationInDelay={600} animationIn="fadeInUp">
                                    <div className="mh-service-item shadow-1 dark-bg wow fadeInUp">
                                        <i className="fa fa-bullseye purple-color"></i>
                                        <h3>UI Design</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat.
                            </p>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-sm-4">
                                <Animated isVisible={true} animationInDuration={1000} animationInDelay={400} animationIn="fadeInUp">
                                    <div className="mh-service-item shadow-1 dark-bg wow fadeInUp">
                                        <i className="fa fa-code iron-color"></i>
                                        <h3>Web Development</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat.
                            </p>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-sm-4">
                                <Animated isVisible={true} animationInDuration={1000} animationInDelay={400} animationIn="fadeInUp">
                                    <div className="mh-service-item shadow-1 dark-bg wow fadeInUp">
                                        <i className="fa fa-object-ungroup sky-color"></i>
                                        <h3>App Development</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat.
                                        </p>
                                    </div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
export default Services;