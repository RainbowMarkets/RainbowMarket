# <span id="top">🌈 재능 기부 및 판매 플랫폼 무지개 마켓</span>

- 🔗 [**배포URL**](https://rainbowmarketsns.netlify.app/)
- 💻 **테스트 계정**
    ```shell
    test1 id : rainbowmarket@official.com
    test1 pw : 123456
    ```
<img width="100%" src="https://user-images.githubusercontent.com/93987174/211720918-d7162904-6cfb-44ee-9d87-249ca52502bd.png"></img>


- 목차

    [1. 프로젝트 소개](#프로젝트-소개)<br>
    [2. 팀원 소개](#팀원-소개)<br>
    [3. 개발 환경](#개발-환경)<br>
    [4. 구현 기능](#구현-기능)<br>
    [5. 프로젝트 구조](#프로젝트-구조)<br>
    [6. 트러블 슈팅](#트러블-트러블)<br>
    [7. 프로젝트 배포 후 느낀 점](#프로젝트-배포-후-느낀-점)

## 프로젝트 소개

### 개요

- 레인보우 마켓은 재능을 기부하거나 판매하는 SNS입니다.
- 자신이 가지고 있는 재능을 필요로 하는 사람들에게 기부하여 도움을 주거나, 도움이 필요한 사람이 게시글을 올려 원하는 재능을 가진 사람을 찾아 도움을 받을 수 있는 SNS입니다.
- 재능 기부를 하지 않아도 어떤 주제에 대하여 댓글을 주고받거나 또는 채팅을 함으로써 서로의 생각을 나눌 수 있습니다.
- 마음에 드는 피드 게시물에 좋아요를 누를 수 있습니다.
- 사용자 검색을 통해 팔로우를 하여 홈 피드에서 게시물을 확인할 수 있습니다.

### 제작 기간
2022.12.09 - 2023.01.03

<p align="right"><a href="#top">⬆️Top</a></p>

## 팀원 소개

| 이석우                                                                                           | 김다정                                                                                          | 권지혜                                                                                          | 이유진                                                                                          |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <img src ="https://avatars.githubusercontent.com/u/108033922?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/93987174?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/53033847?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/63508955?v=4" width="150px" height="150px"/> |
| <center>[Skylark92](https://github.com/Skylark92)</center>                                 | <center>[DADA6041](https://github.com/DADA6041)</center>                                   | <center>[jhfrontend](https://github.com/jhfrontend)</center>                               | <center>[yjlee9909](https://github.com/yjlee9909)</center>|

### 역할 분담
<img width="70%" src="https://user-images.githubusercontent.com/93987174/211714671-7942d460-d6d0-4f40-b2b5-a03a93738466.png"/>

<p align="right"><a href="#top">⬆️Top</a></p>

## 개발 환경

### 기술 스택

- Front-End
  - HTML, CSS, JavaScript, React, styled-components
- Back-End
  - 제공된 API 사용
- Design
  - [Figma](https://www.figma.com/file/hnEv2SxghO2DWmH9mLx1e6/%EB%80%8C%EC%97%AC%EC%9B%8C-%7C-%EB%AC%B4%EC%A7%80%EA%B0%9C-%EB%A7%88%EC%BC%93-(Copy)?node-id=0%3A1&t=9IKWYSVW0OiWC7Kv-0)

### 현상관리 및 협업 도구

- GitHub, Git
- GitHub Issues : 각자 활동 내역에 대해 이슈 등록 후 작업 진행
- Discord : 실시간 소통 및 화면 공유
- Slack : 각 컴포넌트별 전달 사항 작성
- VScode liveshare : 공통적인 문제 같이 해결
- Notion : [주간 회의록 작성 및 기록](https://www.notion.so/213a97533099429287dc06f75768add5)

### 이슈 관리

- 각자 활동 내역에 대해 [이슈 등록](https://github.com/RainbowMarkets/RainbowMarket/issues) 후 작업 진행
<img width="400px" alt="sfd" src="https://user-images.githubusercontent.com/93987174/211715797-19dbe38d-b079-4e8a-9f7e-74ad313fe2a3.PNG">

- [GitHub Project 사용](https://github.com/RainbowMarkets/RainbowMarket/projects?query=is%3Aopen) <br>
<img width="400px" alt="projects" src="https://user-images.githubusercontent.com/93987174/211702307-be51b02a-0a63-402f-af34-525b681e8482.PNG">

- Slack 사용하여 각 컴포넌트별 전달 사항 작성
<img width="400px" alt="asvasv" src="https://user-images.githubusercontent.com/93987174/211716954-25f2f7e0-02c0-407e-954b-ee8793091b96.PNG">

<p align="right"><a href="#top">⬆️Top</a></p>

## 구현기능

---
|<center>Splash</center>|<center>회원가입</center>|<center>로그인</center>|
|---|---|---|
|<img width="275px" src=https://user-images.githubusercontent.com/63508955/211530261-b2d718c2-a69b-4224-b9b5-cebbdc8c128d.gif></img>|<img width="275px" src=https://i.imgur.com/UqAQYqf.gif></img>|<img width="275px" src=https://i.imgur.com/vE7LvrW.gif></img>

| <center>홈화면</center> | <center>계정 검색</center> | <center>유저 프로필</center> |
| --- | --- | --- |
|<img width="275px" src=https://i.imgur.com/H1hpMGk.gif></img>|<img  width="275px" src="https://i.imgur.com/vf6ojtY.gif"></img>|<img width="275px" src="https://i.imgur.com/mOmjo4h.gif"></img>|

| <center>내 프로필</center> | <center>내 프로필 수정</center> | <center>팔로우, 팔로워</center> |
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/fHpsZmZ.gif"></img>|<img width="275px" src="https://i.imgur.com/FH8IWV0.gif"></img>|<img width="275px"  src="https://i.imgur.com/jwX1yYW.gif"></img>

| <center>재능 판매 등록</center> | <center>재능 판매 수정</center> | <center>재능 판매 링크 이동</center> |
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/vZErGm9.gif"></img>|<img width="275px" src="https://i.imgur.com/5CbjoeV.gif"></img>|<img width="275px" src="https://i.imgur.com/PMj9gE4.gif"></img>

| <center>재능 판매 목록 삭제</center> | <center>404 페이지</center> | <center>게시글 등록</center> |
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/4qiQCxK.gif"></img>|<img width="275px" src="https://i.imgur.com/UkAoXZh.gif"></img>|<img width="275px" src="https://i.imgur.com/WpOXRuV.gif"></img>|

| <center>게시글 상세 페이지</center> | <center>게시글 수정</center> | <center>게시글 삭제</center> |
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/cgPynrM.gif"></img>|<img width="275px" src="https://i.imgur.com/y9M9mnd.gif"></img>|<img  width="275px" src="https://i.imgur.com/7zd0KyW.gif"></img>

|<center>게시글 댓글 등록</center> | <center>게시글 댓글 삭제</center> | <center>게시글 좋아요</center>
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/6Ra8QQV.gif"></img>|<img width="275px" src="https://i.imgur.com/mWKXMg6.gif"></img>|<img width="275px" src="https://i.imgur.com/GhU97uO.gif"></img>

| <center>모달 기능</center> | <center>신고</center> | <center>로그아웃</center> |
| --- | --- | --- |
|<img width="275px" src="https://i.imgur.com/lbG8D0H.gif"></img>|<img width="275px" src="https://i.imgur.com/nC0O4au.gif"></img>|<img width="275px" src="https://i.imgur.com/6pjK7sk.gif"></img>

<p align="right"><a href="#top">⬆️Top</a></p>

## 프로젝트 구조

```markdown
📦rainbowmarket
┣ 📂.git
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂images
┃ ┣ 📂components
┃ ┃ ┣ 📂ChatRoom
┃ ┃ ┣ 📂Join
┃ ┃ ┣ 📂Login
┃ ┃ ┣ 📂Member
┃ ┃ ┣ 📂Navbar
┃ ┃ ┣ 📂Posts
┃ ┃ ┃ ┣ 📂Comment
┃ ┃ ┃ ┣ 📂PostBtn
┃ ┃ ┣ 📂ProductInput
┃ ┃ ┣ 📂Profile
┃ ┃ ┃ ┣ 📂ProfileFeedSection
┃ ┃ ┃ ┣ 📂ProfileItemSection
┃ ┃ ┃ ┗ 📂ProfileSection
┃ ┃ ┣ 📂Splash
┃ ┃ ┣ 📂TopBar
┃ ┃ ┗ 📂common
┃ ┃ ┃ ┣ 📂Loading
┃ ┃ ┃ ┣ 📂Modal
┃ ┃ ┃ ┣ 📂PostContent
┃ ┃ ┃ ┣ 📂SetProfile
┃ ┃ ┃ ┗ 📂UserList
┃ ┣ 📂context
┃ ┣ 📂hooks
┃ ┣ 📂pages
┃ ┃ ┣ 📂Chat
┃ ┃ ┣ 📂Follow
┃ ┃ ┣ 📂Home
┃ ┃ ┣ 📂Join
┃ ┃ ┣ 📂NotFound
┃ ┃ ┣ 📂Post
┃ ┃ ┣ 📂Product
┃ ┃ ┣ 📂Profile
┃ ┃ ┗ 📂Search
┃ ┣ 📜App.js
┃ ┣ 📜GlobalStyle.js
┃ ┗ 📜index.js
┣ 📜.gitignore
┣ 📜README.md
┣ 📜package-lock.json
┗ 📜package.json
```

<p align="right"><a href="#top">⬆️Top</a></p>

## 트러블 슈팅
#### 1. API 데이터 무한 요청
* 문제 : 게시글 목록을 불러올 때 API 요청이 계속해서 일어남.
* 원인 : useState Hook을 사용해 게시글 목록의 상태를 관리했는데, 상태가 변경될 때마다 다시 렌더링 하기 위해 해당 컴포넌트 "함수"를 불러오게 된다. 따라서 그 안에 작성된 API 요청 구문이 다시 실행되고 상태를 또 변경하게 된다. 이 일이 반복되면서 무한루프 발생.
* 해결 : useEffect Hook을 사용하여, 특정 감시하는 상태의 변화에만 API 요청을 하도록 함.

#### 2. 무한 스크롤 페이징 시 마지막 페이지 무한 요청
* 문제 : 맨 마지막 페이지에 도달 시 해당 마지막 페이지가 계속해서 추가됨.
* 원인 : Intersection Observer API를 이용하여 현재 화면의 마지막 요소 도달 시 다음 페이지를 요청하도록 설계했는데, 페이지의 끝에 도달하더라도 화면의 마지막 요소에만 도달하면 새로운 요청을 계속해서 보냄.
* 해결 : 페이지를 불러올 때마다 이전 배열과 비교하여 변화가 없는 경우 더이상 요청을 보내지 않음.
#### 3. 이미지업로드버튼이 원하는 위치에 고정되지 않는 현상
* 문제 : 게시글 작성 화면에서 이미지 업로드 버튼이 원하는 위치에 고정되지 않음.
* 원인 : 해당 버튼의 스타일 요소 중 position을 fixed로 하고, right와 bottom 값으로 위치를 조정했는데 fixed position일 때 부모 요소를 인식하지 못해 화면 기준으로 이동하게 됨.
* 해결 : position: fixed가 아닌 position: sticky 스타일을 이용하여 부모 요소를 인식함과 동시에 위치를 고정할 수 있도록 함.
#### 4. 게시글 데이터 받아올 시에 개행문자를 인식하지 못함
* 문제 : 게시글 데이터를 받아와 내용을 화면에 출력할 때, 개행문자는 무시되어 화면에 개행 없이 내용이 표시됨.
* 원인 : 리액트에서는 XSS(Cross Site Scripting) 공격을 방지하기 위해 렌더링 전에 HTML 본연의 태그나 스크립트 기능들을 제거하기 때문에, 이스케이프 문자(\n)로 담겨오는 개행문자를 렌더링 해주지 않음.
* 해결 : 해당 문제가 발생하는 게시글 스타일 요소에 { word-break: break-all, white-space: pre-wrap }를 추가하여 해결.
#### 5. 배포 후, 화면 새로고침 시 404 에러 발생
* 문제 : 앱을 빌드하여 netlify를 이용해 배포했는데, 모바일에서 새로고침 시 netlify의 404오류가 발생
* 원인 : 리액트에서 루트 경로는 "/"이고 이 경로에서는 index.html을 읽는다. 리액트로 라우팅 된 경로에서는 새로고침 시 해당 소스를 받아올 수 없으므로, netlify에서 404 에러를 내뱉는다.
* 해결 : public 폴더 안에 redirets 파일을 생성하고 안에 아래와 같은 내용을 추가했다. 이는 어떠한 경로(/\*)로 들어와도 루트의 index.html을 불러올 수 있도록 해준다.
    ```
    /* /index.html 200
    ```

<p align="right"><a href="#top">⬆️Top</a></p>

## 프로젝트 배포 후 느낀 점


### 🐼 김다정
기간 내에 끝내기만 하는 것이 목표였는데 생각보다 여유롭게 별 탈 없이 해내서 매우 기쁩니다. 기본 기능 이상을 해낸 부분들도 있어 매우 기뻤으며, 코드를 쓰다 막히면 모두가 나서서 문제 해결을 도와주었는데 정말 이상적인 팀 프로젝트를 경험해 봤다고 생각합니다.

### 💗 권지혜 
코드를 작성하는 것만큼 소프트 스킬, 대화 스킬도 중요하다는 사실을 깨달았습니다. 그리고 혼자 했을 때 어려웠던 문제가 생각보다 간단하게 해결되는 것을 보면서 안도하면서도 한편으로는 심적으로 힘들었습니다. 다른 팀원들에 비해 상대적으로 많은 시간이 걸리지만, 적어도 코드 흐름을 읽기 시작했다는 점이 저에게 큰 발전이라고 생각합니다.

### 👩‍💻 이석우
시작할 때는 소프트 스킬, 그리고 리더십의 발전을 기대했지만 무난하게 잘 따라와 준 팀원들 덕분에 큰 우여곡절 없이 여기까지 왔다고 생각합니다. 여기까지 오는 데 고민한 시간들 또한 저에게 있어 큰 발전이라고 생각합니다. 그리고 협업할 때 필요한 기술들에 대해 많이 알 수 있어서 좋았습니다.

### 🐰 이유진
협업하면서 가장 중요하다고 생각했던 대화 부분은 여러 협업 도구를 통해 잘 이루어졌다고 생각합니다. 또한 서로 작성한 코드들을 사용하다보니 어떤 식으로 코드를 짰는지 점점 이해하는 나의 모습을 보면서 처음 여기에 들어왔을 때보다 많이 성장했다는 느낌을 받았습니다. 그리고 막히는 부분이 있다면 다 같이 모여서 해결하는 상황이 너무 인상깊었습니다.

<p align="right"><a href="#top">⬆️Top</a></p>
