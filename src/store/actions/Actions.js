import { api } from '../../utils';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_LOADER_STATUS = 'CHANGE_LOADER_STATUS';
export const CHANGE_RADIO = 'CHANGE_RADIO';
export const OPEN_FILTERS = 'OPEN_FILTERS';

export const getAllCountries = (query) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_LOADER_STATUS, payload: { show: true, text: 'Waiting' } });
        const data = await fetch(`${api}${query}`);
        console.log(data)
        const json = await data.json();
        console.log(json)
        const res = await dispatch({ type: DATA_LOADED, payload: json });
        console.log(res)
        dispatch({ type: CHANGE_LOADER_STATUS, payload: { show: false } });
    }
}
export const handleRadio = (e, key) => {
    return {
        type: CHANGE_RADIO,
        payload: { value: e.target.value, key }
    }
}
export const handleFiltersOpen = () => {
    return {
        type: OPEN_FILTERS
    }
}