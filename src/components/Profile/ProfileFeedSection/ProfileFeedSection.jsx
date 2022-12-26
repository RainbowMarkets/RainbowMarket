import { useEffect, useState } from "react";
import { OnlyImage, StyledSection } from "./styledProfileFeedSection";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostContent from "../../common/PostFormat/PostContent/PostContent";
import PostModal from "../../common/Modal/Modal/PostModal";
import DeleteAlert from "../../common/Modal/Alert/DeleteAlert";
import useUserContext from "../../../hooks/useUserContext";
import imgLayerIcon from "../../../assets/images/iccon-img-layers.png";

export default function ProfileFeedSection({ name, data }) {
  const { user } = useUserContext();
  const [onlyImg, setOnlyImg] = useState(false);
  console.log(data);

  const [postModalActive, setPostModalActive] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [reportPostNum, setReportPostNum] = useState(""); // post id 받아서 postModal로 넘겨주기
  const [isHeartOn, setIsHeartOn] = useState(data.hearted);

  return (
    <section style={{ width: "100%", background: "white" }}>
      <ProfileFeedHeader setOnlyImg={setOnlyImg} onlyImg={onlyImg} />
      <StyledSection>
        <h3 className="hidden">게시글 목록입니다.</h3>
        {!onlyImg ? (
          data &&
          data.map((myPostList, i) => {
            return (
              <PostContent
                key={i}
                id={myPostList.id}
                postDetail={myPostList}
                setReportPostNum={setReportPostNum}
                postModalActive={postModalActive}
                setPostModalActive={setPostModalActive}
                isHeartOn={isHeartOn}
              />
            );
          })
        ) : (
          <OnlyImage>
            <ol>
              {data.map((post) => {
                return (
                  <li>
                    {post.image ? (
                      post.image.includes(",") ? (
                        <>
                          <img src={post.image.split(",")[0]} />
                          <img className="layer-icon" src={imgLayerIcon} />
                        </>
                      ) : (
                        <img src={post.image} />
                      )
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </OnlyImage>
        )}
      </StyledSection>
      <PostModal
        postUserId={name}
        reportPostNum={reportPostNum}
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
        setIsDeletePost={setIsDeletePost}
      />
      {isDeletePost && (
        <DeleteAlert
          postId={reportPostNum}
          isDeletePost={isDeletePost}
          setIsDeletePost={setIsDeletePost}
          setPostModalActive={setPostModalActive}
        />
      )}
    </section>
  );
}
