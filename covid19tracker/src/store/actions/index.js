import axios from 'axios';

export const FETCH_TOTAL_START = 'FETCH_TOTAL_START';

export const fetchTotal = () => {
    return dispatch => {
        dispatch({ type: FETCH_TOTAL_START });
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
}
// https://api.covid19api.com/summary
