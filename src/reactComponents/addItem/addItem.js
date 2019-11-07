import React from 'react'
import AddItemForm from './addItemForm'
import {addItem} from '../../reduxComponents/actions/listActions'
import {connect} from 'react-redux' //connects the React component to Redux Store
import './style.css';

const AddItem = (props)=>{
    return(
        <div className = 'addItem'>
            <h1>To-Do-List</h1>
            <AddItemForm  onSubmit = {(item)=>{ 
                props.dispatch(addItem(item)) //newly created todo is added to state 
            }}/>
        </div>
    )
}

export default connect()(AddItem)