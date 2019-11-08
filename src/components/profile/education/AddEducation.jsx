import React, {Component,Fragment} from 'react';
import axios from 'axios';

class AddEducation extends Component{
    constructor(props){
        super(props);
        this.state = {
            DegreeName : '',
            YearOfPassing : '',
            InstituteName : '',
            Percentage : '',
            Cgpa : ''
        }
        this.DegreeName = this.DegreeName.bind(this);
        this.YearOfPassing = this.YearOfPassing.bind(this);
        this.InstituteName = this.InstituteName.bind(this);
        this.Percentage = this.Percentage.bind(this);
        this.Cgpa = this.Cgpa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    DegreeName = (e) => {
        this.setState({
            DegreeName : e.target.value
        })
    }
    YearOfPassing = (e) => {
        this.setState({
            YearOfPassing : e.target.value
        })
    }
    InstituteName = (e) => {
        this.setState({
            InstituteName : e.target.value
        })
    }
    Percentage = (e) => {
        this.setState({
            Percentage : e.target.value
        })
    }
    Cgpa = (e) => {
        this.setState({
            Cgpa : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const education = {
            degreeName : this.state.DegreeName,
            yearOfPassing : this.state.YearOfPassing,
            instituteName : this.state.InstituteName,
            percentage : this.state.Percentage,
            cgpa : this.state.Cgpa
        }
        console.log(education);
        axios.put(`http://192.168.0.29:5000/Users/addQualification`, {qualifications:education}, {
            headers : {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err));
        // window.location.reload();
    }
    render(){
        const sessionID = this.props.AddEducation._id;
        return(
            <Fragment>
                <div className="modal fade" id="modalEditEducation" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                    <label data-error="wrong" data-success="right"> Degree Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.DegreeName} onChange={this.DegreeName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-calendar prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Year Of Passing</label>
                                    <input type="text" id="orangeForm-name" value={this.state.YearOfPassing} onChange={this.YearOfPassing} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-university prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Institute Name</label>
                                    <input type="text" id="orangeForm-email" value={this.state.InstituteName} onChange={this.InstituteName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-percent prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Percentage</label>
                                    <input type="number" id="orangeForm-name" value={this.state.Percentage} onChange={this.Percentage} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-percent prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right">Marks / CGPA</label>
                                    <input type="number" id="orangeForm-name" value={this.state.Cgpa} onChange={this.Cgpa} className="form-control validate" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <input type="button" onClick={this.handleSubmit} data-dismiss="modal" className="btn btn-primary" value="Add Education" />
                            </div>
                        </div>
                    </div>
                </div>
               { localStorage.getItem('id') == sessionID ?  <button type="button" style={{ fontSize: '20px', background: 'none', border: 'none' }} title="Add Education Here" data-toggle="modal" data-target="#modalEditEducation"><i className="fa fa-plus-circle"></i></button> : null}
            </Fragment>
        )
    }
}

export default AddEducation;