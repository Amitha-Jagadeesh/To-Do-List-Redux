import {createStore,combineReducers} from  'redux';
import listItemsReducer from '../reducers/listItemsReducer'

const ConfigureStore = ()=>{
    const store = createStore(combineReducers({
        todoLists:listItemsReducer
    }))
    return store
}

export default ConfigureStore