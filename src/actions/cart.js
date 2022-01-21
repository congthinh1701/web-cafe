export const addCartProduct =(detail)=>{
    return {
        type:'ADD_CART',
        payload:detail
    }
}

export const incCartProduct =(detail)=>{
    return {
        type:'INC_CART',
        payload:detail
    }
}
export const decCartProduct =(detail)=>{
    return {
        type:'DEC_CART',
        payload:detail
    }
}
export const deleteCartProduct =(detail)=>{
    return {
        type:'DELETE_CART',
        payload:detail
    }
}