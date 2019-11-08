import React, { Component, Fragment } from 'react';
import {Link , Redirect } from 'react-router-dom';
// import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        }

        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.register = this.register.bind(this);
    }

    firstName = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }
    lastName = (e) => {
        this.setState({lastName : e.target.value})
    }
    email = (e) =>{
        this.setState({email: e.target.value})
    }
    password = (e) =>{
        this.setState({password: e.target.value})
    }
    register = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password
        })
       const data = fetch('http://192.168.0.29:5000/auth/signup',{
            method:'POST',
            headers : {
                // 'Accept' : 'application/json',
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                email : this.state.email,
                password : this.state.password
            })
        }).then((res) => res.json())
         .then(res => {
             console.log(res);
             if(res.data == 200){
                 alert('User already exit');
             } else{
                 this.props.history.push('/developers');
             }
         })
        .catch(err => console.log(err));
        //   .then((Result) => {
        //       return 
        //   })
       
          console.log(data);   
    }
   
    
    render(){
    const styles = {
       
        main : {
            borderBottom : '1px solid black'
        },
        mainIcon : {
            paddingTop : '12px'
        },
        space : {
            paddingTop : '30px'
        }   
}
    return(
        <Fragment>
              <div className="container" style={{marginTop:'150px'}}>
                    <div className="row sign-in section-separator">
                        <div className="col-md-5 offset-1">
                        <div className="singin-image">
                                <img src="./images/signup-image.jpg" alt="singIn Image" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                           <h1>Register</h1><br/>
                           <form>
                              <div className="input-group" style={styles.main}>
                              <span><i style={styles.mainIcon} className="fa fa-user"/></span><input   type="text" onChange={this.firstName} className="form-control login-input" name="FirstName"  placeholder="First Name" />
                              
                              </div><br/>
                              <div className="input-group" style={styles.main}>
                              <span><i style={styles.mainIcon} className="fa fa-user"/></span><input   type="text" onChange={this.lastName} className="form-control login-input" name="LastName"  placeholder="Last Name" />
                              
                              </div><br/>
                              <div className="input-group" style={styles.main}>
                              <span><i style={styles.mainIcon} className="fa fa-envelope"/></span><input   type="email" onChange={this.email} className="form-control login-input"  name="Email" placeholder="Email" />
                              
                              </div><br/>
                              <div className="input-group" style={styles.main}>
                              <span><i style={styles.mainIcon} className="fa fa-lock"/></span><input  type="password" onChange={this.password} className="form-control login-input" name="Password"  placeholder="Password" />
                              </div>
                              <div className="input-group" style={styles.space}>
                                  <input type="button" onClick={this.register} value="Register" className="btn btn-primary"/>

                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to='/'><input type="button" value="Login" className="btn btn-primary"/></Link>
                              </div>
                           </form>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
  }

export default Register;