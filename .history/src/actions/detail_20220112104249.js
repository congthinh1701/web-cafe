
export const detailProduct =(detail)=>{
    console.log(detail);
    return {
        type:'DETAIL_PRODUCT',
        payload:detail
    }
}