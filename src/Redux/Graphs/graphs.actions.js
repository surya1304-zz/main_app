import { actionTypes } from "./graphs.actions.type";

export const setActual = (actual) =>({
    type : actionTypes.SET_ACTUAL,
    payload : actual,
});

export const setEstimated = (estimated) => ({
    type : actionTypes.SET_ESTIMATED,
    payload: estimated,
});

export const setInvData = (Inv) => ({
    type : actionTypes.SET_INV,
    payload : Inv,
});

export const setKeys = (Keys) => ({
    type: actionTypes.SET_KEYS,
    payload : Keys,
});