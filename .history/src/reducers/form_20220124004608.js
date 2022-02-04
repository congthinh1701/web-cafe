
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DATA_FORM':{
            console.log(action.payload);
            return action.payload
        }
        case
        default :
        return state
    }
}

export default formReducer