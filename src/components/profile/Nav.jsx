import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    logout = () => {
        localStorage.clear();
        window.location.href = '/'
        // this.props.history.push("/");
    }
    
    render() {
       
        return (
            <div>
                <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav nav-strict" id="mh-header">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                            <a className="nav-link"><img src="../images/logo.png" alt="logo" style={{width:'70%'}}/></a>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/developers">Developers</NavLink>
                                        </li>
                
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link" to={`http:/profile/${localStorage.getItem('id')}`}>Home</NavLink>
                                        </li> */}
                                    </ul>
                                    <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        {
                                            localStorage.getItem('isAdmin') == 'true' ? <NavLink className="nav-link" to="/register">Register</NavLink> : null
                                        }
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Login</NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink className="nav-link" onClick={this.logout} to="/logout">Logout</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Nav;