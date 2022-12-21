import { createContext, useReducer } from "react";

// User라는 이름의 컨텍스트를 생성합니다.
const UserContext = createContext();

const userStateReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // 로그인 시 유저정보를 업데이트합니다.
      return { ...state, user: { ...action.payload } };
    case "LOGOUT":
      // 로그아웃 시 유저정보를 비웁니다.
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, {
    user: null,
  });

  // 토큰에 로그인 정보가 남아 있으면 가져와서 유저 정보를 갱신합니다.
  const token = localStorage.getItem("token");

  if (token) {
    fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "LOGIN", payload: { ...json.user, token } });
      });
  }

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
