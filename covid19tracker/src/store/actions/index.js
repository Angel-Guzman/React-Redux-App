import axios from 'axios';

export const FETCH_TOTAL_START = 'FETCH_TOTAL_START';
export const FETCH_TOTAL_SUCCESS = 'FETCH_TOTAL_SUCCESS';
export const FETCH_TOTAL_FAILURE = 'FETCH_TOTAL_FAILURE';

export const fetchTotal = () => {
    return dispatch => {
        dispatch({ type: FETCH_TOTAL_START });
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            // console.log(res);
            dispatch({ type: FETCH_TOTAL_SUCCESS, payload: res.data.Countries[176]})
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: FETCH_TOTAL_FAILURE, payload: err})
        });
    }
}
// https://api.covid19api.com/summary
