import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './HomeActions'

const USER_ID = 1;

const Home = ({name, fetchUser}) => {
    useEffect(() => {
        fetchUser(USER_ID);
    }, [])
    return <h1>{name}</h1>
}

const mapStateToProps = (state) => {
    console.log('*** Home.mapStateToProps', state)
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps, {fetchUser})(Home);