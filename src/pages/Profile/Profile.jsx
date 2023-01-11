import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const param = useParams();
  const navigate = useNavigate();
  const { user, token } = useUserContext();
  const { getData } = useFetch();

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
    if (!token) navigate("/login");
    else {
      getData(`/profile/${param.accountname}`)
        .then((res) => {
          setUserProfile(res);
          return res;
        })
        .then((res) => {
          getData(`/post/${encodeURI(res.profile.accountname)}/userpost`)
            .then((res) => {
              setPostData(res.post);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
          navigate("/"); // 없는 프로필에 접근을 시도할 경우 뒤로 가기
        });
    }
  }, []);

  return (
    <>
      <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
      <Wrapper>
        {/* 팔로우 등 프로필이 표시되는 섹션 */}
        <ProfileSection
          data={userProfile.profile}
          setUserProfile={setUserProfile}
          isMine={param.accountname === user?.accountname}
        />
        {/* 판매 중인 아이템이 표시되는 섹션 */}
        <ProfileItemSection name={userProfile.profile.accountname} />
        {/* 쓴 글 목록이 표시되는 섹션 */}
        <ProfileFeedSection
          name={userProfile.profile.accountname}
          data={postData}
        />
      </Wrapper>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}
