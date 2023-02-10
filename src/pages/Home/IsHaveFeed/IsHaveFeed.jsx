import { useEffect, useState } from "react";
import { StyledSection } from "./styledisHaveFeed";
import PostContent from "../../../components/common/PostContent/PostContent";
import PostModal from "../../../components/common/Modal/Modal/PostModal";
import Loading from "../../../components/common/Loading/Loading";
import useFetch from "../../../hooks/useFetch";

export default function IsHaveFeed(props) {
  const { getData, isPending } = useFetch();

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    async function getFeedData() {
      // 피드 API
      getData(`/post/feed/?limit=30`).then((res) => {
        setFeedData(res.posts || []);
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
