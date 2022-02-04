
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'VALUE_FORM':{
            console.log(action.payload);
            return action.payload
        }
        case 'ERROR_FORM':{
            
        }
        default :
        return state
    }
}

export default formReducer