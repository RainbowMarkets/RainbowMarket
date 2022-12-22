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
  }, []);

  const [postModalActive, setPostModalActive] = useState(false);

  return (
    <>
      {feedData.map((feeditem) => {
        return (
          <StyledSection key={Math.random()}>
            <PostContent
              postDetail={feeditem}
              postModalActive={postModalActive}
              setPostModalActive={setPostModalActive}
            />
          </StyledSection>
        );
      })}
      <PostModal
        postModalActive={postModalActive}
        setPostModalActive={setPostModalActive}
      />
      {/* {
        feedData.map((feeditem) => {
          return (
            <StyledSection key={Math.random()}>
              <ProfileCont>
                <UserList width="42px" username={feeditem.author.username} accountname={feeditem.author.accountname} />
                <Styledbtn>
                  <Styledimg src={sIconMoreVertical} alt="" />
                </Styledbtn>
              </ProfileCont>
              <p>{feeditem.content}</p>
            </StyledSection>
          )
        })
      } */}
    </>
  );
}
