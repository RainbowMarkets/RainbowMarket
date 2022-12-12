import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/Posts/PostWithImg";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Post from "./pages/Post/Post";
import PostDetail from "./components/Posts/PostDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <PostDetail />
      {/* <PostOnlyText />
      <PostOnlyText />
      <PostOnlyText />
      <PostWithImg />
      <Post /> */}
    </>
  );
}
export default App;
