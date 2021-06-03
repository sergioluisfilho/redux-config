import {FETCH_USERS} from './HomeActions';

const initialState = {
    user: null,
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    console.log('***HomeReducer.payload', payload);

    switch(type) {
        case 'FETCH_USERS':
            return {user: payload};
        default:
            return state
    }
}