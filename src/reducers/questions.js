import { ADD_QUES, RECEIVE_QUES,ADD_POLL } from "../actions/questions";
export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUES :
           return {...state,
                ...action.questions}
        case ADD_QUES :
            return{
                ...state,
                 [action.question.id]:action.question
            }
        case ADD_POLL :
            return {
                ...state,[action.qid]:{
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.qid][action.answer],
                        votes :state[action.qid][action.answer].votes.concat([action.userID])
                    }
                }
            }
        default :
           return state
    }
        
}