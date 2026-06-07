import { create } from "zustand";
import type { DateRange } from "react-day-picker";

export type AlarmCategory = "공지사항" | "이벤트" | "알림";
export type AlarmStatus = "노출" | "예정" | "완료";
export type CategoryFilter = "전체" | AlarmCategory;

export type Alarm = {
  id: number;
  author: string;
  category: AlarmCategory;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  status: AlarmStatus;
};

export type AlarmFormData = {
  id: number | null;
  title: string;
  content: string;
  category: AlarmCategory;
  author: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};

const defaultAlarmForm: AlarmFormData = {
  id: null,
  title: "",
  content: "",
  category: "공지사항",
  author: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
};

export function parseDateTime(dateTime: string) {
  const [date, time = "00:00:00"] = dateTime.split(" ");
  return { date, time: time.slice(0, 5) };
}

export function toDateTime(date: string, time: string) {
  if (!date) return "";
  const normalizedTime = time.length === 5 ? `${time}:00` : time;
  return `${date} ${normalizedTime}`;
}

export function formatInputDate(date?: Date) {
  if (!date) return "";
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function toDateRange(
  startDate: string,
  endDate: string
): DateRange | undefined {
  if (!startDate) return undefined;
  const from = new Date(startDate);
  if (!endDate) return { from, to: from };
  const to = new Date(endDate);
  return { from, to };
}

type AlarmState = {
  selectedAlarms: number[];
  alarms: Alarm[];
  currentPage: number;
  categoryFilter: CategoryFilter;
  searchTerm: string;
  alarmForm: AlarmFormData;
  selectedRange?: DateRange;

  toggleSelectAlarm: (id: number) => void;
  toggleSelectAll: (ids: number[]) => void;
  clearSelection: () => void;
  setCurrentPage: (page: number) => void;
  setCategoryFilter: (filter: CategoryFilter) => void;
  setSearchTerm: (term: string) => void;
  setAlarms: (alarms: Alarm[]) => void;
  deleteAlarms: (ids: number[]) => void;
  initAlarmForm: (id: number) => void;
  updateAlarmForm: (partial: Partial<AlarmFormData>) => void;
  setSelectedRange: (range?: DateRange) => void;
  saveAlarmDraft: () => void;
  saveAlarm: () => void;
};

export const useAlarmStore = create<AlarmState>((set, get) => ({
  selectedAlarms: [],
  alarms: [],
  currentPage: 1,
  categoryFilter: "전체",
  searchTerm: "",
  alarmForm: defaultAlarmForm,
  selectedRange: undefined,

  toggleSelectAlarm: (id) =>
    set((state) => ({
      selectedAlarms: state.selectedAlarms.includes(id)
        ? state.selectedAlarms.filter((alarmId) => alarmId !== id)
        : [...state.selectedAlarms, id],
    })),

  toggleSelectAll: (ids) =>
    set((state) => ({
      selectedAlarms:
        state.selectedAlarms.length === ids.length ? [] : ids,
    })),

  clearSelection: () => set({ selectedAlarms: [] }),

  setCurrentPage: (page) => set({ currentPage: page }),

  setCategoryFilter: (filter) =>
    set({ categoryFilter: filter, currentPage: 1 }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),

  setAlarms: (alarms) => set({ alarms }),

  deleteAlarms: (ids) =>
    set((state) => ({
      alarms: state.alarms.filter((alarm) => !ids.includes(alarm.id)),
      selectedAlarms: [],
      currentPage: 1,
    })),

  initAlarmForm: (id) => {
    const alarm = get().alarms.find((item) => item.id === id);
    if (!alarm) return;

    const start = parseDateTime(alarm.startDate);
    const end = parseDateTime(alarm.endDate);

    set({
      alarmForm: {
        id: alarm.id,
        title: alarm.title,
        content: alarm.content,
        category: alarm.category,
        author: alarm.author,
        startDate: start.date,
        startTime: start.time,
        endDate: end.date,
        endTime: end.time,
      },
      selectedRange: toDateRange(start.date, end.date),
    });
  },

  updateAlarmForm: (partial) =>
    set((state) => ({
      alarmForm: { ...state.alarmForm, ...partial },
    })),

  setSelectedRange: (range) =>
    set((state) => ({
      selectedRange: range,
      alarmForm: {
        ...state.alarmForm,
        startDate: formatInputDate(range?.from),
        endDate: formatInputDate(range?.to ?? range?.from),
      },
    })),

  saveAlarmDraft: () => {
    const { alarmForm, alarms } = get();
    if (!alarmForm.id) return;

    const existing = alarms.find((alarm) => alarm.id === alarmForm.id);
    if (!existing) return;

    const updated: Alarm = {
      ...existing,
      title: alarmForm.title,
      content: alarmForm.content,
      category: alarmForm.category,
      author: alarmForm.author,
      startDate: toDateTime(alarmForm.startDate, alarmForm.startTime),
      endDate: toDateTime(
        alarmForm.endDate,
        alarmForm.endTime || "23:59"
      ),
    };

    set({
      alarms: alarms.map((alarm) =>
        alarm.id === updated.id ? updated : alarm
      ),
    });
  },

  saveAlarm: () => {
    get().saveAlarmDraft();
  },
}));
