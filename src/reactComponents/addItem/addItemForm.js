import React from 'react'
import uuid from 'uniqid'

class AddItemForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            id: uuid(), //creates unique id for every todo created
            toDo: '',
            completed:false
        }        
    }

    handleInputChange = (event)=>{
        this.setState({
            toDo:event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        let formData={
            id:uuid(),
            toDo:this.state.toDo,   
            completed:this.state.completed    
        }
        this.props.onSubmit(formData) //formdata is sent to addItem componnet in order to disptach to the reducer
        this.setState({
            toDo:''
        })              
    }

    render(){
        return(
            <div className = 'addItemForm'>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' className = 'text' value = {this.state.toDo} name = 'todo' 
                        placeholder = 'What needs to be Done?'
                        onChange = {this.handleInputChange} 
                    />
                </form>
            </div>
        )
    }
} 

export default AddItemForm