import {
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
  PUT_WORK_REQUEST,
  PUT_WORK_SUCCESS,
  PUT_WORK_FAILURE,
  POST_WORK_REQUEST,
  POST_WORK_SUCCESS,
  POST_WORK_FAILURE,
  DELETE_WORK_REQUEST,
  DELETE_WORK_SUCCESS,
  DELETE_WORK_FAILURE,
  REDACTION_WORK,
  GET_API_ACTIVE,
  GET_API_DEACTIVATE
} from "./constants";

export const getWorkAPI = () => ({
  type: {
    inquiry: GET_WORK_REQUEST,
    success: GET_WORK_SUCCESS,
    failure: GET_WORK_FAILURE
  },
  request: {
    method: "get",
    path: "https://5e5f623ab5c43c0014ef984c.mockapi.io/ad",
    payload: {}
  }
});

export const putWorkAPI = (id, title, description, image) => ({
  type: {
    inquiry: PUT_WORK_REQUEST,
    success: PUT_WORK_SUCCESS,
    failure: PUT_WORK_FAILURE
  },
  request: {
    method: "put",
    path: `https://5e5f623ab5c43c0014ef984c.mockapi.io/ad/${id}`,
    payload: { title, description, image }
  }
});

export const redactionWork = (id, title, describe, image) => ({
  type: REDACTION_WORK,
  id,
  title,
  describe,
  image
});
export const postWorkAPI = (title, description, typeImage) => ({
  type: {
    inquiry: POST_WORK_REQUEST,
    success: POST_WORK_SUCCESS,
    failure: POST_WORK_FAILURE
  },
  request: {
    method: "post",
    path: `https://5e5f623ab5c43c0014ef984c.mockapi.io/ad`,
    payload: {
      title,
      description,
      image: `http://lorempixel.com/640/480/${typeImage}`
    }
  }
});

export const deleteWorkAPI = id => ({
  type: {
    inquiry: DELETE_WORK_REQUEST,
    success: DELETE_WORK_SUCCESS,
    failure: DELETE_WORK_FAILURE
  },
  request: {
    method: "delete",
    path: `https://5e5f623ab5c43c0014ef984c.mockapi.io/ad/${id}`,
    payload: {}
  }
});

export const getApiActive = () => ({
  type: GET_API_ACTIVE
});

export const getApiDeactivate = () => ({
  type: GET_API_DEACTIVATE
});
