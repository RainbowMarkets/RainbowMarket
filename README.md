# READ ME

# 🌈 재능 기부 및 판매 플랫폼 무지개 마켓

## 배포URL

```jsx
test1 id : rainbowmarket@official.com
test1 pw : 123456
```
<img width="100%" src="https://user-images.githubusercontent.com/63508955/210481667-27ac8744-744c-406d-9a4f-095e101733d5.png"/>


## 1. 소개와 기능

### 1.1 프로젝트 소개

- 레인보우 마켓은 재능을 기부하거나 판매하는 SNS입니다.
- 자신이 가지고 있는 재능을 필요로 하는 사람들에게 기부하여 도움을 주거나, 도움이 필요한 사람이 게시글을 올려 원하는 재능을 가진 사람을 찾아 도움을 받을 수 있는 SNS입니다.
- 재능 기부를 하지 않아도 어떤 주제에 대하여 댓글을 주고받거나 또는 채팅을 함으로써 서로의 생각을 나눌 수 있습니다.
- 마음에 드는 피드 게시물에 좋아요를 누를 수 있습니다.
- 사용자 검색을 통해 팔로우를 하여 홈 피드에서 게시물을 확인할 수 있습니다.

### 1.2 팀원 소개

| 이석우                                                                                           | 김다정                                                                                          | 권지혜                                                                                          | 이유진                                                                                          |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <img src ="https://avatars.githubusercontent.com/u/108033922?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/93987174?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/53033847?v=4" width="150px" height="150px"/> | <img src ="https://avatars.githubusercontent.com/u/63508955?v=4" width="150px" height="150px"/> |
| https://github.com/Skylark92                                                                   | https://github.com/DADA6041                                                                   | https://github.com/jhfrontend                                                                 | https://github.com/yjlee9909                                                                  |

## 개발 환경

### 기술 스택

- Front-End
  - HTML, CSS, JavaScript, React, styled-components
- Back-End
  - 제공된 API 사용
- Design
  - Figma 사용

### 현상관리 및 협업 도구

- GitHub, Git
- GitHub Issues : 각자 활동 내역에 대해 이슈 등록 후 작업 진행
- Discord : 실시간 소통 및 화면 공유
- Slack : 각 컴포넌트별 전달 사항 작성
- VScode liveshare : 공통적인 문제 같이 해결
- Notion : [주간 회의록 작성 및 기록](https://www.notion.so/213a97533099429287dc06f75768add5)

### 이슈 관리

- 각자 활동 내역에 대해 [이슈 등록](https://github.com/RainbowMarkets/RainbowMarket/issues) 후 작업 진행
- [GitHub Project 사용](https://github.com/RainbowMarkets/RainbowMarket/projects?query=is%3Aopen)

  <img width="80%" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b41989fa-c043-4fc9-afa3-840e28767ed9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230104T035835Z&X-Amz-Expires=86400&X-Amz-Signature=9aa08de5153c7beda91cafd67b6e1c3a7b1755cee9494f1d8ea5a5d46f0751c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"/>


- Slack 사용하여 각 컴포넌트별 전달 사항 작성
  <img width="80%" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/46a0ecb5-518f-43a6-a850-e43eaab5655e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230104T035926Z&X-Amz-Expires=86400&X-Amz-Signature=cd157a2eecf51f9ebc796329b3a6334a7203beb343341c5617281799289df4e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"/>

## 역할 분담

이석우

- 프로필 보기 화면 구현
- 팔로워 보기 화면 구현
- 팔로우 및 언팔로우 기능 구현
- 프로필 수정 기능 구현
- 상품 등록 및 수정, 삭제 기능 구현

김다정

- 메인피드 페이지 구현
- 서치 페이지 구현
- 헤더, 내비게이션 바 구현
- 게시글 삭제 기능 구현
- 모달 창, 토스트 메세지 구현
- 디자인 구성

권지혜

- splash 구현
- 로그인 화면 구현
- 회원가입 화면 구현

이유진

- 게시글 작성 및 게시글 수정 기능 구현
- 게시글 상세 보기 기능 구현
- 댓글 작성 및 삭제 기능 구현
- 좋아요 기능 구현
- 채팅방 화면 구현
- 모달 창 구현

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
┃ ┃ ┃ ┣ 📂Login
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

## 프로젝트 배포 후 느낀 점

| 이름   | 느낀 점                                                                                                                                                                                                                                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김다정 | 기간 내에 끝내기만 하는 것이 목표였는데 생각보다 여유롭게 별 탈 없이 해내서 매우 기쁩니다. 기본 기능 이상을 해낸 부분들도 있어 매우 기뻤으며, 코드를 쓰다 막히면 모두가 나서서 문제 해결을 도와주었는데 정말 이상적인 팀 프로젝트를 경험해 봤다고 생각합니다.                                                                                      |
| 권지혜 | 코드를 작성하는 것만큼 소프트 스킬, 대화 스킬도 중요하다는 사실을 깨달았습니다. 그리고 혼자 했을 때 어려웠던 문제가 생각보다 간단하게 해결되는 것을 보면서 안도하면서도 한편으로는 심적으로 힘들었습니다. 다른 팀원들에 비해 상대적으로 많은 시간이 걸리지만, 적어도 코드 흐름을 읽기 시작했다는 점이 저에게 큰 발전이라고 생각합니다.             |
| 이석우 | 시작할 때는 소프트 스킬, 그리고 리더십의 발전을 기대했지만 무난하게 잘 따라와 준 팀원들 덕분에 큰 우여곡절 없이 여기까지 왔다고 생각합니다. 여기까지 오는 데 고민한 시간들 또한 저에게 있어 큰 발전이라고 생각합니다. 그리고 협업할 때 필요한 기술들에 대해 많이 알 수 있어서 좋았습니다.                                                          |
| 이유진 | 협업하면서 가장 중요하다고 생각했던 대화 부분은 여러 협업 도구를 통해 잘 이루어졌다고 생각합니다. 또한 서로 작성한 코드들을 사용하다보니 어떤 식으로 코드를 짰는지 점점 이해하는 나의 모습을 보면서 처음 여기에 들어왔을 때보다 많이 성장했다는 느낌을 받았습니다. 그리고 막히는 부분이 있다면 다 같이 모여서 해결하는 상황이 너무 인상깊었습니다. |
