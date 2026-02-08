import { create } from "zustand";

export type HarmonyRole = "owner" | "member";

export type HarmonyRoom = {
  id: number;
  nickname: string;
  role: HarmonyRole;
  roomName: string;
  roomId: number;
};

type HarmonyState = {
  rooms: HarmonyRoom[];
  currentPage: number;
  filterType: "닉네임" | "하모니룸 이름" | "닉네임 + 하모니룸 이름";
  searchTerm: string;

  setRooms: (rooms: HarmonyRoom[]) => void;
  setCurrentPage: (page: number) => void;
  setFilterType: (filter: "닉네임" | "하모니룸 이름" | "닉네임 + 하모니룸 이름") => void;
  setSearchTerm: (term: string) => void;
};

export const useHarmonyStore = create<HarmonyState>((set) => ({
  rooms: [],
  currentPage: 1,
  filterType: "닉네임 + 하모니룸 이름",
  searchTerm: "",

  setRooms: (rooms) => set({ rooms }),

  setCurrentPage: (page) => set({ currentPage: page }),

  setFilterType: (filter) => set({ filterType: filter }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
}));
