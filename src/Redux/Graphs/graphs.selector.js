import { createSelector } from "reselect";

const selectActual = state => state.graph.actual;
const selectINV = state => state.graph.inv;
const selectEST = state => state.graph.est;
const selectKeys = state => state.graph.keys;

export const selectActualPR = createSelector(
    [selectActual],
    (actual) => actual.PR,
);

export const selectGridCorrectedPR = createSelector(
    [selectActual],
    (actual) => actual.gridCorrectedPR,
);

export const selectdayExport = createSelector(
    [selectActual],
    (actual) => actual.dayExport,
);

export const selectcorrInsolation = createSelector(
    [selectActual],
    (actual) => actual.corrInsolation,
);

export const selectgridAvail = createSelector(
    [selectActual],
    (actual) => actual.gridAvail,
);

export const selectplantAvail = createSelector(
    [selectActual],
    (actual) => actual.plantAvail,
);

export const selectinvdata = createSelector(
    [selectINV],
    (a) => a,
);

export const selectestExport = createSelector(
    [selectEST],
    (est) => est.export,
);

export const selectestInsolation = createSelector(
    [selectEST],
    (est) => est.insolation,
);

export const selectKey = createSelector(
    [selectKeys],
    (keys) => keys,
);
