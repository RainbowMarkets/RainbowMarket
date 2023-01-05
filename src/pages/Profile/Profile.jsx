import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

export default function Profile() {
  const param = useParams();
  const navigate = useNavigate();
  const { user, token } = useUserContext();

  const [modalActive, setModalActive] = useState(false);
  const [postData, setPostData] = useState([]);

  const [userProfile, setUserProfile] = useState({
    profile: {
      _id: "",
      username: "",
      accountname: "",
      intro: "",
      image: "",
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  });

  useEffect(() => {
    if (!token) return;
    fetch(`https://mandarin.api.weniv.co.kr/profile/${param.accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        else navigate(-1);
      })
      .then((res) => {
        setUserProfile(res);
        return res;
      })
      .then((res) => {
        fetch(
          `https://mandarin.api.weniv.co.kr/post/${encodeURI(
            res.profile.accountname
          )}/userpost`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setPostData(res.post);
          });
      });
  }, []);

  return (
    <>
      {token ? (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection
              data={userProfile.profile}
              setUserProfile={setUserProfile}
              isMine={param.accountname === user.accountname}
            />
            {/* 판매 중잉 아이템이 표시되는 섹션 */}
            <ProfileItemSection name={userProfile.profile.accountname} />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection
              name={userProfile.profile.accountname}
              data={postData}
            />
            <Modal modalActive={modalActive} setModalActive={setModalActive} />
          </Wrapper>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
