import { actionTypes } from './signin.actions.type';

export const setUsername = ({ username }) =>({
    type: actionTypes.USERNAME_CHANGE,
    payload: username,
});

export const setPassword = ({ password }) =>({
    type: actionTypes.PASSWORD_CHANGE,
    payload: password,
});
