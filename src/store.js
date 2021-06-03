import {createStore} from 'redux';

 const reducer = () => {
    return {name: 'Sérgio'}
 }

const store = createStore(reducer);

export default store;