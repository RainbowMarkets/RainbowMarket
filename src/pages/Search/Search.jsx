import { useEffect, useState } from "react";
import Loading from "../../components/common/Loading/Loading";
import UserList from '../../components/common/UserList/UserList'
import Splash from "../../components/Splash/Splash";
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from "./styledSearch";


export default function Search() {
  const { user } = useUserContext();
  const [searchInp, setSearchInp] = useState(null);
  const [userData, setUserData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(true); // 로딩표시
  const [target, setTarget] = useState(null); //감시할 target
  const [offset, setOffset] = useState(0); // 15개씩 가져올것
  // const [stop, setStop] = useState(false); // 데이터 로딩 중지

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=dada`; /* ${searchInp} */

  const fetchUserData = async () => {
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json"
        },

      });
      const data = await res.json();
      setUserData((userData) => [...userData, ...data]);
      console.log(data);
      setOffset((offset) => offset + data.length);
      /*           setIsLoaded(false);
                if (data.length < 15) {
                  setStop(true);
                } */
    } catch (err) {
      console.log("err", err);
    }
  };

  // useEffect(()=>{
  //   fetchUserData();
  // }, [searchInp])

  useEffect(() => {
    let observer;
    if (target) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await fetchUserData();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, searchInp]);

  // useEffect(() => {
  //   if (!user.token) return;
  //   setIsLoading(true);
  //   const fetchUserData = async () => {
  //     await fetch(url + reqPath, {
  //       method: "GET",
  //       headers: {
  //         Authorization : `Bearer ${user.token}`,
  //         "Content-type" : "application/json"
  //       }
  //     })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log("searchtest!!", res);
  //       setUserData(res || []);
  //       setIsLoading(false);
  //     })
  //     .then(searchInp === "" ? setSearchInp(null) : setSearchInp(searchInp))
  //   }
  //   fetchUserData();
  // }, [searchInp]);

  function handleSearchInput(e){
    setSearchInp(e.target.value);
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
          <li ref={setTarget}></li>
        </StyledUl>
      </StyledSection>
    </>
  )
}