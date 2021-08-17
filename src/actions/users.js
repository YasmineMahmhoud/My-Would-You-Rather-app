export const RECEIVE_USERS ='RECEIVE_USERS';
export const UPDATE_USER ='UPDATE_USER';
export const POLLED_ANSWER = 'POLLED_ANSWER'
 export function receiveUsers (users){
    return {
        type:RECEIVE_USERS,
        users
    }
}
export function updateUser (id,author){
    return{
        type:UPDATE_USER,
        id,author
    }
}
export function userAnswered (answer,qid,userID){
    return{
        type :POLLED_ANSWER,
        qid,answer,userID
    }
}
