import React from 'react'
import {connect} from 'react-redux'
import {setUser} from '../actions/authedUser'
import {Link,withRouter} from 'react-router-dom'
class Logain extends React.Component{
  state ={
    value:null
  }
  componentDidMount(){
    this.props.dispatch(setUser('LOGGOUT'))
  }
    chooseUser(event){
        const value = event.target.value
       this.setState({value})
    }
    handleSetUser=(e,path)=>{
      e.preventDefault()
      this.props.history.push(`${path}`)
      const {value} = this.state
      const {dispatch}=this.props
      dispatch(setUser(value))
      this.setState({value:null})
    }
   
    render(){
      const {value}=this.state
      const path = this.props.location.pathname;
        return(
          <div className='card'>
            <div className='bar'> 
              <h2>Would You Rather ! </h2>
              <h3> sign in to start palying </h3>
            </div>
            <img src='/logo192.png' alt='react-logo'/>
            <p>Sign In</p>
            <div className='choices-list'>
                <select defaultValue='select' className='change-user' onChange={(event)=>{this.chooseUser(event)}}>
                <option value='select' disabled> Select User</option>
                <option value ='sarahedo'>Sarah Edo</option>
                <option value ='tylermcginnis'>Tyler McGinnis</option>
                <option value = 'johndoe'>John Doe</option>
                </select>
            </div>
            <Link to ={`${path}`}> 
                <button className='signIn' type='button' disabled = {value===null}
                onClick ={(e)=>{this.handleSetUser(e,path)}}
                > Sign In </button>
              </Link>
          </div>
        );
    }
}
export default withRouter(connect()(Logain))