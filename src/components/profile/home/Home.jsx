import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import EditProfile from './EditProfile.jsx';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            image: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            image : e.target.files[0]
        });
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',this.state.image, this.state.image.name);
        
        const config = {
            headers: {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type': 'multipart/form-data'
            }
        };
        axios.post("http://192.168.0.29:5000/Users/uploadImage",formData,config)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
        });
        window.location.reload();
    }
    
    render() {
        var styles = {
            color: 'black'
        }
        const employee = this.props.home;
        return (
            <div>
                <section className="mh-home image-bg home-2-img" id="mh-home">
                    <div className="img-overlay img-color-overlay">
                        <div className="container">
                            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                                <div className="col-sm-6">
                                    <div className="mh-header-info">
                                        
                                                    <div key={employee._id}>
                                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={500} animationIn="fadeInUp">
                                        <div className="mh-promo wow fadeInUp">
                                            <span style={{ color: 'white' }}>Hello I'm</span>
                                        </div>
                                    </Animated>

                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={200} animationIn="fadeInUp">
                                        <h2 className="wow fadeInUp" style={styles}>{employee.firstName} {employee.lastName}</h2>
                                    </Animated>

                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={300} animationIn="fadeInUp">
                                        <h4 className="wow fadeInUp" style={styles}>BackEnd Developer</h4>
                                    </Animated>

                                    <ul>
                                        <Animated isVisible={true} animationInDuration={800} animationInDelay={400} animationIn="fadeInUp">
                                            <li className="wow fadeInUp" style={styles}><i className="fa fa-envelope"></i><a href="mailto:">{employee.email}</a></li>
                                        </Animated>
                                        <Animated isVisible={true} animationInDuration={800} animationInDelay={500} animationIn="fadeInUp">
                                            <li className="wow fadeInUp" style={styles}><i className="fa fa-phone"></i><a href="callto:">{employee.phoneNumber}</a></li>
                                        </Animated>
                                        <Animated isVisible={true} animationInDuration={800} animationInDelay={600} animationIn="fadeInUp">
                                            <li className="wow fadeInUp" style={styles}><i className="fa fa-map-marker"></i><address>{employee.city} , {employee.country}</address></li>
                                        </Animated>
                                        <Animated isVisible={true} animationInDuration={800} animationInDelay={600} animationIn="fadeInUp">
                                            <li className="wow fadeInUp" style={styles}><i className="fa fa-user"></i>{employee.gender} &nbsp; <b>Age :</b> {employee.age}</li>
                                        </Animated>
                                    </ul>
                                                </div>
                                            

                                        <Animated isVisible={true} animationInDuration={800} animationInDelay={600} animationIn="fadeInUp">
                                            <ul className=" wow fadeInUp social1">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fa fa-github"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                            </ul>
                                        </Animated>
                                        <EditProfile id = {employee._id}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={600} animationIn="fadeInUp">
                                        <div className="hero-img wow fadeInUp">
                                            <div className="img-border">
                                               <img src={"http://192.168.0.29:5000/" + employee.image} alt="Profile Picture" className="img-fluid" style={{width : '100%'}}/>
                                                
                                            </div>
                                    
                                           {
                                               localStorage.getItem('id') == employee._id ? 
                                               <form>
                                               <input type="file" id="image" onChange= {this.onChange} />
                                               <button onClick={this.onFormSubmit} type="submit">Upload</button>
                                            </form> : null
                                           }
                                        </div>
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

export default Home;