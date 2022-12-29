import { Container, Aside, Wrapper, Main } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import PostEdit from "./pages/Post/PostEdit";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Chat from "./pages/Chat/Chat";
import Follow from "./pages/Follow/Follow";
import { UserContextProvider } from "./context/UserContext";
import PostDetail from "./components/Posts/PostDetail";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import MyProfile from "./pages/Profile/MyProfile";
import Join from "./pages/Join/Join";
import { useEffect, useState } from "react";
import Splash from "./components/Splash/Splash";
import Product from "./pages/Product/Product";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Login from "./components/common/Login/Login";
import ProductEdit from "./pages/Product/ProductEdit";
import SetProfile from "./components/common/SetProfile/SetProfile";

// 잠시 1200 -> 100으로 변경
function App() {
  // 어플리케이션 최초 접속 시 Splash 화면 띄워줌
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 100);
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
                <Route exact path="/profile" element={<MyProfile />} />
                <Route path="/profile/:accountname" element={<Profile />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route path="/setprofile" element={<SetProfile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/chatroom" element={<ChatRoom />} />
                <Route expact path="/post" element={<Post />} />
                <Route path="/post/:post_id" element={<PostDetail />} />
                <Route path="/post/:post_id/edit" element={<PostEdit />} />
                <Route path="/join" element={<Join />} />
                <Route path="/post/:post_id/edit" element={<PostEdit />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/profile/:accountname/follower"
                  element={<Follow />}
                />
                <Route
                  path="/profile/:accountname/following"
                  element={<Follow />}
                />
                <Route exact path="/product" element={<Product />} />
                <Route path="/product/:productid" element={<ProductEdit />} />
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
