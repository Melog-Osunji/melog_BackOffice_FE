import type { Account } from "../../shared/stores/account.store";

//계정관리 mockdata
export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 1,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 2,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 3,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 4,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 5,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 6,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 7,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 8,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 9,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
  {
    id: 10,
    name: "홍길동",
    email: "Melog@gmail.com",
  },
];

//1:1문의 mockdata
export interface QnA {
  id: number;
  name: string;
  email: string;
  category: string;
  content: string;
  date: string;
  status: "답변하기" | "답변완료";
}

export const MOCK_QNAS: QnA[] = [
  {
    id: 1,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "서비스 문의",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변하기",
  },
  {
    id: 2,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "기능 제안",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변완료",
  },
  {
    id: 3,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "서비스 문의",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변하기",
  },
  {
    id: 4,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "서비스 문의",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변하기",
  },
  {
    id: 5,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "서비스 문의",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변완료",
  },
  {
    id: 6,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "서비스 문의",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변완료",
  },
  {
    id: 7,
    name: "홍길동",
    email: "Melog@gmail.com",
    category: "기타",
    content: "멜로그 서비스 중 궁금한 게 있어요. 알...",
    date: "2025-12-25 11:14:12",
    status: "답변하기",
  },
];

// 키워드 관리 목업 데이터
export interface Keyword {
  id: number;
  name: string;
  category: string;
  keywords: string[];
}

export const MOCK_KEYWORDS: Keyword[] = [
  {
    id: 1,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 2,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 3,
    name: "아무개",
    category: "연주자",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 4,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 5,
    name: "콘트라베이스",
    category: "악기",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 6,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 7,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 8,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 9,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 10,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 11,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 12,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 13,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 14,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
  {
    id: 15,
    name: "바흐",
    category: "작곡가",
    keywords: ["온보딩", "연관검색어", "게시물", "하모니룸"]
  },
]

// 하모니룸 인터페이스
export interface HarmonyRoom {
  id: number;
  nickname: string;
  role: "owner" | "member"; // 운영자 | 일반회원
  roomName: string;
  roomId: number;
}

export interface HarmonyRoomDetail {
  id: number;
  ownerEmail: string;
  roomName: string;
  keywords: string[];
  description: string;
  createAt: string;
}

// 하모니룸 목업데이터
export const MOCK_HARMONYROOM: HarmonyRoom[] = [
  {
    id: 1,
    nickname: "배톨이",
    role: "owner",
    roomName: "베토벤을 사랑하는 모임",
    roomId: 1,
  },
  {
    id: 2,
    nickname: "아갓시",
    role: "member",
    roomName: "베토벤을 사랑하는 모임",
    roomId: 1,
  },
  {
    id: 3,
    nickname: "배톨이",
    role: "owner",
    roomName: "베토벤을 사랑하는 모임2",
    roomId: 2,
  },
  {
    id: 4,
    nickname: "아갓시",
    role: "member",
    roomName: "베토벤을 사랑하는 모임2",
    roomId: 2,
  },
  {
    id: 5,
    nickname: "배톨이2",
    role: "member",
    roomName: "베토벤을 사랑하는 모임2",
    roomId: 2,
  },
  {
    id: 6,
    nickname: "아갓시",
    role: "owner",
    roomName: "베토벤을 사랑하는 모임3",
    roomId:3,
  },
  {
    id: 7,
    nickname: "배톨이",
    role: "owner",
    roomName: "베토벤을 사랑하는 모임4",
    roomId:4
  },
  {
    id: 8,
    nickname: "아갓시",
    role: "member",
    roomName: "베토벤을 사랑하는 모임4",
    roomId:4,
  },
  {
    id: 9,
    nickname: "배톨이",
    role: "owner",
    roomName: "베토벤을 사랑하는 모임22",
    roomId:5,
  },
  {
    id: 10,
    nickname: "아갓시",
    role: "member",
    roomName: "베토벤을 사랑하는 모임22",
    roomId:5,
  },
  {
    id: 11,
    nickname: "배톨이",
    role: "member",
    roomName: "베토벤을 사랑하는 모임22",
    roomId: 5,
  },
  {
    id: 12,
    nickname: "아갓시",
    role: "member",
    roomName: "베토벤을 사랑하는 모임22",
    roomId:5,
  },
]

// 하모니룸 디테일 목업데이터
export const MOCK_ROOMDETAIL: HarmonyRoomDetail[] = [
  {
    id: 1,
    ownerEmail: "melog@gmail.com",
    roomName: "베토벤을 사랑하는 모임",
    keywords: ["베토벤", "피아노"],
    description: "베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임",
    createAt: "2026.02.02"
  },
  {
    id: 2,
    ownerEmail: "melog@gmail.com",
    roomName: "베토벤을 사랑하는 모임2",
    keywords: ["베토벤", "피아노"],
    description: "베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임",
    createAt: "2026.02.02"
  },
  {
    id: 3,
    ownerEmail: "melog@gmail.com",
    roomName: "베토벤을 사랑하는 모임3",
    keywords: ["베토벤", "피아노"],
    description: "베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임",
    createAt: "2026.02.02"
  },
  {
    id: 4,
    ownerEmail: "melog@gmail.com",
    roomName: "베토벤을 사랑하는 모임4",
    keywords: ["베토벤", "피아노"],
    description: "베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임",
    createAt: "2026.02.02"
  },
  {
    id: 5,
    ownerEmail: "melog@gmail.com",
    roomName: "베토벤을 사랑하는 모임22",
    keywords: ["베토벤", "피아노"],
    description: "베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임",
    createAt: "2026.02.02"
  },
]

// 캘린더 목업 데이터
export interface Calendar {
  id: number;
  name: string;
  category: string;
  date : string;
  bookmarks: number;
}

export const MOCK_CALENDAR : Calendar[] = [
  {
    id: 1,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 2,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 3,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 4,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 5,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 6,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 7,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 8,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 9,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
  {
    id: 10,
    category: "연극",
    date: "2026.01.01",
    bookmarks: 34,
    name: "홍길동의 소나타"
  },
]

export const MOCK_LEAVE_STATISTICS = {
  serviceLeave: [
    { division: "0", num: 148 },
    { division: "1", num: 93 },
    { division: "2", num: 74 },
    { division: "3", num: 39 },
    { division: "4", num: 57 },
  ],
  roomClose: [
    { division: "1", num: 121 },
    { division: "2", num: 88 },
    { division: "3", num: 46 },
    { division: "4", num: 63 },
  ],
};
