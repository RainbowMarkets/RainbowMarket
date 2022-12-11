import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Post from "./components/Posts/Post";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Post />
        <PostOnlyText />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
