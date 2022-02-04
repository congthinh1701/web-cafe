
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'VALUE_FORM':{
            console.log(action.payload);
            return action.payload
        }
        case 'ERROR_FORM':{
            console.log(action.payload);
            return action.payload
        }
        default :
        return state
    }
}

export default formReducer