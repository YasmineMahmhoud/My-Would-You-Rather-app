import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import{handleIntialData}  from '../actions/shared';
import NavBar from './Nav';
import Logain from './loginPage'
import NewQuestion from './NewQuestion'
import LeaderBord from './LeaderBord';
import NotFound from './notFound';
import QuestionDetailes from './QuestionDetails'
 class App extends React.Component{
  state ={
    ready:false
  }
  async componentDidMount(){
   await this.props.dispatch(handleIntialData())
   this.setState({ready:true})
  }
  render(){
    const {loggOut} =this.props
    const {ready}=this.state
  return (
     <Router>
       <Fragment>
       <LoadingBar/>{
        ready?
        (<div><NavBar/>
          {loggOut? <Logain/>:
          <div>
         <Route exact path ='/' component={Dashboard}/>
         <Route path='/new' component={NewQuestion}/> 
         <Route path='/leaderboard' component={LeaderBord}/>
         <Route path='/questions/:questionID' component={QuestionDetailes}/>
         <Route path='/questions/notfound' component={NotFound}/> 
         </div>  
       }</div>)
        : null
      }         
       </Fragment>
     </Router>
    
  );
}}
function mapStateToProps(state){
  const {authedUser} = state;
  return{
        loggOut : authedUser==='LOGGOUT'

  }

}
export default connect(mapStateToProps)(App);
