import { useState, useEffect, useContext, useReducer } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { colors, GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import styled from "styled-components";
import SplashPage from "./pages/Splash/SplashPage";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Chat from "./pages/Chat/Chat";
import Follow from "./pages/Follow/Follow";
import { UserContextProvider } from "./context/UserContext";
import useFetch from "./hooks/useFetch";
import PostDetail from "./components/Posts/PostDetail";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
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
  position: relative;
  overflow: hidden;
  background: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 48px;

  &::-webkit-scrollbar {
    width: 1px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.colorMain};
  }
`;

function App() {
  const { getData } = useFetch();

  fetch("https://mandarin.api.weniv.co.kr/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: "05280528@test.com",
        password: "",
      },
    }),
  }).then((res) => console.log(res.ok));

  return (
    <UserContextProvider>
      <Container>
        <GlobalStyle />
        <Aside>
          <img src="https://cdn.pixabay.com/photo/2017/10/05/09/37/equalizer-2818803_960_720.jpg" />
        </Aside>
        <Wrapper>
          <BrowserRouter>
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/splash" element={<SplashPage />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/profile/:accountname" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/postdetail" element={<PostDetail />} />
                <Route
                  path="/follow/:accountname/follower"
                  element={<Follow />}
                ></Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Main>
            <Navbar />
          </BrowserRouter>
        </Wrapper>
      </Container>
    </UserContextProvider>
  );
}
export default App;
