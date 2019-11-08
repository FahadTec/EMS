import React from 'react';
import {Router , Route, Switch , browserHistory} from 'react-router-dom';
import Nav from '../profile/Nav.jsx';
import Profile from '../profile/Profile.jsx';
// import Login from '../auth/Login.jsx';
import Register from '../auth/Register.jsx';
import Developers from '../developer/Developers.jsx';
import Footer from '../profile/Footer.jsx';
// import history from 'history';

const Routes = () => {
     
    return(
        <div>
            
            {/* <Router history={history}/> */}
       
            <Route component={Nav}/>
           <Switch>
                       
                       <Route path='/profile/:user_id' component={Profile}/>
                       <Route path='/developers' component={Developers}/>
                       <Route path='/register' component={Register}/>
                       
            </Switch>
            <Route component={Footer}/>
           
           
        </div>
    )
}
export default Routes;