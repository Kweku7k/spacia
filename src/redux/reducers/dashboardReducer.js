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

        default:
            return state
    }
}
