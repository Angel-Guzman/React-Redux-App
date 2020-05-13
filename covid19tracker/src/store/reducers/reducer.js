import { FETCH_TOTAL_START, FETCH_TOTAL_SUCCESS } from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    Global: {
        NewConfirmed: null,
        TotalConfirmed: null,
        NewDeaths: null,
        TotalDeaths: null,
        TotalRecovered: null
    }
}

export const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOTAL_START:
            return {
                ...state,
                    isFetching: true
            }
        case FETCH_TOTAL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                Global: action.payload
            }
        default:
            return state;
    }
}