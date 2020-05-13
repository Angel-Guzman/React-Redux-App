import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTotal } from '../store/actions';

const Cases = ({fetchTotal}) => {

    useEffect(() => {
        fetchTotal();
    }, [fetchTotal]);

    return (
        <div>
            <h1>COVID19 GLOBAL SUMMARY:</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        NewConfirmed: state.NewConfirmed
    }
}

export default connect(
    mapStateToProps,
    { fetchTotal }
)(Cases);