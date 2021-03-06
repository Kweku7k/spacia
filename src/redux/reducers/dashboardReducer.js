import store from "../store";
import actionTypes from "../actions/actionTypes";


export default (state = store, {type, payload}) => {
    switch (type){
        case actionTypes.SAVE_FILTERS:
            return {
                ...state,
                filterOptions: payload
            }

        case actionTypes.SAVE_SELECTED_FILTERS:
            return {
                ...state,
                selectedFilters: payload
            }

        case actionTypes.SAVE_CART_DETAILS:
            return {
                ...state,
                cartDetails: payload
            }

        case actionTypes.ADD_ENTRY:
            return {
                ...state,
                entries: [...state.entries, payload]
            }

        case actionTypes.SAVE_CURRENT_ENTRY:
            return {
                ...state,
                currentEntry: payload
            }

        default:
            return state
    }
}
