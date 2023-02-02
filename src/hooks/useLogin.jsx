import { useState } from "react";
import useFetch from "./useFetch";
import useUserContext from "./useUserContext";

export default function useLogin() {
  const { dispatch } = useUserContext();
  const { postData } = useFetch();
  const [isPending, setIsPending] = useState(false);

  const login = (email, password, messageHandler, ref) => {
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    setIsPending(true);
    postData("/user/login", loginData).then((response) => {
      if (response?.user) {
        localStorage.setItem("token", response.user.token);
        dispatch({
          type: "TokenReady",
          payload: { token: response.user.token },
        });
        dispatch({ type: "LOGIN", payload: response.user });
        setIsPending(false);
      } else {
        setIsPending(false);
        messageHandler(response.message);
        ref.current.focus();
      }
    });
  };

  return { isPending, login };
}
