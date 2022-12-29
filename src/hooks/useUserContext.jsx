import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function useUserContext() {
  const context = useContext(UserContext);
  return context;
  
};
