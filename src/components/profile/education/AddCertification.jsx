import React, { Component, Fragment } from 'react';
import axios from 'axios';

class AddCertification extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            issuedBy : '',
            issueDate : '',
            location : ''
        }

        this.name = this.name.bind(this);
        this.issuedBy = this.issuedBy.bind(this);
        this.issueDate = this.issueDate.bind(this);
        this.location = this.location.bind(this);
        this.submit = this.submit.bind(this);
    }
    name = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    issuedBy = (e) => {
        this.setState({
            issuedBy : e.target.value
        })
    }
    issueDate = (e) => {
        this.setState({
            issueDate : e.target.value
        })
    }
    location = (e) => {
        this.setState({
            location : e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        const certification = {
            name : this.state.name,
            issuedBy : this.state.issuedBy,
            issueDate : this.state.issueDate,
            location : this.state.location
        }
        console.log(certification);
        axios.put(`http://192.168.0.29:5000/Users/addCertifications`, {certifications : certification}, {
            headers : {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        // window.location.reload();
    }
    render() {
        const certification_id = this.props.AddCertification._id;
        return (
            <Fragment>
                 <div className="modal fade" id="modalAddCertification" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Add Qualifications</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fa fa-book prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Certification Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.name} onChange={this.name} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-university prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Issue By</label>
                                    <input type="text" id="orangeForm-name" value={this.state.issuedBy} onChange={this.issuedBy} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-calendar prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Issue Date</label>
                                    <input type="date" id="orangeForm-email" value={this.state.issueDate} onChange={this.issueDate} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-map-marker prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Location </label>
                                    <input type="text" id="orangeForm-name" value = {this.state.location} onChange={this.location} className="form-control validate" />
                                </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <input type="button" data-dismiss="modal" onClick={this.submit} className="btn btn-primary" value="Add Certification" />
                            </div>
                        </div>
                    </div>
                </div>
                {localStorage.getItem('id') == certification_id ?  <button type="button" style={{ fontSize: '20px', background: 'none', border: 'none' }} title="Add Certification Here" data-toggle="modal" data-target="#modalAddCertification"><i className="fa fa-plus-circle"></i></button> : null}
            </Fragment>
        )
    }
}
export default AddCertification;