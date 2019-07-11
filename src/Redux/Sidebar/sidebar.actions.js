import { actionTypes } from "./sidebar.actions.type";

export const toggleOpen = ({ open }) => ({
    type : actionTypes.SET_OPEN,
    payload : open,
});