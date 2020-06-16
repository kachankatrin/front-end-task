import { DATA_LOADED, CHANGE_LOADER_STATUS, CHANGE_RADIO, OPEN_FILTERS } from '../actions/Actions';

const initStore = {
    countries: [],
    loader: false,
    text: '',
    display: {'display': 'none'},
    query: 'all',
    region: '',
    areFiltersOpen: false
}
export const mainReducer = (initialState=initStore, action) => {
    if (action.type === DATA_LOADED) {
        return {
            ...initialState,
            countries: action.payload,
            loader: false,
        }
    }
    if (action.type === CHANGE_LOADER_STATUS) {
        return {
            ...initialState,
            loader: action.payload.show,
            text: action.payload.text
        }
    }
    if (action.type === CHANGE_RADIO) {
        return {
            ...initialState,
            [action.payload.key]: action.payload.value,
            query: 'region'
        }
    }
    if (action.type === OPEN_FILTERS) {
        return {
            ...initialState,
            areFiltersOpen: !initialState.areFiltersOpen,
            display: initialState.areFiltersOpen ? {'display': 'block'} : {'display': 'none'}
        }
    }
    return initialState
}