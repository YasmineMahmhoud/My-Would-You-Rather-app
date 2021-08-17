import { RECEIVE_USERS,UPDATE_USER,POLLED_ANSWER } from "../actions/users";

export default function users(state={},action){
    switch(action.type){
        case RECEIVE_USERS :
            return {...state,...action.users}

        case UPDATE_USER:
            return{
                ...state,[action.author]:{
                    ...state[action.author],
                    questions:state[action.author].questions.concat([action.id])
                }
            }
        case POLLED_ANSWER :
            return{
                ...state,
                      [action.userID]: {
                    ...state[action.userID],
                          answers: {
                         ...state[action.userID].answers,
                     [action.qid]: action.answer 
                     }
                    }
                }
        default :
            return state
    }
}