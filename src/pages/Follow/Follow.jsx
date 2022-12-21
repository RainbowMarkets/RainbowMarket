import React from "react";
import { useLocation } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

export default function Follow() {
  const { user } = useUserContext();
  const location = useLocation();

  console.log(location.pathname);

  fetch(`https://mandarin.api.weniv.co.kr${location.pathname}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div>Follow</div>;
}
