import React, {Component, Fragment} from 'react';

class Footer extends Component {
    componentWillMount(){
        if(!localStorage.getItem('jwt-token')){
            this.props.history.push('/')
        }
    }
    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="p-4 text-center">All right reserved devbatch @2019 Developer Profile</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Footer;