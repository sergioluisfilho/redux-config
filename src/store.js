import {createStore} from 'redux';
import HomeReducer from './Screens/Home/HomeReducer';


const store = createStore(HomeReducer);

export default store;