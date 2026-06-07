export const Y_AXIS_TICKS = [0, 200, 400, 600, 800, 1000];

export const SIGNAL_Y_AXIS_TICKS = [
  0,
  100,
  200,
  300,
  400,
  500,
];

export const TOOLTIP_STYLE = {
  borderRadius: 12,
  border: "1px solid #BDCAD8",
  boxShadow: "0 12px 24px rgba(16, 24, 40, 0.08)",
};

export const SIGNAL_CHARTS = [
  { key: "feed", title: "피드 통계" },
  { key: "harmonyRoom", title: "하모니룸 통계" },
  { key: "calendar", title: "캘린더 통계" },
  { key: "share", title: "공유 통계" },
] as const;