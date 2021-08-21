import React from 'react'
import {connect} from 'react-redux'
import { Link,withRouter } from 'react-router-dom'
class Question extends React.Component{
    toQuestion=(e,qid)=>{
        e.preventDefault()
       this.props.history.push(`/questions/${qid}`)
    }
    render(){
        const {question,image,name}= this.props      
        const {optionOne} = question
         return(
             <div className='card'>
              <div className='question-bar'>
                {name} says :
              </div>
              <div className='question'>
              <img src={image} alt={name} className='avatar'/>
               <div className='question-info'>
                <p> Would you rather </p>
                <h3>....{optionOne.text}....</h3>
                <Link to={`/questions/${this.props.id}`}>
                   <button type='button' onClick={(e)=>{this.toQuestion(e,question.id)}}>View Poll</button>
                  </Link>
               </div>
              </div>
             </div>
         );
     }
 }
 function mapStateToProps(state,{id}){
    const {questions,users}=state;
    const question = questions[id];
    const user = users[question.author]
    const image = user.avatarURL
    const name = user.name
    return {
        image,
        question,
        name,
        id,      
       

    }
    
 }

export default withRouter(connect(mapStateToProps)(Question))