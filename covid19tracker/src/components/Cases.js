import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTotal } from '../store/actions';

const Cases = ({isFetching, fetchTotal, Global }) => {

    useEffect(() => {
        fetchTotal();
    }, [fetchTotal]);

    return (
        <main>
            <h1>COVID19 USA SUMMARY:</h1>
            {isFetching && <h2>Fetching data...</h2>}
            {!isFetching && Global && (
                <div>
                    <h2>New Confirmed Cases: {Global.NewConfirmed} </h2>
                    <h2>Total Confirmed Cases: {Global.TotalConfirmed} </h2>
                    <h2>Total Deaths: {Global.TotalDeaths} </h2>
                    <h2>Total Recovered: {Global.TotalRecovered} </h2>
                </div>
            )}
        </main>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        isFetching: state.cases.isFetching,
        Global: {
            NewConfirmed: state.cases.Global.NewConfirmed,
            TotalConfirmed: state.cases.Global.TotalConfirmed,
            NewDeaths: state.cases.Global.NewDeaths,
            TotalDeaths: state.cases.Global.TotalDeaths,
            TotalRecovered: state.cases.Global.TotalRecovered
        }
    }
}

export default connect(
    mapStateToProps,
    { fetchTotal }
)(Cases);