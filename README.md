# 🌈 재능 기부 및 판매 플랫폼 무지개 마켓

## 배포URL

---

```jsx
test1 id : rainbowmarket@official.com
test1 pw : 123456
```

## 1. 소개와 기능

---

### 1.1 프로젝트 소개

- 레인보우 마켓은 재능을 기부하거나 판매하는 SNS입니다.
- 자신이 가지고 있는 재능이 필요한 사람들에게 재능을 기부하여 도움을 주거나, 도움이 필요한 사람이 게시글을 올려 원하는 재능을 가진 사람을 찾아 도움을 받을 수 있는 SNS입니다.
- 재능 기부를 하지 않아도 어떤 주제에 대하여 댓글을 주고받거나 또는 채팅을 함으로써 서로의 생각을 나눌 수 있습니다.
- 마음에 드는 피드 게시물에 좋아요를 누를 수 있습니다.
- 사용자 검색을 통하여 팔로우를 하여 홈 피드에서 게시물을 확인할 수 있습니다.

### 1.2 팀원 소개

| 이름   | Github                        | 블로그                   |
| ------ | ----------------------------- | ------------------------ |
| 이석우 | https://github.com/Skylark92  |                          |
| 김다정 | https://github.com/DADA6041   |                          |
| 권지혜 | https://github.com/jhfrontend |                          |
| 이유진 | https://github.com/yjlee9909  | https://velog.io/@yoon91 |

## 2. 개발환경

---

### 2.1 기술 스택

- Front-End
  - HTML, CSS, JavaScript, React, styled-components
- Back-End
  - 제공된 API 사용
- Design
  - Figma 사용

### 2.2 현상관리 및 협업 도구

- Github, Git
- Github Issues : 각자 활동 내역에 대해 이슈 등록 후 작업 진행
- Discord : 실시간 소통 및 화면 공유
- Slack : 각 컴포넌트별 전달사항 작성
- VScode liveshare : 공통적인 문제 같이 해결
- Notion : 주간 회의록 작성 및 기

## 3. 역할분담

---

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

## 4. 프로젝트 구조

---

```markdown
rainbowmarket
├─ .github
│ └─ pull_request_template.md
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
└─ src
├─ App.js
├─ GlobalStyle.js
├─ assets
│ ├─ images
│ └─ img
├─ components
│ ├─ ChatRoom
│ ├─ Join
│ │ └─ JoinWithEmail
│ ├─ Login
│ │ └─ LoginModal
│ ├─ Member
│ │ ├─ Member.jsx
│ │ ├─ Memberdata.js
│ ├─ Navbar
│ ├─ Posts
│ │ ├─ Comment
│ │ │ ├─ CommentAdd
│ │ │ ├─ CommentDetail
│ │ │ └─ PostDate
│ │ ├─ PostBtn
│ │ │ ├─ PostCommentBtn
│ │ │ └─ PostHearBtn
│ │ ├─ PostDetail.jsx
│ ├─ ProductInput
│ ├─ Profile
│ │ ├─ ProfileFeedSection
│ │ │ ├─ ProfileFeedHeader
│ │ │ ├─ ProfileFeedSection.jsx
│ │ ├─ ProfileItemSection
│ │ │ ├─ ProfileItemList
│ │ │ ├─ ProfileItemSection.jsx
│ │ └─ ProfileSection
│ │ ├─ ProfileFollow
│ │ ├─ ProfileFooter
│ │ ├─ ProfileHeader
│ │ ├─ ProfileSection.jsx
│ ├─ Splash
│ ├─ TopBar
│ │ ├─ BackButton.jsx
│ │ ├─ CommonTopBar
│ │ ├─ FollowTopBar
│ │ ├─ MainTopBar
│ │ ├─ SaveTopBar
│ │ ├─ SearchTopBar
│ │ ├─ UpLoadTopBar
│ └─ common
│ ├─ Loading
│ ├─ Login
│ ├─ Modal
│ │ ├─ Alert
│ │ │ ├─ ChatAlert.jsx
│ │ │ ├─ CommentAlert.jsx
│ │ │ ├─ DeleteAlert.jsx
│ │ │ ├─ LogOutAlert.jsx
│ │ ├─ Modal
│ │ │ ├─ ChatRoomModal.jsx
│ │ │ ├─ CommentModal.jsx
│ │ │ ├─ Modal.jsx
│ │ │ ├─ PostModal.jsx
│ │ │ ├─ ProductModal.jsx
│ │ └─ Toast
│ ├─ PostContent
│ ├─ SetProfile
│ │ ├─ SetProfile.jsx
│ │ ├─ SetProfileHeader
│ │ ├─ SetProfileImage
│ │ ├─ SetProfileInput
│ └─ UserList
│ ├─ PostUserList.jsx
│ ├─ UserList.jsx
├─ context
│ └─ UserContext.jsx
├─ hooks
│ ├─ useFetch.jsx
│ └─ useUserContext.jsx
├─ index.js
└─ pages
├─ Chat
├─ Follow
├─ Home
│ ├─ Home.jsx
│ ├─ IsHaveFeed
│ └─ NoFeed
├─ Join
├─ NotFound
├─ Post
│ ├─ Post.jsx
│ ├─ PostEdit.jsx
├─ Product
│ ├─ Product.jsx
│ ├─ ProductEdit.jsx
├─ Profile
│ ├─ MyProfile.jsx
│ ├─ Profile.jsx
│ ├─ ProfileEdit.jsx
└─ Search
```

## 5. 프로젝트 배포 후 느낀 점

| 이름   | 느낀 점                                                                                                                                                                                                                                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김다정 | 기간내에 끝내기만 하는 것이 목표였는데 생각보다 여유롭게 별 탈 없이 해내서 매우 기쁩니다. 기본 기능 이상을 해낸 부분들도 있어 매우 기뻤으며, 코드를 쓰는 도중 막히면 모두가 나서서 문제 해결을 도와주었는데 정말 이상적인 팀 프로젝트를 경험해 봤다고 생각합니다.                                                                                                               |
| 권지혜 | 코드를 작성하는 것만큼 소프트 스킬, 대화 스킬도 중요하다는 사실을 깨달았습니다. 그리고 혼자 했을 때 어려웠던 문제가 생각보다 간단하게 해결되는 것을 보면서 안도하면서도 한편으로는 심적으로 힘들었습니다. 다른 팀원들에 비해 상대적으로 많은 시간이 걸리지만, 적어도 코드 흐름을 읽기 시작했다는 점이 저에게 큰 발전이라고 생각합니다.             |
| 이석우 | 시작할 때는 소프트 스킬, 그리고 리더십의 발전을 기대했지만 무난하게 잘 따라와주는 팀원들 덕분에 큰 우여곡절 없이 여기까지 왔습니다. 여기까지 오는 데 고민한 시간들 또한 저에게 있어 큰 발전이라고 생각합니다. 그리고 협업할 때 필요한 기술들에 대해 많이 알 수 있어서 좋았습니다.                                                                                 |
| 이유진 | 협업하면서 가장 중요하다고 생각했던 대화 부분은 여러 협업 도구를 통해 잘 이루어졌다고 생각합니다. 또한 서로 작성한 코드들을 사용하다보니 어떤 식으로 코드를 짰는지 점점 이해하는 나의 모습을 보면서 처음 여기에 들어왔을 때보다 많이 성장했다는 느낌을 받았습니다. 그리고 막히는 부분이 있다면 다 같이 모여서 해결하는 상황이 너무 인상깊었습니다. |
