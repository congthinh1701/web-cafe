
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'VALUE_FORM':{
        
            return action.payload
        }
        case 'ERROR_FORM':{
           
            return action.payload
        }
        default :
        return state
    }
}

export default formReducer