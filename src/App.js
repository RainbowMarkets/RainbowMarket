import { Container, Aside, Wrapper, Main } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Chat from "./pages/Chat/Chat";
import Follow from "./pages/Follow/Follow";
import PostDetail from "./components/Posts/PostDetail";
import ProfileEdit from "./pages/Profile/ProfileEdit/ProfileEdit";
import JoinWithEmail from "./components/Join/JoinWithEmail/JoinWithEmail";
import { useEffect, useState } from "react";
import Splash from "./components/Splash/Splash";
import useUserContext from "./hooks/useUserContext";

function App() {
  const { dispatch } = useUserContext();

  // 토큰에 로그인 정보가 남아 있으면 가져와서 유저 정보를 갱신합니다.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;
    fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "LOGIN", payload: json.user });
      });
  }, []);

  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 1200);
  });

  return (
    <Container>
      <GlobalStyle />
      <Aside>
        <img src="https://cdn.pixabay.com/photo/2017/10/05/09/37/equalizer-2818803_960_720.jpg" />
      </Aside>
      <Wrapper>
        {isFirst ? (
          <Splash />
        ) : (
          <BrowserRouter>
            <Main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route path="/profile/:accountname" element={<ProfileEdit />} />
                <Route path="/search" element={<Search />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/postdetail" element={<PostDetail />} />
                <Route path="/join" element={<JoinWithEmail />} />
                <Route
                  path="/profile/:accountname/follower"
                  element={<Follow />}
                />
                <Route
                  path="/profile/:accountname/following"
                  element={<Follow />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Main>
            <Navbar />
          </BrowserRouter>
        )}
      </Wrapper>
    </Container>
  );
}
export default App;
