import { create } from "zustand";
import type { DateRange } from "react-day-picker";
import type { Calendar } from "../constants/mockData"

type CalendarState = {
  calendars: Calendar[];
  currentPage: number;

  /** 필터 */
  category: string;
  searchTerm: string;

  /** DayPicker range */
  selectedRange?: DateRange;

  setCalendars: (items: Calendar[]) => void;
  setCurrentPage: (page: number) => void;

  setCategory: (category: string) => void;
  setSearchTerm: (term: string) => void;

  setSelectedRange: (range?: DateRange) => void;
  resetFilters: () => void;
};

export const useCalendarStore = create<CalendarState>((set) => ({
  calendars: [],
  currentPage: 1,

  category: "전체",
  searchTerm: "",
  selectedRange: undefined,

  setCalendars: (items) => set({ calendars: items }),
  setCurrentPage: (page) => set({ currentPage: page }),

  setCategory: (category) => set({ category, currentPage: 1 }),
  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),

  setSelectedRange: (range) => set({ selectedRange: range, currentPage: 1 }),

  resetFilters: () =>
    set({
      currentPage: 1,
      category: "전체",
      searchTerm: "",
      selectedRange: undefined,
    }),
}));