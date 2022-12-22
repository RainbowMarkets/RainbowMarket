import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserList from "../../components/common/UserList/UserList";
import SearchTopBar from "../../components/TopBar/SearchTopBar/SearchTopBar";
import useUserContext from "../../hooks/useUserContext";

export default function Follow() {
  // const { user } = useUserContext();
  const token = localStorage.getItem("token");
  const [follows, setFollows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://mandarin.api.weniv.co.kr${location.pathname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setFollows(res));
  }, []);

  console.log(follows);
  return (
    <>
      <SearchTopBar />
      <ul>
        {follows.map((data, i) => {
          return <UserList key={i} width="50px" {...data} />;
        })}
      </ul>
    </>
  );
}
