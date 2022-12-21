import { useEffect, useState } from "react";
import UserList from "../../../components/common/UserList/UserList";
import MainTopBar from "../../../components/TopBar/MainTopBar/MainTopBar";
import {
  ProfileCont,
  Styledbtn,
  StyledSection,
  Styledimg,
} from "./styledisHaveFeed";
import sIconMoreVertical from "../../../assets/images/s-icon-more-vertical.png";
import PostContent from "../../../components/common/PostFormat/PostContent/PostContent";
import useUserContext from "../../../hooks/useUserContext";

export default function IsHaveFeed() {
  const { user } = useUserContext();
  // console.log(user.token)

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/feed`;

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    async function getFeedData() {
      await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("test!!!!", res.posts);
          setFeedData(res.posts);
        });
    }
    getFeedData();
  }, []);

  return (
    <>
      {feedData.map((feeditem) => {
        return (
          <StyledSection key={Math.random()}>
            <PostContent postDetail={feeditem} />
          </StyledSection>
        );
      })}

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
