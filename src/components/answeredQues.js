import React from 'react'
import {connect} from 'react-redux'
class Answered extends React.Component{
    render(){  
        const {question,img} = this.props
         return(
             <div className='card'>
               <div className = 'question-bar'>
                  Asked by {question.author}
               </div>
               <div className='question'>
                <img className='avatar' src={img} alt={question.author}/>
                <div className = 'question-info'>
                   <h1> Results :</h1>
                   <div className='result'>
                     <p>{question.optionOne.text}</p>
                     <span> votes : {question.optionOne.votes.length} </span>
                   </div>
                   <div className='result'>
                     <p>{question.optionTwo.text}</p>
                     <span> votes : {question.optionTwo.votes.length} </span>
                   </div>
                </div>
               </div>
             </div>
         );
     }
 }
 function mapStateToProps(state,{id}){
    const {questions,users} = state
    const question =questions[id]
    const notFound = question === undefined
    const img =users[question.author].avatarURL
    return{
       notFound,
       question,img
    }

 }
export default connect(mapStateToProps)(Answered)