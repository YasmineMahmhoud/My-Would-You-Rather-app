import React from 'react';
import { NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { setUser } from '../actions/authedUser';
import {AUTHED_ID} from '../actions/shared'
class NavBar extends React.Component{
    Logout=()=>{
        const {dispatch}=this.props
        dispatch(setUser(AUTHED_ID))    
    }
    render(){
        const {authedUser,name}=this.props
        console.log('dsad',this.props)
        return(
            <nav className='nav'>
              <ul>
                <NavLink to ='/' exact activeClassName='active'>
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink to='/new' activeClassName='active'>
                    <li>
                        New Question
                    </li>
                </NavLink>
                <NavLink to ='/leaderboard' activeClassName='active'>
                    <li>
                     Leader Board
                    </li> 
                </NavLink>               
                {(authedUser !== AUTHED_ID ) ? 
                    ( <div className='right'><span className='salu'> {`Hello,${name}`}</span>                       
                    <button className='logbtn' onClick={this.Logout}>Log Out</button></div>)
                    : null} 
                     {/* modify this code when user sign in  */}          
              </ul>
            </nav>
 
        );
    }
}
function mapStateToProps(state){
    const {users,authedUser}=state
    const user = users[authedUser]
    const name = user? user.name:null
   return{
        authedUser,
        name
}
}
export default connect(mapStateToProps)(NavBar)