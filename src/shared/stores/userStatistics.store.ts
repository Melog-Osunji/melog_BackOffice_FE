import { create } from "zustand";

export type UserCategory = "member" | "feature" | "all";
export type MemberStatType = "socialLogin" | "usageTime" | "withdrawalRate";
export type AllUserStatType = "harmonyRoom" | "positiveSignal" | "negativeSignal";

type UserStatisticsState = {
  category: UserCategory;
  startYear: string;
  startDate: string;
  endYear: string;
  endDate: string;
  statType: MemberStatType;
  allStatType: AllUserStatType;

  setCategory: (category: UserCategory) => void;
  setStartYear: (year: string) => void;
  setStartDate: (date: string) => void;
  setEndYear: (year: string) => void;
  setEndDate: (date: string) => void;
  setStatType: (statType: MemberStatType) => void;
  setAllStatType: (statType: AllUserStatType) => void;
};

export const useUserStatisticsStore = create<UserStatisticsState>((set) => ({
  category: "member",
  startYear: "2026",
  startDate: "01-22",
  endYear: "2026",
  endDate: "01-22",
  statType: "socialLogin",
  allStatType: "harmonyRoom",

  setCategory: (category) => set({ category }),
  setStartYear: (startYear) => set({ startYear }),
  setStartDate: (startDate) => set({ startDate }),
  setEndYear: (endYear) => set({ endYear }),
  setEndDate: (endDate) => set({ endDate }),
  setStatType: (statType) => set({ statType }),
  setAllStatType: (allStatType) => set({ allStatType }),
}));

export function parseStoreDate(year: string, date: string) {
  if (!year || !date) return undefined;

  const [month, day] = date.split("-").map(Number);
  if (!month || !day) return undefined;

  return new Date(Number(year), month - 1, day);
}

export function formatStoreDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}`;
}

export function formatMonthDayLabel(year: string, date: string) {
  if (!date) return "날짜 선택";

  const parsed = parseStoreDate(year, date);
  if (!parsed) return "날짜 선택";

  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${month}월 ${day}일`;
}

export const YEAR_OPTIONS = [
  { label: "2026년", value: "2026" },
  { label: "2025년", value: "2025" },
  { label: "2024년", value: "2024" },
];

export const STAT_TYPE_OPTIONS = [
  { label: "소셜로그인 사용내역 통계", value: "socialLogin" },
  { label: "사용시간대 통계", value: "usageTime" },
  { label: "사용자 탈퇴 비율", value: "withdrawalRate" },
] as const;

export const ALL_STAT_TYPE_OPTIONS = [
  { label: "하모니룸 사용자 통계", value: "harmonyRoom" },
  { label: "긍정 신호 통계", value: "positiveSignal" },
  { label: "부정 신호 통계", value: "negativeSignal" },
] as const;
