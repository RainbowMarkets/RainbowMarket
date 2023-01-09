import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserList from "../../components/common/UserList/UserList";
import useFetch from "../../hooks/useFetch";
import { OrderList } from "./styledFollow";
import FollowTopbar from "../../components/TopBar/FollowTopBar/FollowTopBar";

export default function Follow() {
  const location = useLocation();
  const { getData } = useFetch();
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    try {
      getData(location.pathname + "?limit=999")
        .then((res) => setFollows(res))
        .catch((err) => console.log("에러요", err));
    } catch (error) {
      console.log("에러요", error);
    }
  }, []);

  return (
    <>
      <FollowTopbar />
      <OrderList>
        {follows.map((data) => {
          return <UserList key={data._id} width="50px" {...data} pagefollow />;
        })}
      </OrderList>
    </>
  );
}
