import { createContext, useEffect, useReducer } from "react";

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
      return { user: null, token: null };
    case "TokenReady":
      // 토큰 정보를 업데이트합니다.
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, {
    user: null,
    token: null,
  });

  // 로컬에 토큰 정보가 남아 있으면 가져와서 유저 정보를 갱신합니다.
  const token = localStorage.getItem("token");

  const getProfile = async () => {
    try {
      const response = await fetch(
        "https://mandarin.api.weniv.co.kr/user/myinfo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      dispatch({ type: "LOGIN", payload: responseData.user });
    } catch (error) {
      console.log("에러났어용", error);
    }
  };

  useEffect(() => {
    if (!token) return;
    dispatch({ type: "TokenReady", payload: { token } });
    getProfile(token);
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
