import { createContext, useReducer } from "react";

// User라는 이름의 컨텍스트를 생성합니다.
const UserContext = createContext(null);

// user 상태를 변경해주는 리듀서 함수
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
  // 토큰에 로그인 정보가 남아 있으면 가져와서 유저 정보를 갱신합니다.
  const accountname = localStorage.getItem("aName"),
    username = localStorage.getItem("uName"),
    image = localStorage.getItem("image"),
    token = localStorage.getItem("token"),
    _id = localStorage.getItem("id");

  const userData = token ? { accountname, username, image, token, _id } : null;

  const [state, dispatch] = useReducer(userStateReducer, {
    user: userData,
  });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
