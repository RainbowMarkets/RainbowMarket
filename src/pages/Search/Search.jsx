import { useEffect, useRef, useState } from "react";
import Loading from "../../components/common/Loading/Loading";
import UserList from "../../components/common/UserList/UserList";
import SearchTopBar from "../../components/TopBar/SearchTopBar/SearchTopBar";
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from "./styledSearch";


export default function Search() {
  const { user } = useUserContext();
  const [searchInp, setSearchInp] = useState("");
  const [userData, setUserData] = useState([]); // 뿌려줄 데이터 

  const [tempData, setTempData] = useState([]); // 입시로 들어갈 데이터
  const [offset, setOffset] = useState(0);
  const observeTarget = useRef(); // 감시할 target

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=${searchInp}`; /* ${searchInp} */

  const callbackFunction = (entries) => {
    const [ entry ] = entries;
    if(tempData.length > offset && entry.isIntersecting){
      setOffset((offset) => offset + 15);
    }
  }

  // 옵션 안넣어도 됨
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  // 데이터 가져오기
  const fetchUserData = async () => {
    if(searchInp === "") {
      setUserData([]);
      setTempData([]);
      return;
    }
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json"
        }
      });
      const data = await res.json();
      // console.log(data)
      setOffset(15);
      setUserData([]);
      setTempData(data);
      // console.log(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(()=>{
    if (!user.token) return;
    fetchUserData();
  }, [searchInp]);

  // API
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (observeTarget.current) {
      observer.observe(observeTarget.current)
    };
    return () => {
      if (observeTarget.current){
        observer.unobserve(observeTarget.current);
      }
    }
  }, [observeTarget, options]);

  useEffect(() => {
    const copyData = [...userData];
    copyData.push(...tempData.slice(offset - 15, offset));
    setUserData(copyData);
  }, [tempData, offset]);

  // 서치 탑바에서 가져온 inpvalue
  function handleSearchInput(e){
    setSearchInp(e.target.value);
    // console.log(searchInp);
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
          {/* <li ref={observeTarget}>돼라아아아아</li> */}
        </StyledUl>
        <div ref={observeTarget}></div>
      </StyledSection>
    </>
  )
}