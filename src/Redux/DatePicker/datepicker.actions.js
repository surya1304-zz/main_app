import { actionTypes } from "./datepicker.actiontypes";

export const setDate = (date) =>({
    type : actionTypes.SET_DATE,
    payload : date,
});