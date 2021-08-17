import React from 'react'
import {connect} from 'react-redux'
import { handlePolledQuestion } from '../actions/questions'

class Unanswered extends React.Component{
     state={
         value:''
     }
    addPoll=(e)=>{
        e.preventDefault()
        const {dispatch,question} = this.props
        const {value}=this.state
        dispatch(handlePolledQuestion(question.id,value))

    }
    handleChange=(e)=>{
        const voting = e.target.value
        console.log(voting)
        this.setState({value:voting})
        
    }
    render(){
        const {question,img}=this.props
        const {value}=this.state
        
       return(
            <div className='card'>
                <div className='question-bar'>
                {question.author} asks
                </div>
                <div className='question'>
                <img src={img} alt={question.author} className='avatar'/>
                <div className='question-info'>
                  <h1> Would You Rather...</h1>
                  <form action="/action_page.php">
                    <input type="radio"  name="fav_question" 
                      value='optionOne'onChange={(e)=>{this.handleChange(e)}} />
                    <label >{question.optionOne.text}</label><br/>
                    <input type="radio" name="fav_question"  
                       value='optionTwo' onChange={(e)=>{this.handleChange(e)}}/>
                    <label>{question.optionTwo.text}</label><br/>        
                  </form> <br/>
                  <button 
                  type='submit' 
                  onClick={(e)=>{this.addPoll(e)}}
                   disabled={value ===''}> 
                     Submit</button>
                  
                </div>
                </div>

            </div>
        );
    }
}
function mapStateToProps (state,{id}){
    const {questions,users} = state
    const question =questions[id]
    const img =users[question.author].avatarURL
    return{
       question,img
    }
}
export default connect(mapStateToProps)(Unanswered)