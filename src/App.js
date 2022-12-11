import { GlobalStyle } from "./GlobalStyle";
import Post from "./components/Posts/Post";
import PostOnlyText from "./components/Posts/PostOnlyText";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <div>hello world</div> */}
      <Profile />
      {/* <Post />
      <PostOnlyText /> */}
    </>
  );
}
export default App;
