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

// 알림 목업 데이터
import type { Alarm } from "../stores/alarm.store";
import { theme } from "../styles/theme";

export const MOCK_ALARMS: Alarm[] = [
  {
    id: 1,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "노출",
  },
  {
    id: 2,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "예정",
  },
  {
    id: 3,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "완료",
  },
  {
    id: 4,
    author: "홍길동",
    category: "이벤트",
    title: "신규 회원 가입 이벤트 안내",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-01-10 09:00:00",
    endDate: "2024-01-31 23:59:59",
    status: "노출",
  },
  {
    id: 5,
    author: "김철수",
    category: "알림",
    title: "서버 점검 안내",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-02-01 00:00:00",
    endDate: "2024-02-01 06:00:00",
    status: "예정",
  },
  {
    id: 6,
    author: "홍길동",
    category: "공지사항",
    title: "개인정보 처리방침 변경 안내",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-11-01 10:00:00",
    endDate: "2023-12-31 23:59:59",
    status: "완료",
  },
  {
    id: 7,
    author: "이영희",
    category: "이벤트",
    title: "연말 감사 이벤트",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-20 00:00:00",
    endDate: "2023-12-31 23:59:59",
    status: "완료",
  },
  {
    id: 8,
    author: "홍길동",
    category: "알림",
    title: "앱 업데이트 알림",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-03-01 08:00:00",
    endDate: "2024-03-07 23:59:59",
    status: "노출",
  },
  {
    id: 9,
    author: "박민수",
    category: "공지사항",
    title: "커뮤니티 가이드라인 업데이트",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-02-15 12:00:00",
    endDate: "2024-03-15 12:00:00",
    status: "예정",
  },
  {
    id: 10,
    author: "홍길동",
    category: "이벤트",
    title: "봄맞이 할인 이벤트",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-03-01 00:00:00",
    endDate: "2024-03-31 23:59:59",
    status: "노출",
  },
  {
    id: 11,
    author: "최지우",
    category: "알림",
    title: "하모니룸 초대 알림",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-01-05 14:30:00",
    endDate: "2024-01-12 14:30:00",
    status: "완료",
  },
  {
    id: 12,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "노출",
  },
  {
    id: 13,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "예정",
  },
  {
    id: 14,
    author: "홍길동",
    category: "공지사항",
    title: "앱 사용성을 개선했어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2023-12-25 11:14:12",
    endDate: "2024-01-03 12:00:00",
    status: "완료",
  },
  {
    id: 15,
    author: "홍길동",
    category: "알림",
    title: "새로운 기능이 추가되었어요.",
    content: "안녕하세요. 멜로그 서비스팀입니다.",
    startDate: "2024-04-01 09:00:00",
    endDate: "2024-04-30 23:59:59",
    status: "노출",
  },
];

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

export interface SocialLoginStatItem {
  name: string;
  value: number;
  colorKey: keyof typeof theme.colors;
}

export interface UsageTimeStatItem {
  hour: string;
  count: number;
}

export interface WithdrawalRateStatItem {
  label: string;
  cumulativeLogin: number;
  cumulativeWithdrawal: number;
}

export interface SignalBarItem {
  label: string;
  count: number;
}

export interface SignalStatGroup {
  feed: SignalBarItem[];
  harmonyRoom: SignalBarItem[];
  calendar: SignalBarItem[];
  share: SignalBarItem[];
}

export const MOCK_USER_STATISTICS = {
  socialLogin: {
    totalUsers: 48279,
    items: [
      { name: "구글", value: 1534, colorKey: "pie_chart_green" },
      { name: "카카오", value: 18542, colorKey: "pie_chart_yellow" },
      { name: "애플", value: 28203, colorKey: "pie_chart_blue" },
    ] as SocialLoginStatItem[],
  },
  usageTime: [
    { hour: "00시", count: 120 },
    { hour: "03시", count: 80 },
    { hour: "06시", count: 210 },
    { hour: "09시", count: 480 },
    { hour: "12시", count: 760 },
    { hour: "15시", count: 920 },
    { hour: "18시", count: 880 },
    { hour: "21시", count: 540 },
  ] as UsageTimeStatItem[],
  withdrawalRate: [
    { label: "2/1", cumulativeLogin: 180, cumulativeWithdrawal: 90 },
    { label: "2/2", cumulativeLogin: 240, cumulativeWithdrawal: 140 },
    { label: "2/3", cumulativeLogin: 380, cumulativeWithdrawal: 210 },
    { label: "2/4", cumulativeLogin: 520, cumulativeWithdrawal: 280 },
    { label: "2/5", cumulativeLogin: 920, cumulativeWithdrawal: 350 },
    { label: "2/6", cumulativeLogin: 420, cumulativeWithdrawal: 390 },
    { label: "2/7", cumulativeLogin: 130, cumulativeWithdrawal: 430 },
  ] as WithdrawalRateStatItem[],
  featureUsage: {
    totalUsage: 48279,
    items: [
      { name: "홈", value: 1534, colorKey: "pie_chart_green" },
      { name: "하모니룸", value: 28203, colorKey: "pie_chart_blue" },
      { name: "캘린더", value: 12000, colorKey: "pie_chart_yellow" },
      { name: "마이페이지", value: 6542, colorKey: "pie_chart_pink" },
    ] as SocialLoginStatItem[],
  },
  harmonyRoomUser: {
    totalUsers: 20495,
    items: [
      { name: "제작 누적수", value: 11248, colorKey: "pie_chart_green" },
      { name: "폐쇄 누적수", value: 9247, colorKey: "pie_chart_pink" },
    ] as SocialLoginStatItem[],
  },
  positiveSignal: {
    feed: [
      { label: "좋아요", count: 420 },
      { label: "북마크", count: 310 },
      { label: "댓글", count: 280 },
    ],
    harmonyRoom: [
      { label: "개수", count: 380 },
      { label: "누적가입", count: 450 },
      { label: "북마크", count: 290 },
    ],
    calendar: [{ label: "북마크", count: 360 }],
    share: [
      { label: "피드", count: 320 },
      { label: "마이페이지", count: 240 },
    ],
  } as SignalStatGroup,
  negativeSignal: {
    feed: [
      { label: "좋아요", count: 180 },
      { label: "북마크", count: 140 },
      { label: "댓글", count: 120 },
    ],
    harmonyRoom: [
      { label: "개수", count: 210 },
      { label: "누적가입", count: 260 },
      { label: "북마크", count: 190 },
    ],
    calendar: [{ label: "북마크", count: 150 }],
    share: [
      { label: "피드", count: 170 },
      { label: "마이페이지", count: 130 },
    ],
  } as SignalStatGroup,
};
