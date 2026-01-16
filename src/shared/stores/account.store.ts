import { create } from "zustand";

export type FilterType = "이름" | "이메일" | "이름 + 이메일";
export type SortBy = "이름" | "이메일" | "가입일";

export type Account = {
  id: number;
  name: string;
  email: string;
};

type AccountState = {
  selectedAccounts: number[];
  accounts: Account[];
  currentPage: number;
  filterType: FilterType;
  searchTerm: string;
  sortBy: SortBy;

  // Actions
  toggleSelectAccount: (id: number) => void;
  toggleSelectAll: (accountIds: number[]) => void;
  clearSelection: () => void;
  setCurrentPage: (page: number) => void;
  setFilterType: (filter: FilterType) => void;
  setSearchTerm: (term: string) => void;
  setSortBy: (sort: SortBy) => void;
  setAccounts: (accounts: Account[]) => void;
  deleteAccounts: (ids: number[]) => void;
};

export const useAccountStore = create<AccountState>((set) => ({
  selectedAccounts: [],
  accounts: [],
  currentPage: 1,
  filterType: "이름 + 이메일",
  searchTerm: "",
  sortBy: "이름",

  toggleSelectAccount: (id) =>
    set((state) => ({
      selectedAccounts: state.selectedAccounts.includes(id)
        ? state.selectedAccounts.filter((accountId) => accountId !== id)
        : [...state.selectedAccounts, id],
    })),

  toggleSelectAll: (accountIds) =>
    set((state) => ({
      selectedAccounts:
        state.selectedAccounts.length === accountIds.length
          ? []
          : accountIds,
    })),

  clearSelection: () => set({ selectedAccounts: [] }),

  setCurrentPage: (page) => set({ currentPage: page }),

  setFilterType: (filter) => set({ filterType: filter }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),

  setSortBy: (sort) => set({ sortBy: sort }),

  setAccounts: (accounts) => set({ accounts }),

  deleteAccounts: (ids) =>
    set((state) => ({
      accounts: state.accounts.filter((acc) => !ids.includes(acc.id)),
      selectedAccounts: [],
      currentPage: 1,
    })),
}));