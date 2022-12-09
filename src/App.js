import { GlobalStyle } from "./GlobalStyle";
import Post from "./components/Posts/Post";
import PostOnlyText from "./components/Posts/PostOnlyText";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
      <Post />
      <PostOnlyText />
    </>
  );
}
export default App;
