import {FETCH_USERS} from './HomeActions';
const initialState = {
    name: 'Sérgio'
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case 'FETCH_USERS':
            return {name: 'Sérgio'}
        default:
            return state
    }
}