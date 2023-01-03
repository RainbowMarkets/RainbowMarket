import { useEffect, useState } from "react";
import { StyledSection } from "./styledisHaveFeed";
import PostContent from "../../../components/common/PostContent/PostContent";
import PostModal from "../../../components/common/Modal/Modal/PostModal";
import Loading from "../../../components/common/Loading/Loading";

export default function IsHaveFeed(props) {
  const token = localStorage.getItem("token");

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/feed/?limit=30`;

  const [feedData, setFeedData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function getFeedData() {
      setIsPending(true); // 통신 시작
      await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setFeedData(res.posts || []);
          setIsPending(false); // 통신 종료

          // isHaveFeed 설정
          if (res.posts.length === 0) {
            props.setIsHaveFeed(false);
          } else {
            props.setIsHaveFeed(true);
          }
        });
    }
    getFeedData();
  }, []);

  const [postModalActive, setPostModalActive] = useState(false);
  const [reportPostNum, setReportPostNum] = useState("");

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        feedData.map((feeditem, index) => {
          return (
            <StyledSection key={index}>
              <PostContent
                postDetail={feeditem}
                setReportPostNum={setReportPostNum}
                postModalActive={postModalActive}
                setPostModalActive={setPostModalActive}
                isHeartOn={feeditem.hearted}
                likeCount={feeditem.heartCount}
                commentDataLength={feeditem.commentCount}
                post_id={feeditem.id}
              />
            </StyledSection>
          );
        })
      )}
      <PostModal
        postUserId={null}
        reportPostNum={reportPostNum}
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
      />
    </>
  );
}
