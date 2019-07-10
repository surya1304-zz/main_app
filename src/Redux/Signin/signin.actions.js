import { actionTypes } from './signin.actions.type';

export const setUsername = ({ username }) =>({
    type: actionTypes.USERNAME_CHANGE,
    payload: username,
});

export const setPassword = ({ password }) =>({
    type: actionTypes.PASSWORD_CHANGE,
    payload: password,
});

export const setCredentials = ({ fname,role,plants }) => ({
    type : actionTypes.RESPONSE_RECEIVED,
    payload : {
        fname : fname,
        role : role,
        plants : plants
    }
});