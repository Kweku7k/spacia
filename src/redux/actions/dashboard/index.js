import actionTypes from "../actionTypes";

export const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER
});

export const saveFilterOptions = filterOptions => ({
    type: actionTypes.SAVE_FILTERS,
    payload: filterOptions
})

export const saveSelectedFilters = selectedFilters => ({
    type: actionTypes.SAVE_SELECTED_FILTERS,
    payload: selectedFilters
});

export const saveCartDetails = cartDetails => ({
    type: actionTypes.SAVE_CART_DETAILS,
    payload: cartDetails
})

export const addEntry = entry => ({
    type: actionTypes.ADD_ENTRY,
    payload: entry
})

export const saveCurrentEntry = currentEntry => ({
    type: actionTypes.SAVE_CURRENT_ENTRY,
    payload: currentEntry
})
