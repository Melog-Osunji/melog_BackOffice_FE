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
