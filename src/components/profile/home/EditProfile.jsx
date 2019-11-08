import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';



class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber : '',
            city : '',
            country : '',
            gender : '',
            age : ''
        }

        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.email = this.email.bind(this);
        this.phoneNumber = this.phoneNumber.bind(this);
        this.city = this.city.bind(this);
        this.country = this.country.bind(this);
        this.gender = this.gender.bind(this);
        this.age = this.age.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    handleClick = () => {
        // e.preventDefault();
        axios.get(`http://192.168.0.29:5000/Users/viewProfile/${this.props.id}`)
            .then(res => {
                // console.log('response' + res);
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phoneNumber : res.data.phoneNumber,
                    city : res.data.city,
                    country : res.data.country,
                    gender : res.data.gender,
                    age : res.data.age
                })
            })
            .catch(err => console.log(err));
    }
    componentDidMount = () => {
        this.handleClick();
    }

    firstName = (e) => {
        this.setState({ firstName: e.target.value })
    }
    lastName = (e) => {
        this.setState({ lastName: e.target.value })
    }
    email = (e) => {
        this.setState({ email: e.target.value })
    }
    phoneNumber = (e) => {
        this.setState({phoneNumber : e.target.value})
    }
    city = (e) => {
        this.setState({city : e.target.value})
    }
    country = (e) => {
        this.setState({country : e.target.value})
    }
    gender = (e) => {
        this.setState({gender : e.target.value})
    }
    age = (e) => {
        this.setState({age : e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            city : this.state.city,
            country : this.state.country,
            gender : this.state.gender,
            age : this.state.age
        };
        axios.patch(`http://192.168.0.29:5000/Users/editProfile/${this.props.id}`,obj,{
            headers : {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type' : 'application/json'
            }
        })
            .then(res => console.log(res.data));
            // window.location.reload();
    }
    render() {
        const id = this.props.id;
        return (
            <div>
                {/* <button classNameNameNameName="btn btn-success ml-lg-2 mt-2">Edit Profile</button> */}
                <br />
                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Edit Profile</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">First Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.firstName} onChange={this.firstName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Last Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.lastName} onChange={this.lastName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-envelope prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Your email</label>
                                    <input type="email" id="orangeForm-email" value={this.state.email} onChange={this.email} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-phone prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Phone Number</label>
                                    <input type="text" id="orangeForm-name" value={this.state.phoneNumber} onChange={this.phoneNumber} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-building prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">City</label>
                                    <input type="text" id="orangeForm-name" value={this.state.city} onChange={this.city} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-flag prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Country</label>
                                    <input type="text" id="orangeForm-name" value={this.state.country} onChange={this.country} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Gender</label>
                                    <input type="text" id="orangeForm-name" value={this.state.gender} onChange={this.gender} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Age</label>
                                    <input type="text" id="orangeForm-name" value={this.state.age} onChange={this.age} className="form-control validate" />
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <input type="button" onClick={this.onSubmit} data-dismiss="modal" className="btn btn-secondary" value="Update" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {localStorage.getItem('id') == id || localStorage.getItem('isAdmin') == 'true' ? <button onClick={this.handleClick} className="btn btn-success" data-toggle="modal" data-target="#modalRegisterForm">Edit Profile</button> : null}
                </div>
            </div>
        )
    }
}
export default EditProfile;