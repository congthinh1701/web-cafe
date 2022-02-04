export const valueForm =(data)=>{
    return {
        type:'VALUE_FORM',
        payload:data
    }
}

export const errorForm =(data)=>{
    return {
        type:'ERROR_FORM',
        payload:data
    }
}