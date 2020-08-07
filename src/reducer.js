export const initialState = {
    basket: [
        {
            id: "1213223",
            title: "snsns",
            price: 13123, 
            rating: 5,
            image: "https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
        }
    ],
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            break;
        case 'REMOVE_FROM_BASKET':
            return { state }
            break;
        default:
            return state;

    }
}


export default reducer;