import { hideLoading, showLoading } from "react-redux-loading";
import {  _saveQuestion,_saveQuestionAnswer } from "../_DATA";
import { updateUser, userAnswered } from "./users";

export const RECEIVE_QUES = 'RECEIVE_QUES';
export const ADD_QUES = 'ADD_QUES'
export const ADD_POLL = 'ADD_POLL'
export function receiveQues (questions){
    return {
        type:RECEIVE_QUES,
        questions
    }
}
 function addQues (question){
    return{
        type:ADD_QUES,
        question
    }
}
function addPoll (answer,qid,userID){
    return{
        type:ADD_POLL,
        answer,
        qid,userID
    }
}
export function handleAddQuestion(optionOneText,optionTwoText){
    return (dispatch,getState)=>{
        const {authedUser}=getState()
        dispatch(showLoading())
       // const question = formatQuestion({optionOneText,optionTwoText,author:authedUser})       
        return  _saveQuestion({optionOneText,optionTwoText,author:authedUser})
        .then((question)=>{    
               dispatch(addQues(question))
               dispatch(updateUser(question.id,authedUser))
            })       
        .then(dispatch(hideLoading()))
    }}

export function handlePolledQuestion (qid,answer){
    return (dispatch,getState)=>{
        const {authedUser} =getState()
        dispatch(showLoading())
        return _saveQuestionAnswer({authedUser,qid,answer}).then(()=>{
            dispatch(addPoll(answer,qid,authedUser))
            dispatch(userAnswered(answer,qid,authedUser))
        }).then(dispatch(hideLoading()))
    }
}