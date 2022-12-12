import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/Posts/PostWithImg";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import PostDetail from "./components/Posts/PostDetail";
import MainTopBar from "./components/TopBar/MainTopBar/MainTopBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MainTopBar/> 
        {/* <Profile /> */}
        {/* 
        <PostOnlyText />
         */}
        {/* <PostWithImg /> */}
        <PostDetail />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
