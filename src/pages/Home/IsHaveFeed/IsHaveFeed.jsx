import React, { useEffect, useState } from "react"
import UserList from "../../../components/common/UserList/UserList";
import MainTopBar from "../../../components/TopBar/MainTopBar/MainTopBar";
import { ProfileCont, Styledbtn, StyledSection, Styledimg } from "./styledisHaveFeed";
import sIconMoreVertical from "../../../assets/images/s-icon-more-vertical.png";
import PostOnlyText from "../../../components/common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../../../components/common/PostFormat/PostWithImg/PostWithImg";
import PostContent from "../../../components/common/PostFormat/PostContent/PostContent";

export default function IsHaveFeed() {
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/feed`;
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZlODY1MTdhZTY2NjU4MWM3NjlkNCIsImV4cCI6MTY3NjYwODIwOSwiaWF0IjoxNjcxNDI0MjA5fQ.M-QVdVX_D87zf2w09ohaCbxyao4Kz6nvTJngY0H7z0E";

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    async function getFeedData() {
      await fetch(url + reqPath, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${myToken}`,
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then(res => {
          console.log("test!!!!", res.posts);
          setFeedData(res.posts);
        });
    }
    getFeedData();
  }, []);

  return (
    <>
      {
        feedData.map((feeditem) => {
          return (
            <StyledSection key={Math.random()}>
              <PostContent postDetail={feeditem} />
            </StyledSection>
          )
        })
      }
      
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
  )
}