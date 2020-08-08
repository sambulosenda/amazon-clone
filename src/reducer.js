export const initialState = {
    basket: [
        {
            id: "1213223",
            title: "snsns",
            price: 13123, 
            rating: 5,
            image: "https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
        },

        {
            id: "12132d23",
            title: "snsns",
            price: 13123, 
            rating: 5,
            image: "https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
        }
    ],
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            break;
            case "REMOVE_FROM_BASKET":
                //Logic for Removing item from basket
    
                //clone the existing basket
                let newBasket = [...state.basket];
    
                //check to see if product exists
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
    
                if(index >= 0) {
                    //if item exists in basket, remove it...
                    newBasket.splice(index, 1); //goto that index and cut it
                } else {
                    console.warn (
                        `Can't remove product (id: ${action.id}) as its not in the basket`
                    );
                }
    
                //return all the previous state but change the basket state to be the new basket
                return { 
                    ...state, 
                    basket: newBasket 
                };
    
            default:
                return state;
        }
    }
    
    export default reducer;