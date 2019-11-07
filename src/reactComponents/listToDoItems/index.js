import React from 'react'
import {connect} from 'react-redux'
import {updateItem,toggleItem,deleteItem} from '../../reduxComponents/actions/listActions'
import './style.css'

class DisplayItem extends React.Component{
    constructor(props){        
        super(props)
        this.state = {
            toDo: props.todolist.toDo,
            editing: false
        }
        this.handleEditing = this.handleEditing.bind(this)
    }

    handleEditing(event){ // resets the editing property thus by allowing to edit the todo
        this.setState({
            editing:true
        })
    }

    handleInputChange = (event)=>{      
        this.setState({
            toDo:event.target.value
        })
    }    
    
    render(){

        var todolist = this.props.todolist
        var viewStyle = {};
        var editStyle = {};

        if(this.state.editing){
            viewStyle.display = 'none'
        }else{
            editStyle.display = 'none'
        }
        
        return(            
                    
            <li className = 'list' key = {todolist.id} > 

                {/*This block is used to display the list  in viewmode but on doubleclicking the label,
                the edit mode truns on*/}

                <div  className = 'viewStyle' style = {viewStyle} onDoubleClick = {this.handleEditing}>   

                    <input type = 'checkbox' className = 'checkbox' checked = {todolist.completed ? true: false} 
                        onChange = {()=>{                                                                                         
                        this.props.dispatch(toggleItem(todolist.id)) //on toggling the checkbox action is dispatched to reducer
                        //to mark the todo as completd/!completed
                        this.props.handleChange() //resets the flag
                    }}/>

                    <label id = 'item'>{todolist.toDo}</label> 

                    <button className= 'delete' onClick = {()=>{                            
                        this.props.dispatch(deleteItem(todolist.id))
                        this.props.handleChange()
                    }}>x</button>

                </div>

                {/*This block is used to convert the list  into edit mode */}

                <input type = 'text' className = 'editStyle' style = {editStyle} value = {this.state.toDo} 
                    onKeyDown = {(event)=>{  

                    if(event.keyCode === 13){ // 13 is the key which gets activated on pressing enter, from keyboard
                        this.setState({
                            editing:false,
                        })  
                        let updatedToDo = {                            
                            id:todolist.id,
                            toDo:this.state.toDo,
                            completed:todolist.completed,
                            flag:todolist.flag
                        }   
                        this.props.dispatch(updateItem(todolist.id,updatedToDo)) // action is sent along with todo's id inorder to update the state in reducer                        
                        this.props.handleChange()                       
                    }
                }} onChange= {this.handleInputChange}/>                                      
            </li>
        )
        
    }
}

 export default connect()(DisplayItem)

