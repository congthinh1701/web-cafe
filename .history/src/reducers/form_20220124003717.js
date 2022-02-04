
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DATA_FORM':{
            console.log();
            return action.payload
        }
        default :
        return state
    }
}

export default formReducer