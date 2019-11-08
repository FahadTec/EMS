import React, { Component } from 'react';
import axios from 'axios';

class AddSkills extends Component {
    constructor(props){
        super(props);
        this.state={
            skills : [],
        }
        this.skills = this.skills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    skills = (e) => {
        this.setState({
            skills : e.target.value
        }) 
    }
   
     onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            skills : this.state.skills
        }
        if(this.state.skills.length === 0){
            alert("Please Enter Skill")
        }
        axios.put(`http://192.168.0.29:5000/Users/addSkills`, obj, {
            headers : {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            console.log(res.data);
        });
        this.setState({
            skills : ''
        });
        // window.location.reload();
    }
    render() {
        const id = this.props.skillId;
        return (
            <div>
                
                <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="md-form mb-5">
                                    <i className="fa fa-laptop prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Enter Skills One By One</label>
                                    <input type="text" id="orangeForm-name" value={this.state.skills} onChange={this.skills} className="form-control validate"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.onSubmit}>Add skill</button>
                            </div>
                        </div>
                    </div>
                </div>
                { localStorage.getItem('id') == id ? <button type="button" style={{ fontSize: '20px', background: 'none', border: 'none' }} title="Add Skill Here" data-toggle="modal" data-target="#basicExampleModal"><i className="fa fa-plus-circle"></i></button> : null}
            </div>
        )
    }
}
export default AddSkills;