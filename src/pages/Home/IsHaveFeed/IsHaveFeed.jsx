import { useEffect, useState } from "react";
import { StyledSection } from "./styledisHaveFeed";
import PostContent from "../../../components/common/PostFormat/PostContent/PostContent";
import useUserContext from "../../../hooks/useUserContext";
import PostModal from "../../../components/common/Modal/Modal/PostModal";

export default function IsHaveFeed() {
  // const { user } = useUserContext();
  // console.log(user.token)
  const token = localStorage.getItem("token");

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/feed`;

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    async function getFeedData() {
      await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("test!!!!", res.posts);
          setFeedData(res.posts || []);
        });
    }
    getFeedData();
    // console.log(feedData)
  }, []);

  const [postModalActive, setPostModalActive] = useState(false);
  const [reportPostNum, setReportPostNum] = useState(""); // post id 받아서 postModal로 넘겨주기

  return (
    <>
      {feedData.map((feeditem) => {
        return (
          <StyledSection key={Math.random()}>
            <PostContent
              postDetail={feeditem}
              setReportPostNum={setReportPostNum}
              postModalActive={postModalActive}
              setPostModalActive={setPostModalActive}
            />
          </StyledSection>
        );
      })}
      <PostModal
        postUserId={null} // 팔로워들 글이라 항상 같지 않기 때문
        reportPostNum={reportPostNum}
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
      />
    </>
  );
}
