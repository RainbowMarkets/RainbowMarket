import { GlobalStyle } from "./GlobalStyle";
import Post from "./components/Posts/Post";
import PostOnlyText from "./components/Posts/PostOnlyText";
import ProfileSection from "./components/ProfileSection/ProfileSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
      <ProfileSection />
      {/* <Post />
      <PostOnlyText /> */}
    </>
  );
}
export default App;
