import { GlobalStyle } from "./GlobalStyle";
import PostWithImg from "./components/Posts/PostWithImg";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Post from "./pages/Post/Post";

function App() {
  return (
    <>
      <GlobalStyle />

      <Post />
      <PostOnlyText />
      {/* <PostWithImg /> */}
    </>
  );
}
export default App;
