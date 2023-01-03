import { useState } from "react";
import {
  OnlyImage,
  StyledPostContent,
  StyledSection,
} from "./styledProfileFeedSection";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostContent from "../../common/PostContent/PostContent";
import PostModal from "../../common/Modal/Modal/PostModal";
import imgLayerIcon from "../../../assets/images/iccon-img-layers.png";
import { Link } from "react-router-dom";

export default function ProfileFeedSection({
  name,
  data,
  setPostData,
  postData,
  myId,
}) {
  const [onlyImg, setOnlyImg] = useState(false);
  const [postModalActive, setPostModalActive] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [reportPostNum, setReportPostNum] = useState("");

  return (
    <section style={{ width: "100%", background: "white" }}>
      <ProfileFeedHeader setOnlyImg={setOnlyImg} onlyImg={onlyImg} />
      <StyledSection>
        <h3 className="hidden">게시글 목록입니다.</h3>
        {!onlyImg ? (
          data.length === 0 ? (
            "등록된 게시글이 없습니다."
          ) : (
            data.map((myPostList, i) => {
              return (
                <StyledPostContent>
                  <h4 className="hidden"> 각각의 게시글입니다.</h4>
                  <PostContent
                    key={myPostList.id}
                    post_id={myPostList.id}
                    postDetail={myPostList}
                    setReportPostNum={setReportPostNum}
                    postModalActive={postModalActive}
                    setPostModalActive={setPostModalActive}
                    isHeartOn={myPostList.hearted}
                    likeCount={myPostList.heartCount}
                    commentDataLength={myPostList.commentCount}
                  />
                </StyledPostContent>
              );
            })
          )
        ) : (
          <OnlyImage>
            {data.length === 0 ? (
              "등록된 게시글이 없습니다."
            ) : (
              <ol>
                {data.map((post) => {
                  return (
                    <Link to={`/post/${post.id}`}>
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
                    </Link>
                  );
                })}
              </ol>
            )}
          </OnlyImage>
        )}
      </StyledSection>
      <PostModal
        postUserId={name}
        reportPostNum={reportPostNum}
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
        setIsDeletePost={setIsDeletePost}
        setPostData={setPostData}
        postData={postData}
        myId={myId}
      />
    </section>
  );
}
