
const formReducer= (state =[], action)=> {
    switch(action.type) {
        case 'form_PRODUCT':{
            return action.payload
        }
        default :
        return state
    }
}

export default formReducer