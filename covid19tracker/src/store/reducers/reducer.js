import { FETCH_TOTAL_START } from '../actions';

const initialState = {
    Global: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0
    }
}

export const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOTAL_START:
            return {
                ...state,
                Global: {
                    NewConfirmed: action.payload
                }
            }
        default:
            return state;
    }
}