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
export const deletedCartProduct =(detail)=>{
    return {
        type:'DELETED_CART',
        payload:detail
    }
}