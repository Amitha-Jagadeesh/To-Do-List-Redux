
export const addItem = (item)=>{
    return{
        type:'ADD_ITEM',
        item
    }
} 

export const updateItem = (id,item)=>{
    return{
        type:'UPDATE_ITEM',
        id,
        item
    }
}

export const toggleItem = (id)=>{
    return{
        type:'TOGGLE_ITEM',
        id
    }
}

export const deleteItem = (id)=>{
    return{
        type:'DELETE_ITEM',
        id
    }
}

export const listAllItems = ()=>{   
    return{
        type:'LIST_ALL_ITEMS'
    }
}

export const clearAllCompletdItems = ()=>{
    return{
        type:'CLEAR_ALL_COMPLETED_ITEMS'
    }
}

export const deleteAllItems = ()=>{
    return{
        type:'DELETE_ALL_ITEMS'
    }
}