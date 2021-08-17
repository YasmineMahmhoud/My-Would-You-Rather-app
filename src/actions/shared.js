import { _getQuestions,_getUsers } from "../_DATA";
import { hideLoading, showLoading } from "react-redux-loading";
import { receiveQues } from "./questions";
import { receiveUsers } from "./users";
import { setUser } from "./authedUser";
export const AUTHED_ID ='LOGGOUT';
export function handleIntialData(){
    return (dispatch) =>{
        dispatch(showLoading())
        return (
            Promise.all([_getQuestions(),_getUsers()]).then(([questions,users])=>{
                dispatch(receiveQues(questions))
                dispatch(receiveUsers(users))
                dispatch(setUser(AUTHED_ID))
                dispatch(hideLoading())
            }))
        

    }


}