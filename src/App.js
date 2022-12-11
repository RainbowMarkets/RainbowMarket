import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Post from "./components/Posts/Post";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Profile />
        <Post />
        <PostOnlyText />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
