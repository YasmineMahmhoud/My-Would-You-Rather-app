import React from 'react'
import {connect} from 'react-redux'
class Answered extends React.Component{
    render(){  
        const {question,img} = this.props
        const {optionTwo,optionOne,author}= question
        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        const optionOnePrecentage = (optionOne.votes.length/totalVotes)*100
        const optionTwoPrecentage = (optionTwo.votes.length/totalVotes)*100
        console.log(optionTwoPrecentage)
         return(
             <div className='card'>
               <div className = 'question-bar'>
                  Asked by {author}
               </div>
               <div className='question'>
                <img className='avatar' src={img} alt={author}/>
                <div className = 'question-info'>
                   <h1> Results :</h1>
                   <div className='result'>
                     <p>{optionOne.text}</p>
                     <span> votes : {optionOne.votes.length} out of {totalVotes} votes</span>
                     <span> precentage : {optionOnePrecentage} %</span>
                   </div>
                   <div className='result'>
                     <p>{optionTwo.text}</p>
                     <span> votes : {optionTwo.votes.length} out of {totalVotes} votes </span>
                     <span> precentage : {optionTwoPrecentage} %</span>

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