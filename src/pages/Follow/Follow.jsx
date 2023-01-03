import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserList from "../../components/common/UserList/UserList";
import useFetch from "../../hooks/useFetch";
import useUserContext from "../../hooks/useUserContext";
import { OrderList } from "./styledFollow";
import FollowTopbar from "../../components/TopBar/FollowTopBar/FollowTopBar";

export default function Follow() {
  const location = useLocation();
  const { user } = useUserContext();
  const { getData } = useFetch();
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    if (!user) return;
    getData(location.pathname + "?limit=999", setFollows, user.token).catch(
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      <FollowTopbar />
      <OrderList>
        {follows.map((data, i) => {
          return <UserList key={i} width="50px" {...data} pagefollow />;
        })}
      </OrderList>
    </>
  );
}
