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
import styled from "styled-components";
import SplashPage from "./pages/Splash/SplashPage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  overflow: hidden;
`;

const Aside = styled.aside`
  width: 390px;
  background: white;

  img {
    width: 100%;
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 440px;
  min-width: 390px;
  height: 100vh;
  background: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`;

const Main = styled.main`
  height: 85%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

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
    <Container>
      <GlobalStyle />
      <Aside>
        <img src="https://cdn.pixabay.com/photo/2012/04/10/16/54/rainbow-26389_960_720.png" />
      </Aside>
      {/* {data.post.map((list) => {
        return (
          <>
            <p>{list.author.username}</p>
            <p>{list.content}</p>
          </>
        );
      })} */}

      <Wrapper>
        <BrowserRouter>
          <CommonTopBar />
          <Main>
            <SplashPage />
            <Profile />
            <PostOnlyText />
            <PostWithImg />
            <PostDetail />
            <Post />
          </Main>
          <Navbar />
        </BrowserRouter>
      </Wrapper>
    </Container>
  );
}
export default App;
