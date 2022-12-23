import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import LogOutAlert from "../../components/common/Modal/Alert/LogOutAlert";
import useFetch from "../../hooks/useFetch";
import useUserContext from "../../hooks/useUserContext";

export default function Profile() {
  const { user } = useUserContext();
  const { getData } = useFetch();

  const [product, setProduct] = useState(null);
  const [isProduct, setIsProduct] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const [userInfo, setUserInfo] = useState({
    user: {
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
    if (!user) return;
    getData(`/user/myinfo`, setUserInfo, user.token).catch((err) => alert(err));
  }, []);

  console.log("product :", product);

  return (
    <>
      {user ? (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection data={userInfo.user} isMine={true} />
            {/* 판매 중잉 아이템이 표시되는 섹션 */}
            <ProfileItemSection
              name={userInfo.user.accountname}
              isMine={true}
              setIsProduct={setIsProduct}
              setModalActive={setModalActive}
              setProduct={setProduct}
            />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection />
            <Modal
              modalActive={modalActive}
              setModalActive={setModalActive}
              isLogOut={isLogOut}
              setIsLogOut={setIsLogOut}
              isProduct={isProduct}
              setIsProduct={setIsProduct}
              product={product}
              setProduct={setProduct}
            />
            {isLogOut && (
              <LogOutAlert isLogOut={isLogOut} setIsLogOut={setIsLogOut} />
            )}
          </Wrapper>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
