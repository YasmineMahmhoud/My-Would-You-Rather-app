import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Answered from './answeredQues';
import Unanswered from './unansweredQues';
import { Redirect } from 'react-router-dom'
class QuestionDetailes extends React.Component{
   render(){
    const {notFound,ready,id} =this.props
    if(notFound){
        return <Redirect to='notfound'/>
    }
       return (
           <div>{ready ?<Answered id={id}/> : <Unanswered id={id}/>}</div>
       );
   }
}
function mapStateToProps(state,{match}){
  const {questions,authedUser}= state
  const id = match.params.questionID
  const question=questions[id]
  const notFound = question === undefined
    if(!notFound){
        const ready = (question.optionOne.votes.indexOf(authedUser) !== -1
        || question.optionTwo.votes.indexOf(authedUser) !== -1) ? true:false
        return {
            id,notFound,ready
        }
    }else{
        return {
            notFound
        }
    }
 
}
export default withRouter(connect(mapStateToProps)(QuestionDetailes))