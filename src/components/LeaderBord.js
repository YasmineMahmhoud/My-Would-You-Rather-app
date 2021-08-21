import React from 'react';
import {connect} from 'react-redux'
class LeaderBord extends React.Component{
    render(){
        console.log(this.props)
        const {sortedUsers} = this.props
        return(
           <div>
             <ul>
               {sortedUsers.map((user)=>(
                   <div key ={user.id} className='board'>
                    <img src={user.avatarURL} className='avatar' alt={user.name}/>
                      <div className='board-info'> 
                        <p> {user.name}</p>
                        <div className='boardresult'>
                          <span> Answered Questions : {Object.values(user.answers).length}</span>
                          <span> Created Questions : {user.questions.length}</span>
                        </div>
                       </div>
                       <div className='score'>
                        <p> Score </p>
                        <span> {user.score}</span>
                       </div>
                   </div>
               ))}
             </ul>
           </div> 
        );
    }
}
function mapStateToProps(state){
    const{users}=state
    const usersWithScore= Object.values(users).map((user)=>{
        const numberOfAnswers = Object.values(user.answers).length;
        const numberOfQuestions = user.questions.length;
        const sum = numberOfAnswers+numberOfQuestions;
        const score = 'score'
        return{
            ...user,[score]:sum
        }})
    const sortedUsers = usersWithScore.sort((a,b)=>b.score-a.score)
  return{
      sortedUsers
  }
}
export default connect(mapStateToProps)(LeaderBord)