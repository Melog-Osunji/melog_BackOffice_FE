import { create } from "zustand";

export type FilterType = "이름" | "구분" | "키워드";
export type SortBy = "이름" | "구분" | "생성일";

export type Keyword = {
  id: number;
  name: string;
  category: string;
  keywords: string[];
};

type KeywordState = {
  selectedKeywords: number[];
  keywords: Keyword[];
  currentPage: number;
  filterType: FilterType;
  searchTerm: string;
  sortBy: SortBy;

  // Actions
  toggleSelectKeyword: (id: number) => void;
  toggleSelectAll: (ids: number[]) => void;
  clearSelection: () => void;
  setCurrentPage: (page: number) => void;
  setFilterType: (filter: FilterType) => void;
  setSearchTerm: (term: string) => void;
  setSortBy: (sort: SortBy) => void;
  setKeywords: (keywords: Keyword[]) => void;
  deleteKeywords: (ids: number[]) => void;
};

export const useKeywordStore = create<KeywordState>((set) => ({
  selectedKeywords: [],
  keywords: [],
  currentPage: 1,
  filterType: "키워드",
  searchTerm: "",
  sortBy: "이름",

  toggleSelectKeyword: (id) =>
    set((state) => ({
      selectedKeywords: state.selectedKeywords.includes(id)
        ? state.selectedKeywords.filter((kid) => kid !== id)
        : [...state.selectedKeywords, id],
    })),

  toggleSelectAll: (ids) =>
    set((state) => ({
      selectedKeywords:
        state.selectedKeywords.length === ids.length ? [] : ids,
    })),

  clearSelection: () => set({ selectedKeywords: [] }),

  setCurrentPage: (page) => set({ currentPage: page }),

  setFilterType: (filter) => set({ filterType: filter }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),

  setSortBy: (sort) => set({ sortBy: sort }),

  setKeywords: (keywords) => set({ keywords }),

  deleteKeywords: (ids) =>
    set((state) => ({
      keywords: state.keywords.filter((kw) => !ids.includes(kw.id)),
      selectedKeywords: [],
      currentPage: 1,
    })),
}));
