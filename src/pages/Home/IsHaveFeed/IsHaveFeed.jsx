import React, { useEffect, useState } from "react"
import UserList from "../../../components/common/UserList/UserList";
import MainTopBar from "../../../components/TopBar/MainTopBar/MainTopBar";
import { ProfileCont, Styledbtn, StyledSection, Styledimg } from "./styledisHaveFeed";
import sIconMoreVertical from "../../../assets/images/s-icon-more-vertical.png";
import PostOnlyText from "../../../components/common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../../../components/common/PostFormat/PostWithImg/PostWithImg";

export default function IsHaveFeed() {
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/feed`;
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZlODY1MTdhZTY2NjU4MWM3NjlkNCIsImV4cCI6MTY3NjYwODIwOSwiaWF0IjoxNjcxNDI0MjA5fQ.M-QVdVX_D87zf2w09ohaCbxyao4Kz6nvTJngY0H7z0E";

  const [feedData, setFeedData] = useState([]);

  useEffect(() => { 
    async function getFeedData(){
      await fetch(url + reqPath, {
        method : "GET",
        headers: {
          "Authorization" : `Bearer ${myToken}`,
          "Content-type" : "application/json"
        }
      }).then(res => res.json())
      .then(res => {
        console.log("test!!!!", res.posts);
        setFeedData(res.posts);
      });              
    }
    getFeedData();
  }, []);

  // console.log(feedData[0]);

  return (
    <>
      <MainTopBar/>
      {/* i.author.username */}
      
      {
        feedData.map((i) => {
          return(
            <StyledSection>
            <ProfileCont>
              <UserList width="42px" username={i.author.username} accountname={i.author.accountname}/>
              <Styledbtn>
                <Styledimg src={sIconMoreVertical} alt="" />
              </Styledbtn>
            </ProfileCont>
            <p>{i.content}</p>
          </StyledSection> 
        )
      })  
      }
      
      {/* <StyledSection>
        <PostWithImg postDetail={feedData} />
      </StyledSection> */}

      {/* <StyledSection>
        <ProfileCont>
          <UserList width="42px" username={feedData[0].author.username} accountname={feedData[0].author.accountname}/>
          <Styledbtn>
            <Styledimg src={sIconMoreVertical} alt="" />
          </Styledbtn>
        </ProfileCont>
        <p>{feedData[0].author.accountname}</p>
      </StyledSection>  */}
      {/* <Post />*/}
    </>
  )
}