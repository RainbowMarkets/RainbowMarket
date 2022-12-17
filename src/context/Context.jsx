import { createContext } from "react";

export const Auth = createContext(null);

export const url = "https://mandarin.api.weniv.co.kr";

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, login: "login" };

    default:
      return state;
  }
};
