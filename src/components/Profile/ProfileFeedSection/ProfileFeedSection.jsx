import { useEffect, useState } from "react";
import {
  OnlyImage,
  StyledPostContent,
  StyledSection,
} from "./styledProfileFeedSection";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostContent from "../../common/PostFormat/PostContent/PostContent";
import PostModal from "../../common/Modal/Modal/PostModal";
import DeleteAlert from "../../common/Modal/Alert/DeleteAlert";
import useUserContext from "../../../hooks/useUserContext";
import imgLayerIcon from "../../../assets/images/iccon-img-layers.png";

export default function ProfileFeedSection({
  name,
  data,
  setPostData,
  postData,
  myId,
}) {
  const { user } = useUserContext();
  const [onlyImg, setOnlyImg] = useState(false);
  // console.log(postData);

  const [postModalActive, setPostModalActive] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [reportPostNum, setReportPostNum] = useState(""); // post id 받아서 postModal로 넘겨주기
  const [isHeartOn, setIsHeartOn] = useState(data.hearted);
  const [postId, setPostId] = useState("");
  const localAccountName = localStorage.getItem("test220ID");
  const url = "https://mandarin.api.weniv.co.kr";

  // useEffect(() => {
  //   setPostData(data);
  // }, []);
  // console.log(postData);

  return (
    <section style={{ width: "100%", background: "white" }}>
      <ProfileFeedHeader setOnlyImg={setOnlyImg} onlyImg={onlyImg} />
      <StyledSection>
        <h3 className="hidden">게시글 목록입니다.</h3>
        {!onlyImg ? (
          data &&
          data.map((myPostList, i) => {
            // console.log(i, "번째", myPostList);
            return (
              <StyledPostContent>
                <h4 className="hidden"> 각각의 게시글입니다.</h4>
                <PostContent
                  key={myPostList.id}
                  id={myPostList.id}
                  postDetail={myPostList}
                  setReportPostNum={setReportPostNum}
                  postModalActive={postModalActive}
                  setPostModalActive={setPostModalActive}
                  isHeartOn={myPostList.hearted}
                  likeCount={myPostList.heartCount}
                />
              </StyledPostContent>
            );
          })
        ) : (
          <OnlyImage>
            <ol>
              {data.map((post) => {
                return (
                  <>
                    {post.image ? (
                      post.image.includes(",") ? (
                        <li>
                          <img src={post.image.split(",")[0]} />
                          <img className="layer-icon" src={imgLayerIcon} />
                        </li>
                      ) : (
                        <img src={post.image} />
                      )
                    ) : null}
                  </>
                );
              })}
            </ol>
          </OnlyImage>
        )}
      </StyledSection>
      <PostModal
        /*setPostId={setPostId}
        postId={postId}*/
        postUserId={name}
        reportPostNum={reportPostNum}
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
        setIsDeletePost={setIsDeletePost}
        setPostData={setPostData}
        postData={postData}
        myId={myId}
      />
      {/* {isDeletePost && (
        <DeleteAlert
          postId={reportPostNum}
          isDeletePost={isDeletePost}
          setIsDeletePost={setIsDeletePost}
          setPostModalActive={setPostModalActive}
          setPostData={setPostData}
          postData={postData}
        />
      )} */}
    </section>
  );
}
