import React from 'react'
import {connect} from 'react-redux'
import DisplayItem from './index'
import {listAllItems,deleteAllItems,clearAllCompletdItems} from '../../reduxComponents/actions/listActions'

class  ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            all:[],
            active:[],
            completed:[],
            flag:0 
        }
    }

    handleActive = (event)=>{ //used to sort list when active button is clicked
        let activeItems = this.props.todoLists.filter(todolist=>todolist.completed === false)
        this.setState({
            active: activeItems,
            flag:1
        })
    }

    handleCompleted = (event)=>{
        let completedItems = this.props.todoLists.filter(todolist=>todolist.completed === true)
        this.setState({
            completed: completedItems,
            flag:2
        })
    }

    handleAll = (event)=>{
        let allItems = this.props.todoLists
        this.setState({
            all: allItems,
            flag:3
        })
    }

    handleChange = (event)=>{ //reset the flag back to 0 
        this.setState({
            flag:0
        })
    }

    render(){

        var footer = {};
        if(this.props.todoLists.length === 0 ){ //footer part to be displayed only if list has todos
            footer.display = 'none'
        }

        return(
            <div className = 'displayarea'>
                <ul>
                    {this.state.flag===1?               
                        this.state.active.map(todolist=>{ //This part displays list based on options(i,e active,completed..etc)
                            return <DisplayItem key = {todolist.id} todolist = {todolist} handleChange = {this.handleChange}/>
                        }): this.state.flag===2?
                        this.state.completed.map(todolist=>{
                            return <DisplayItem key = {todolist.id} todolist = {todolist} handleChange = {this.handleChange}/>
                        }): this.state.flag ===3?
                        this.state.all.map(todolist=>{
                            return <DisplayItem key = {todolist.id} todolist = {todolist} handleChange = {this.handleChange}/>
                        }):
                        this.props.todoLists.map(todolist=>{
                            return <DisplayItem key = {todolist.id} todolist = {todolist} handleChange = {this.handleChange}/>
                        })
                    }
                </ul>              
                <div className = 'footer' style = {footer}> {/*This is footer section */}

                    <p>{this.props.todoLists.length} Items left</p>

                    <button onClick = {()=>{                        
                        this.props.dispatch(listAllItems())
                        this.handleAll() //resets flag inorder to display all todos despite of active or completed
                    }}>All</button>  

                    <button onClick = {this.handleActive}>Active</button>  {/* displays only active todos*/}

                    <button onClick = {this.handleCompleted}>Completed</button>  {/* displays only active todos*/}            
                    <button onClick = {()=>{                        
                        this.props.dispatch(clearAllCompletdItems()) // dispatch action to  reducer to  clear all completed todos
                        this.handleChange() //rests the flag to 0 
                    }}>Clear Completed</button>

                    <button onClick = {()=>{                        
                        this.props.dispatch(deleteAllItems()) // dispatch action to  reducer to  clear all todos
                        this.handleChange()                   
                    }}>Clear All Tasks</button>
                </div>            
            </div>
        )
    }
}

const mapStateToProps = (state)=>{ //retreives state containing array of todos from reducer to display within the list 
    return{
        todoLists: state.todoLists 
    }
}

export default connect(mapStateToProps)(ToDoList)
