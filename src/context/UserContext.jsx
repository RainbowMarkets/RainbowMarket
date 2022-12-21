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

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
