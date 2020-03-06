import { createSelector } from "reselect";

const selectorDataWork = store => store.Work.dataWork;

export const superWork = createSelector(selectorDataWork, data => data);

export const redactionWork = store => store.Work.redactionWork;

export const getApi = store => store.Work.getApi;

export const getErrorDataWork = store => store.Work.errorDataWork;

export const getErrorPutWork = store => store.Work.errorPutWork;

export const getErrorPostWork = store => store.Work.errorPostWork;
