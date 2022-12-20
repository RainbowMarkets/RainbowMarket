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
import { UserContextProvider } from "./context/UserContext";
import PostDetail from "./components/Posts/PostDetail";
import ProfileEdit from "./pages/Profile/ProfileEdit/ProfileEdit";
import JoinWithEmail from "./components/Join/JoinWithEmail/JoinWithEmail";
import { useEffect, useState } from "react";
import Splash from "./components/Splash/Splash";

function App() {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 1200);
  });

  return (
    <UserContextProvider>
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
                  <Route
                    path="/profile/:accountname"
                    element={<ProfileEdit />}
                  />
                  <Route path="/search" element={<Search />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/post" element={<Post />} />
                  <Route path="/post/postdetail" element={<PostDetail />} />
                  <Route path="/join" element={<JoinWithEmail />} />
                  <Route
                    path="/profile/:accountname/follower"
                    element={<Follow />}
                  ></Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Main>
              <Navbar />
            </BrowserRouter>
          )}
        </Wrapper>
      </Container>
    </UserContextProvider>
  );
}
export default App;
