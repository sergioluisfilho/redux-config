import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {doGetRequest} from 'Helpers/apiHelper'

const Home = ({name}) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        doGetRequest('/people/1').then((response) => {
            //console.log(response)
            setUser(response)
        }).catch(console.error).finally(() =>{console.log('finally')});
    }, [])

    if (!user) return <h1>{name}</h1>

    return (
       <h1>{user.name}</h1>
    )

}

const mapStateToProps = (state) => {
    console.log('*** Home.mapStateToProps', state)
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps)(Home);