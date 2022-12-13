import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/common/PostWithImg";
import PostOnlyText from "./components/common/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import PostDetail from "./components/Posts/PostDetail";
import MainTopBar from "./components/TopBar/MainTopBar/MainTopBar";
import SearchTopBar from "./components/TopBar/SearchTopBar/SearchTopBar";
import FollowTopBar from "./components/TopBar/FollowTopBar/FollowTopBar";
import CommonTopBar from "./components/TopBar/CommonTopBar/CommonTopBar";
import SaveTopBar from "./components/TopBar/SaveTopBar/SaveTopBar";
import UpLoadTopBar from "./components/TopBar/UpLoadTopBar/UpLoadTopBar";

import Post from "./pages/Post/Post";

function App() {
  const [data, setData] = useState({ post: [] });

  useEffect(() => {
    console.log("useEffect called");
    const url = "https://mandarin.api.weniv.co.kr";
    const reqPath = "/post/testrainbow/userpost";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTdlMGIyMTdhZTY2NjU4MWM1MTBmYSIsImV4cCI6MTY3NjA4MjA0MSwiaWF0IjoxNjcwODk4MDQxfQ.uEOFhf4XIGFUJUVvZcPnsYbVG0fK9z2TLqLy3jU3Xoo";

    fetch(url + reqPath, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data.post[0] || data);
  return (
    <>
      <GlobalStyle />
      {data.post.map((list) => {
        return (
          <>
            <p>{list.author.username}</p>
            <p>{list.content}</p>
          </>
        );
      })}
      <BrowserRouter>
        <CommonTopBar />
        <Profile />
        <PostOnlyText />
        <PostWithImg />
        <PostDetail />
        <Post />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
