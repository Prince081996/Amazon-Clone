export const initialState = { 
    basket:[],
    user:null
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0) 

function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case 'ADD TO BASKET':
            //Logic to add basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            } 
        case 'REMOVE FROM BASKET':
            //Logic for removing from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0){
                //item exist in basket remove it
                newBasket.splice(index,1)
            }else {
                console.warn(`Can't remove product (id:${action.id})`)
            }
            
            return { 
                ...state,
                basket:newBasket 
                };
        
        default:
            return state;    
    }
}

export default reducer