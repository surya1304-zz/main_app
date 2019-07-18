import { createSelector } from "reselect";

const selectDate = state => state.date.date;

export const DateSelector = createSelector(
    [selectDate],
    (date) => date,
);