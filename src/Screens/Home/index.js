import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {doGetRequest} from 'Helpers/apiHelper'

const Home = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        doGetRequest('/people/1').then((response) => {
            console.log(response)
            setUser(response)
        }).catch(console.error).finally(() =>{console.log('finally')});
    }, [])

    if (!user) return <h1>Home</h1>

    return (
       <h1>{user.name}</h1>
    )
}
export default Home;