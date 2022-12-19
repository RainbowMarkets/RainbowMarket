import React from "react"
import PostDetail from "../../../components/Posts/PostDetail";
import Post from "../../../components/common/PostFormat/PostWithImg/PostWithImg";
import MainTopBar from "../../../components/TopBar/MainTopBar/MainTopBar";

export default function IsHaveFeed() {

  fetch("https://mandarin.api.weniv.co.kr/post/feed", {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTdlMGZhMTdhZTY2NjU4MWM1MTFiYSIsImV4cCI6MTY3NjA4MjA0MSwiaWF0IjoxNjcwODk4MDQxfQ.y2ys8ktyaazFH6JvlIl0mctUbuSQAlggHFyb5DIzCqg`,
      "Content-type": "application/json",
    },
  })
  .then((res) => {
    console.log(res.ok)
    console.log(JSON.parse())
  });

  return (
    <>
      <MainTopBar/>
      <Post />
    </>

  )
}