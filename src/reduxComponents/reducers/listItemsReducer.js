let listItemsInitialState=[]

const listItemsReducer = (state=listItemsInitialState,action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return[...state,action.item]

        case 'UPDATE_ITEM' :
            return(state.map(item=>{
                if(item.id === action.id){
                    return{...item,...action.item}
                }else{
                    return item
                }
            })) 
            
        case 'LIST_ALL_ITEMS':
            return state
        
        case 'TOGGLE_ITEM':
            return(state.map(item=>{
                return item.id === action.id? {...item,completed : !item.completed} : item
            }))

        case 'DELETE_ITEM':
            return state.filter(item=>item.id !== action.id) 

        case 'CLEAR_ALL_COMPLETED_ITEMS':
            return state.filter(item=>item.completed === false)

        case 'DELETE_ALL_ITEMS':
            return state = listItemsInitialState

        default:
            return state;
    }
}

export default listItemsReducer