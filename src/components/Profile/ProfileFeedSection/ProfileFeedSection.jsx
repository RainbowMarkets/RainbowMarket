import React, { useEffect, useState } from "react";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostOnlyText from "../../common/PostFormat/PostOnlyText/PostOnlyText";
import PostContent from "../../common/PostFormat/PostContent/PostContent";
import useUserContext from "../../../hooks/useUserContext";
import useFetch from "../../../hooks/useFetch";
import PostModal from "../../common/Modal/Modal/PostModal";
import styled from "styled-components";
import DeleteAlert from "../../common/Modal/Alert/DeleteAlert";

export const StyledSection = styled.section`
  padding: 20px 16px;
`;

export default function ProfileFeedSection({ name, postListData }) {
  const [withImg, setWithImg] = useState(false);
  // console.log(postListData);
  const [postModalActive, setPostModalActive] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [reportPostNum, setReportPostNum] = useState(""); // post id 받아서 postModal로 넘겨주기

  return (
    <section style={{ width: "100%", background: "white" }}>
      <ProfileFeedHeader setWithImg={setWithImg} withImg={withImg} />
      {postListData &&
        postListData.map((myPostList) => {
          return (
            <StyledSection key={myPostList.id}>
              <h3 className="hidden">내 게시글 목록입니다.</h3>
              <PostContent
                postDetail={myPostList}
                setReportPostNum={setReportPostNum}
                postModalActive={postModalActive}
                setPostModalActive={setPostModalActive}
              />
            </StyledSection>
          );
        })}
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
