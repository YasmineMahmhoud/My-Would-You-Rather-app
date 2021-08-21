import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {handleAddQuestion} from '../actions/questions'
class NewQuestion extends React.Component{
    state ={
        optionOne:'',
        optionTwo:'',
    }
    addOptionOne =(value)=>{
        this.setState({
            optionOne: value
        })
    }
    addOptiontwo = (value)=>{
        this.setState({
            optionTwo:value
        })
    }

    addQuestion = ()=>{
        const {optionOne,optionTwo}=this.state;
        const{dispatch}=this.props;
        dispatch(handleAddQuestion(optionOne,optionTwo))
        this.setState({
            optionOne:'',
            optionTwo:''
        })
    }
    render(){
        const {optionOne,optionTwo}=this.state;
        return(
            <div className='new-question'> 
                <div className='new-question-bar'>
                   <h1>Create New Question</h1>
                </div>
                <div className='new-question-info'>
                    <h3>Complete the question:</h3>
                    <span>Would you rather...</span>
                    <input
                    type='text'
                    placeholder='Enter Option One Text'
                    className='new-question-input'
                    value = {optionOne}
                    onChange={(e)=>{this.addOptionOne(e.target.value)}}
                    />
                    <span>-----------------------------------OR-----------------------------------</span>
                    <input
                    type='text'
                    placeholder='Enter Option Two Text'
                    className='new-question-input'
                    value = {optionTwo}
                    onChange={(e)=>{this.addOptiontwo(e.target.value)}}
                    />
                    <Link to='/' exact>
                        <button 
                        className='submit' 
                        type='submit' 
                        onClick={this.addQuestion} 
                        disabled={optionOne === '' || optionTwo===''}>
                        Submit</button>
                    </Link>
                </div>
           </div>
        );
    }
}
export default connect()(NewQuestion);