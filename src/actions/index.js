import { FETCH_USERS } from './types';

import axios from 'axios';

export function fetchUsers(){
    const ROOT_URL = 'https://jsonplaceholder.typicode.com/users';

    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_USERS,
        payload: request
    }
}