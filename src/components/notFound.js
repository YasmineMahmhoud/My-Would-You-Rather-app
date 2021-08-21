import React from 'react'
import {Link} from 'react-router-dom'
class NotFound extends React.Component {
    render(){
        return(
            <div className='center'>
            <h1>404 Error</h1>
            <Link to='/'>
             <button className='home'> back home</button>
            </Link>
            </div>
        )
    }
 
}
export default NotFound;