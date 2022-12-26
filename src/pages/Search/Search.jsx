import { useEffect, useState } from "react";
import Loading from "../../components/common/Loading/Loading";
import UserList from '../../components/common/UserList/UserList'
import Splash from "../../components/Splash/Splash";
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from "./styledSearch";


export default function Search() {
  const { user } = useUserContext();
  const [searchInp, setSearchInp] = useState("");
  const [userData, setUserData] = useState([]);

  // const [isLoaded, setIsLoaded] = useState(true); // 로딩표시
  // const [target, setTarget] = useState(null); //감시할 target
  // const [offset, setOffset] = useState(0); // 15개씩 가져올것
  // const [stop, setStop] = useState(false); // 데이터 로딩 중지

  const fetchUserData = async (searchInp) => {
    const url = "https://mandarin.api.weniv.co.kr";
    const reqPath = `/user/searchuser/?keyword=${searchInp}`; /* ${searchInp} */

    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json"
        }
      });
      const data = await res.json();
      // console.log(data);
      if(res.ok){
        setUserData(data);
      }
      console.log(userData)
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(()=> {
    fetchUserData();
  },[searchInp]);

  let setTime;
  function handleSearchInput(e){
    const searchKeyword = e.target.value;
    if (setTime) {
      clearTimeout(setTime);
    }
    setTime = setTimeout(() => {
      if(searchKeyword){
        setSearchInp(searchKeyword);
        fetchUserData(searchKeyword);
      } else {
        setUserData("");
        setSearchInp("");
      }
    }, 500)
    console.log(searchInp);
  }

  return (
    <>
      <SearchTopBar
        searchInp={searchInp}
        handleSearchInput={handleSearchInput}
      />

      <StyledSection>
        <StyledUl>
          {
            userData.map((userDataitem, index) => {
              return (
                <UserList
                  key={index}
                  image={userDataitem.image}
                  username={userDataitem.username}
                  accountname={userDataitem.accountname}
                  searchInp={searchInp} />
              )
            })
          }
          {/* <li ref={setTarget}></li> */}
        </StyledUl>
      </StyledSection>
    </>
  )
}
