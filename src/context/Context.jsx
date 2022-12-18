import {
  getAllByPlaceholderText,
  getDefaultNormalizer,
} from "@testing-library/react";
import { createContext, useReducer } from "react";

export const Auth = createContext(null);

export const url = "https://mandarin.api.weniv.co.kr";

// 유저 정보 상태 관리가 정말 필요할까?
export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};

export const getData = async (req, callback, token) => {
  fetch(url + req, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => callback(res));
};

export const postData = async (req, body, callback, token) => {
  fetch(url + req, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => callback(res));
};

export const putData = async (req, body, token) => {
  fetch(url + req, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

// const initialState = {
//   user: "none",
//   isPending: "false",
// };

// const [userState, dispatch] = useReducer(reducer, initialState);
