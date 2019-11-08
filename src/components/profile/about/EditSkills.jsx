import React, {Component} from 'react';
// import axios from 'axios';

class EditSkills extends Component{  
    render(){
        const EditId = this.props.editId;
        const newList = this.props.list;
        return(
            <div>
                <div className="modal fade" id="editSkills" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                                <div className="md-form mh-about-tag wow mb-5">
                                    <ul>
                                        
                                        {
                                           newList.skills !== undefined ? 
                                           newList.skills.map((lists,id) => {
                                               return(
                                                   <li key={id}><span>{lists}</span> <i className="fa fa-times-circle"></i></li>
                                               )
                                           }) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-dismiss="modal">Add skill</button>
                            </div>
                        </div>
                    </div>
                </div>
                { localStorage.getItem('id') == EditId ? <button type="button" style={{ fontSize: '20px', background: 'none', border: 'none' }} title="Edit Skills" data-toggle="modal" data-target="#editSkills"><i className="fa fa-edit"></i></button> : null}
            </div>
        )
    }
}
export default EditSkills;