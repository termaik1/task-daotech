import {
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
  REDACTION_WORK,
  PUT_WORK_REQUEST,
  PUT_WORK_SUCCESS,
  PUT_WORK_FAILURE,
  POST_WORK_REQUEST,
  POST_WORK_SUCCESS,
  POST_WORK_FAILURE,
  GET_API_ACTIVE,
  GET_API_DEACTIVATE
} from "./constants";

const initialState = {
  dataWork: null,
  errorDataWork: false,
  redactionWork: null,
  errorPutWork: false,
  errorPostWork: false,
  getApi: true
};

const WorkReducers = {
  [GET_WORK_REQUEST]: (state, action) => ({
    ...state,
    errorDataWork: false
  }),
  [GET_WORK_SUCCESS]: (state, { rest }) => ({
    ...state,
    dataWork: rest,
    errorDataWork: false
  }),
  [GET_WORK_FAILURE]: (state, action) => ({
    ...state,
    errorDataWork: true
  }),
  [REDACTION_WORK]: (state, { id, title, describe, image }) => ({
    ...state,
    redactionWork: { id, title, describe, image }
  }),
  [PUT_WORK_REQUEST]: (state, action) => ({
    ...state,
    errorPutWork: false
  }),
  [PUT_WORK_SUCCESS]: (state, action) => ({
    ...state,
    errorPutWork: false
  }),
  [PUT_WORK_FAILURE]: (state, action) => ({
    ...state,
    errorPutWork: true
  }),
  [POST_WORK_REQUEST]: (state, action) => ({
    ...state,
    errorPostWork: false
  }),
  [POST_WORK_SUCCESS]: (state, action) => ({
    ...state,
    errorPostWork: false
  }),
  [POST_WORK_FAILURE]: (state, action) => ({
    ...state,
    errorPostWork: true
  }),
  [GET_API_ACTIVE]: (state, action) => ({
    ...state,
    getApi: true
  }),
  [GET_API_DEACTIVATE]: (state, action) => ({
    ...state,
    getApi: false
  })
};

const Work = (state = initialState, action) => {
  const reducers = WorkReducers[action.type];

  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default Work;
