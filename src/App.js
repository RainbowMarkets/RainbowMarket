import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/Posts/PostWithImg";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import PostDetail from "./components/Posts/PostDetail";
import MainTopBar from "./components/TopBar/MainTopBar/MainTopBar";
import SearchTopBar from "./components/TopBar/SearchTopBar/SearchTopBar";
import FollowTopBar from "./components/TopBar/FollowTopBar/FollowTopBar";

import Modal from "./components/Posts/Modal";
import Post from "./pages/Post/Post";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
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
