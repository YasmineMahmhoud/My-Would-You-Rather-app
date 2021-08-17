import React from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import LoadingBar from 'react-redux-loading';

class Dashboard extends React.Component{
  state={
    value:'unanswered',
  } 
  unansweredQuestion=()=>{
    this.setState({value:'unanswered'})
  }
  answeredQuestion =()=>{
    this.setState({value:'answered'
  })}
    render(){
      const {value}=this.state
      const {unansweredQues,answeredQues}=this.props
      console.log(this.props)
      let ansbut = value === 'answered'?'colered':'uncolored'
      let unansbut = value==='unanswered'?'colered':'uncolored'
        return(
          <div> <LoadingBar/>
            <div className='center'>
                <button className={unansbut} onClick={this.unansweredQuestion}> 
                    Unanswerd Questions 
                </button>
                <button  className ={ansbut} onClick={this.answeredQuestion}>
                    Answerd Questions
                </button>  
            </div>
            <div>
            {value === 'unanswered'? 
              <ul>
              {unansweredQues.map((id)=>
                <li key = {id}>
                  <Question id = {id}/>
                </li>
                  )}
                </ul>
            :
              <ul>
              {answeredQues.map((id)=>
                <li key = {id}>
                  <Question id = {id}/>
                </li>
                  )}
              </ul>}     
            </div>               
          </div>
        );
    }
}
function mapStateToProps(state){
  const {questions,authedUser}= state;
  const allQuestions = Object.values(questions).sort((a,b)=>questions[b.id].timestamp-questions[a.id].timestamp)
  const unanswered = allQuestions.filter((item)=> item.optionOne.votes.indexOf(authedUser) === -1
                && item.optionTwo.votes.indexOf(authedUser) === -1 )   
  const unansweredQues = unanswered.map((item)=>item.id) 
  const answered = allQuestions.filter((item)=> item.optionOne.votes.indexOf(authedUser) !== -1
                  || item.optionTwo.votes.indexOf(authedUser) !== -1 )   
    const answeredQues = answered.map((item)=>item.id) 
      
  return {
      unansweredQues,
      answeredQues,
      
}
}
export default connect(mapStateToProps)(Dashboard)