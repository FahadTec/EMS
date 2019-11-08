import React, { Component, Fragment } from 'react';
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import Services from './Services.jsx';
import Edu_Exp from './education/Edu_Exp.jsx';
import axios from 'axios';

class Profile extends Component {
    // _isMounted = false;
    intervalID = 0;
   constructor(props){
       super(props);
       this.state={
        employee : []
    }
    this.getData = this.getData.bind(this)
   }

   componentDidMount(){
       this.intervalID = setInterval(() => {this.getData()} , 500)
}
componentWillUnmount(){
    clearInterval(this.intervalID);
    
}

   getData = () => {
    const userId = this.props.match.params.user_id;
    // console.log(userId);
   userId !== '' ?  axios.get(`http://192.168.0.29:5000/users/viewProfile/${userId}`)
   .then(res => {
       const User = res.data;
       this.setState({
           employee : User
       })
   }).catch(err => console.log(err)) : null
   }
   
    componentWillMount(){
        
        if(!localStorage.getItem('jwt-token')){
            this.props.history.push('/')
        }
    }
   render(){
    //    console.log('params id');
    //    console.log(this.state.employee._id)
    return (
        <Fragment>
            <Home home={this.state.employee}/>
            <About about={this.state.employee} skill={this.props.match.params.user_id}/>
            <Services/>
            <Edu_Exp edu_exp={this.state.employee}/>      
        </Fragment>
    )
   }
}

export default Profile;