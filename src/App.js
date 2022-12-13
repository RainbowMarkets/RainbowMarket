import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/Posts/PostWithImg";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import PostDetail from "./components/Posts/PostDetail";
import Modal from "./components/common/Modal";
import Post from "./pages/Post/Post";
import DeleteAlert from "./components/common/DeleteAlert";
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
        {/* <Modal /> */}
        {/* <DeleteAlert /> */}
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
