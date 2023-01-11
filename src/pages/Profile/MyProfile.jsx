import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import ProductModal from "../../components/common/Modal/Modal/ProductModal";
import Loading from "../../components/common/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { token, dispatch } = useUserContext();
  const { getData } = useFetch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [prodModal, setProdModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [postData, setPostData] = useState([]);
  const [isPending, setIsPending] = useState(false);

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
    if (!token) navigate("/login");
    else {
      setIsPending(true); // 통신 시작
      getData("/user/myinfo")
        .then((res) => {
          dispatch({ type: "LOGIN", payload: res.user });
          setUserInfo(res);
          return res;
        })
        .then((res) => {
          getData(`/post/${encodeURI(res.user.accountname)}/userpost`)
            .then((res) => {
              setPostData(res.post);
              setIsPending(false); // 통신 종료
            })
            .catch((err) => {
              setIsPending(false);
              console.log(err);
            });
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection
              data={userInfo.user}
              isMine={true}
              isPending={isPending}
            />
            {/* 판매 중인 아이템이 표시되는 섹션 */}
            <ProfileItemSection
              name={userInfo.user.accountname}
              isMine={true}
              prodModal={prodModal}
              setProdModal={setProdModal}
              setProduct={setProduct}
            />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection
              name={userInfo.user.accountname}
              data={postData}
              setPostData={setPostData}
              postData={postData}
              myId={userInfo.user._id}
            />
          </Wrapper>
          <Modal modalActive={modalActive} setModalActive={setModalActive} />
          <ProductModal
            prodModal={prodModal}
            setProdModal={setProdModal}
            product={product}
            setProduct={setProduct}
          />
        </>
      )}
    </>
  );
}
