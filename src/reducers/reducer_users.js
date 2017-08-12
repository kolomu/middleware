import { FETCH_USERS } from '../actions/types';

// if FETCH_USERS is going to be called we have a payload with users (Assumption)

export default function(state = [], action) {
    switch(action.type){
        case FETCH_USERS:
          return [ ...state, ...action.payload];
    }

    return state;
}