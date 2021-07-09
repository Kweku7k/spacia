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
})
